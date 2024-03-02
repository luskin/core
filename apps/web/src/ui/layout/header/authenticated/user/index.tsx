import { Button } from "@/ui/components/button"
import { Row } from "@/ui/layout/flex"
import UserDropdown from "./dropdown"

export default function User() {
  return (
    <Row gap={2}>
      <Button variant={"secondary"} size={"md"} icon="plus" />
      <UserDropdown />
      <Button variant={"ghost"} size={"md"} icon="bell" />
    </Row>
  )
}
