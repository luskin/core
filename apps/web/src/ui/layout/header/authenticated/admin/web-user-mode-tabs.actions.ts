"use server"

import { Cookies, WebUserMode } from "@shared/types"
import { cookies } from "next/headers"

export async function setUserMode(mode: WebUserMode) {
  "use server"
  const cookieStore = cookies()
  cookieStore.set(Cookies.WebUserMode, mode)
}

export async function getUserMode(): Promise<WebUserMode> {
  "use server"
  const cookieStore = cookies()
  const userMode = cookieStore.get(Cookies.WebUserMode)

  if (!userMode) {
    await setUserMode(WebUserMode.Shipper)
  }

  return (userMode?.value ?? WebUserMode.Shipper) as WebUserMode
}
