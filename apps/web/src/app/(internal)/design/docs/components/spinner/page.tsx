import { DesignComponentHeader } from "../component-header"
import { Column } from "@/ui/layout/flex"
import { ComponentPropsGrid } from "../component-props-grid"
import { Spinner } from "@/ui/components/spinner"
import { Label } from "@/ui/components/typography"

export default function SpinnerPage() {
  return (
    <>
      <DesignComponentHeader
        title="Spinner"
        description="The spinner component is used to indicate that a page or component is loading. It is often used in forms to indicate that a request is being processed."
      />

      <Column gap={4} className="mt-8">
        <Label>Large spinner</Label>
        <Spinner size="lg" />

        <Label>Medium spinner</Label>
        <Spinner size="md" />

        <Label>Small spinner</Label>
        <Spinner size="sm" />

        <Label className="mt-4">Custom icon spinner</Label>
        <Spinner iconName="history" size="sm" />
        <ComponentPropsGrid
          params={[
            {
              name: "size",
              type: "string",
              description: "The size of the spinner, defaults to 'md'",
            },
            {
              name: "iconName",
              type: "string",
              description: "The name of the icon to spin, defaults to spinner",
            },
          ]}
        />
      </Column>
    </>
  )
}
