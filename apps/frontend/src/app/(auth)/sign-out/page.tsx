"use client"

import { Column } from "@/components/layout/flex"
import { Button } from "@/components/primitives/button"
import { Heading } from "@/components/primitives/typography"
import { auth } from "@/lib/auth/auth"
import { useRouter } from "next/navigation"

export default function SignOutPage() {
  const router = useRouter()

  async function handleSignOut() {
    const isOk = await auth.signOut()

    if (isOk) router.push("/sign-in")
  }

  return (
    <div className="w-full">
      <Column gap={2}>
        <Heading size="h1">Sign out</Heading>
        <Button variant="primary" onClick={handleSignOut}>
          Sign out of session
        </Button>
      </Column>
    </div>
  )
}
