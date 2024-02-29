import { WebUserMode } from "@shared/types"
import { Row } from "../../../flex"
import { WebUserModeAdminAction } from "./web-user-mode-tabs"
import { getUserMode } from "./web-user-mode-tabs.actions"

export async function Admin() {
  const userMode = await getUserMode()
  console.log("The user mode is: ", userMode)
  return (
    <Row>
      <WebUserModeAdminAction userMode={userMode} />
    </Row>
  )
}
