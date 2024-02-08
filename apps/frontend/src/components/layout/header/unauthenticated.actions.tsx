import { Row } from "../flex"
import { Button } from "@/components/primitives/button"

interface UnauthenticatedHeaderActionsProps {}

export function UnauthenticatedHeaderActions(
  props: UnauthenticatedHeaderActionsProps
) {
  return (
    <Row gap={2}>
      <Button variant={"tertiary"} icon="truckSideRight">
        Drive with us
      </Button>
      <Button variant={"ghost"} icon="userFlat">
        Sign in
      </Button>
    </Row>
  )
}
