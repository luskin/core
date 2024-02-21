import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { APIResponse } from "../../types/api.response"
import { firebaseServer } from "@/lib/auth/firebase.server"

export async function POST(request: NextRequest) {
  const reqBody = (await request.json()) as { idToken: string }
  const idToken = reqBody.idToken

  const expiresIn = 60 * 60 * 24 * 14 * 1000 // 14 days

  const sessionCookie = await firebaseServer.createSessionCookie(idToken, {
    expiresIn,
  })

  cookies().set("__session", sessionCookie, {
    maxAge: expiresIn,
    httpOnly: true,
    secure: true,
  })

  return NextResponse.json<APIResponse<string>>({
    success: true,
    data: "Signed in successfully.",
  })
}
