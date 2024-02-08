import { Alert } from "@/ui/components/alert"
import { Heading, Label, Paragraph } from "@/ui/components/typography"
import { Column } from "@/ui/layout/flex"
import { DesignComponentHeader } from "../component-header"

export default function AlertPage() {
  return (
    <Column gap={4}>
      <DesignComponentHeader
        title="Alert"
        description={
          <Paragraph>
            There are four variants of alerts: <code>warning</code>,{" "}
            <code>error</code>, <code>info</code>, and <code>success</code>.
          </Paragraph>
        }
      />

      <Label size="lg" className="mt-4">
        Error
      </Label>
      <Alert
        title="You're account is past-due"
        message="In order to continue shipping, please pay your outstanding past-due balance. Please go to your billing page to process a payment."
        variant={"error"}
      />

      <Label size="lg">Warning</Label>
      <Alert
        title="Your shipment is delayed"
        message="Due to weather conditions, your shipment will be delayed. We apologize for the inconvenience."
        variant={"warning"}
      />

      <Label size="lg">Info</Label>
      <Alert
        title="Appointment confirmed"
        message="Your delivery appointment has been confirmed with the carrier. You will receive a notification when your shipment is out for delivery."
        variant={"info"}
      />

      <Label size="lg">Success</Label>
      <Alert
        title="Shipment delivered"
        message="Your shipment has been successfully delivered. Thank you for trusting Mothership."
        variant={"success"}
      />
    </Column>
  )
}