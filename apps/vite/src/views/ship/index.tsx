import { Button } from "@core/ui"
import { Link, Outlet } from "@tanstack/react-router"

export default function ShipPage() {
  return (
    <div>
      Ship it!
      <Link to="/ship/ltl">
        <Button>Click me</Button>
      </Link>
      <Outlet />
    </div>
  )
}
