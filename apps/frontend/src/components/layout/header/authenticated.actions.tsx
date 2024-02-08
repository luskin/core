"use client"
import Link from "next/link"
import { Row } from "../flex"
import { Button } from "@/components/primitives/button"
import { auth } from "@/lib/auth/auth"
import { revalidatePath } from "next/cache"
import { useRouter } from "next/navigation"

interface AuthenticatedHeaderActionsProps {}

export function AuthenticatedHeaderActions(
  props: AuthenticatedHeaderActionsProps
) {
  const router = useRouter()
  async function handleSignOut() {
    const isOk = await auth.signOut()

    if (isOk) {
      router.refresh()
    }
  }

  return (
    <Row gap={2}>
      <Link href="/sign-in">
        <Button variant={"ghost"} icon="userFlat" onClick={handleSignOut}>
          Sign out
        </Button>
      </Link>
    </Row>
  )
}
