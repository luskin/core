import { Row } from "../../flex"
import { Admin } from "./admin"
import User from "./user"

interface AuthenticatedHeaderActionsProps {
  isAdmin?: boolean
}

export function AuthenticatedHeaderActions(
  props: AuthenticatedHeaderActionsProps
) {
  const { isAdmin } = props

  return (
    <Row gap={2}>
      {isAdmin && <Admin />}
      <User />
    </Row>
  )
}
