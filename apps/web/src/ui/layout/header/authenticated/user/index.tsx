import { Button } from "@/ui/components/button"
import { Row } from "@/ui/layout/flex"

export default function User() {
  return (
    <Row gap={2}>
      <Button variant={"secondary"} size={"md"} icon="plus" />
      <Button variant={"ghost"} size={"md"} icon="userFlat" />
      <Button variant={"ghost"} size={"md"} icon="bell" />
    </Row>
  )
}
