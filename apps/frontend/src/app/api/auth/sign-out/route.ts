import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { APIResponse } from "../../types/api.response"
import { firebaseServer } from "@/lib/auth/firebase.server"

export async function GET() {
  const sessionCookie = cookies().get("__session")?.value

  if (!sessionCookie)
    return NextResponse.json<APIResponse<string>>(
      {
        success: false,
        error: {
          message: "Session not found.",
        },
      },
      { status: 400 }
    )

  cookies().delete("__session")

  await firebaseServer.revokeAllSessions(sessionCookie)

  return NextResponse.json<APIResponse<string>>({
    success: true,
    data: "Signed out successfully.",
  })
}
