"use client"
import Link from "next/link"
import { Button } from "@/ui/components/button"
import { auth } from "@/lib/auth/auth"
import { useRouter } from "next/navigation"

interface SignOutProps {}

export function SignOut(_props: SignOutProps) {
  const router = useRouter()
  async function handleSignOut() {
    const isOk = await auth.signOut()

    if (isOk) {
      router.refresh()
    }
  }

  return (
    <Link href="/sign-in">
      <Button variant={"ghost"} icon="userFlat" onClick={handleSignOut}>
        Sign out
      </Button>
    </Link>
  )
}
