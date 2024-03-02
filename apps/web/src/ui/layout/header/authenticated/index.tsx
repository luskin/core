import { Row } from "../../flex"
import User from "./user"

interface AuthenticatedHeaderActionsProps {}

export function AuthenticatedHeaderActions() {
  return (
    <Row gap={2}>
      <User />
    </Row>
  )
}
