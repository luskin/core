import { Header } from "@/ui/layout/header"
import { firebaseServer } from "@/lib/auth/firebase.server"

export default async function AppBar() {
  const user = await firebaseServer.getCurrentUser()

  return (
    <Header
      authenticated={Boolean(user)}
      isAdmin={user?.email?.endsWith("@mothership.com")}
    />
  )
}
