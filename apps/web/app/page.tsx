import { Button } from "@repo/ui/button"
import Link from "next/link"

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col gap-2">
      <Link href={`/dashboard/settings/profile`}>
        <Button>Click me to go to profile</Button>
      </Link>

      <Link href={`/dashboard/settings/users`}>
        <Button>Click me to go to users</Button>
      </Link>

      <Link href={`/login`}>
        <Button>Click me to go to login</Button>
      </Link>

      <Link href={`/reset-password`}>
        <Button>Click me to go to reset password page</Button>
      </Link>

      <Link href={`/sign-up`}>
        <Button>Click me to go to sign-up</Button>
      </Link>
    </main>
  )
}
