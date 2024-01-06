import { Button } from "@repo/ui"
import { useNavigate, useParams } from "@tanstack/react-router"

export default function ShipLtlIdPage() {
  const navigate = useNavigate()
  const { id } = useParams({
    from: "/authenticated/ship/ltl/$id",
  })
  return (
    <div>
      /LTL/{id} -{" "}
      <Button
        onClick={() =>
          navigate({
            to: "/ship/ltl",
          })
        }
      >
        Go back
      </Button>
    </div>
  )
}
