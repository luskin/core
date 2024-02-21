import Link from "next/link"
import { Row } from "../flex"
import { Button } from "@/ui/components/button"

interface UnauthenticatedHeaderActionsProps {}

export function UnauthenticatedHeaderActions(
  props: UnauthenticatedHeaderActionsProps
) {
  return (
    <Row gap={2}>
      <Button variant={"tertiary"} icon="truckSideRight">
        Drive with us
      </Button>
      <Link href="/sign-in">
        <Button variant={"ghost"} icon="userFlat">
          Sign in
        </Button>
      </Link>
    </Row>
  )
}
