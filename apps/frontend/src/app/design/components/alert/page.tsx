import { Alert } from "@/ui/components/alert"
import { Heading } from "@/ui/components/typography"
import { Column } from "@/ui/layout/flex"

export default function AlertPage() {
  return (
    <Column gap={2}>
      <Heading size="h1">Alert</Heading>
      <Alert
        title="You're account is past-due"
        message="In order to continue shipping, please pay your outstanding past-due balance. Please go to your billing page to process a payment."
        variant={"error"}
      />
      <Alert
        title="Your shipment is delayed"
        message="Due to weather conditions, your shipment will be delayed. We apologize for the inconvenience."
        variant={"warning"}
      />
      <Alert
        title="Appointment confirmed"
        message="Your delivery appointment has been confirmed with the carrier. You will receive a notification when your shipment is out for delivery."
        variant={"info"}
      />
      <Alert
        title="Shipment delivered"
        message="Your shipment has been successfully delivered. Thank you for trusting Mothership."
        variant={"success"}
      />
    </Column>
  )
}
