import { firebaseServer } from "@/lib/auth/firebase.server"
import { AdminBoundary } from "@/ui/boundaries/admin.boundary"
import { Button } from "@/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/components/dropdown"

export default async function UserDropdown() {
  const user = await firebaseServer.getCurrentUser()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"md"} icon="userFlat" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          {user?.displayName ?? user?.email ?? "Account"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon="userFlat">Profile</DropdownMenuItem>
        <DropdownMenuItem icon="paymentCard">Billing</DropdownMenuItem>
        <DropdownMenuItem icon="trucks">Team</DropdownMenuItem>
        <DropdownMenuItem icon="bell">Inbox</DropdownMenuItem>
        <AdminBoundary>
          <DropdownMenuLabel>Admin</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem icon="alienShip" description="Company directory">
            Employees
          </DropdownMenuItem>
          <DropdownMenuItem icon="plus">Acquisition</DropdownMenuItem>
          <DropdownMenuItem icon="bell">Actions</DropdownMenuItem>
        </AdminBoundary>
        <DropdownMenuItem icon="logout" destructive className="mt-2">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
