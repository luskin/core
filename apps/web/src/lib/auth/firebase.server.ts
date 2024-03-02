import "server-only"

import { cookies } from "next/headers"

import { credential } from "firebase-admin"
import { initializeApp, getApps, cert, App } from "firebase-admin/app"
import { Auth, SessionCookieOptions, getAuth } from "firebase-admin/auth"
import { config } from "@/config"

const APP_NAME = "mothership-frontend-nextjs-app"

class FirebaseServerStatic {
  private _app: App

  private _auth: Auth

  public constructor() {
    this._app =
      getApps().find((it) => it.name === APP_NAME) ||
      initializeApp(
        {
          credential: credential.cert({
            projectId: config.firebaseAdmin.projectId,
            clientEmail: config.firebaseAdmin.clientEmail,
            privateKey: config.firebaseAdmin.privateKey,
          }),
        },
        APP_NAME
      )
    this._auth = getAuth(this._app)
  }

  public get auth() {
    return this._auth
  }

  async getSession() {
    try {
      return cookies().get("__session")?.value
    } catch (error) {
      return undefined
    }
  }

  async isUserAuthenticated(session: string | undefined = undefined) {
    const _session = session ?? (await this.getSession())
    if (!_session) return false

    try {
      const isRevoked = !(await this._auth.verifySessionCookie(_session, true))
      return !isRevoked
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async getCurrentUser() {
    const session = await this.getSession()

    if (!(await this.isUserAuthenticated(session))) {
      return null
    }

    const decodedIdToken = await this._auth.verifySessionCookie(session!)
    const currentUser = await this._auth.getUser(decodedIdToken.uid)

    return currentUser
  }

  async createSessionCookie(
    idToken: string,
    sessionCookieOptions: SessionCookieOptions
  ) {
    return this._auth.createSessionCookie(idToken, sessionCookieOptions)
  }

  async revokeAllSessions(session: string) {
    const decodedIdToken = await this._auth.verifySessionCookie(session)

    return await this._auth.revokeRefreshTokens(decodedIdToken.sub)
  }
}

export const firebaseServer = new FirebaseServerStatic()
