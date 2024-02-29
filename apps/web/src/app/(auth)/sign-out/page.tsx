"use client"

import { Column } from "@/ui/layout/flex"
import { Button } from "@/ui/components/button"
import { Heading } from "@/ui/components/typography"
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
        <Heading size="xl">Sign out</Heading>
        <Button variant="primary" onClick={handleSignOut}>
          Sign out of session
        </Button>
      </Column>
    </div>
  )
}
