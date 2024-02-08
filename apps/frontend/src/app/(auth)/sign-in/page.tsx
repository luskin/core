"use client"

import { Column } from "@/ui/layout/flex"
import { Button } from "@/ui/components/button"
import { Heading } from "@/ui/components/typography"
import { auth } from "@/lib/auth/auth"
import { useRouter } from "next/navigation"

export default function SignInPage() {
  const router = useRouter()

  async function handleSignIn() {
    const isOk = await auth.signInWithGoogle()

    if (isOk) {
      // TODO - probably should display a message to the user
      router.push("/")
      router.refresh()
    }
  }

  return (
    <div className="w-full">
      <Column gap={2}>
        <Heading size="h1">Sign in</Heading>
        <Button variant="primary" onClick={handleSignIn}>
          Sign in with Google
        </Button>
      </Column>
    </div>
  )
}
