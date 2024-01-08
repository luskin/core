import { Link } from "@tanstack/react-router"

export default function ShipLtlPage() {
  return (
    <div>
      /LTL
      <Link
        to="/ship/ltl/$id"
        params={{ id: Math.floor(Math.random() * 100).toFixed(0) }}
      >
        Click me to go to a random LTL quote page
      </Link>
    </div>
  )
}
