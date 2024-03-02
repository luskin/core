import { Column } from "@/ui/layout/flex"
import { DesignComponentHeader } from "../component-header"
import { Tooltip } from "@/ui/components/tooltip"
import { Button } from "@/ui/components/button"
import { ComponentPropsGrid } from "../component-props-grid"

export default function Page() {
  return (
    <>
      <DesignComponentHeader
        title="Tooltip"
        description={
          "Serve contextual information to the user when hovering over an element."
        }
      />
      <Column gap={4} className={"mt-4"}>
        <Tooltip content="This is a primary tooltip">
          <Button variant={"ghost"}>Hover over me (Primary)</Button>
        </Tooltip>

        <Tooltip content="This is a secondary tooltip" variant={"secondary"}>
          <Button variant={"secondary"}>Hover over me (Secondary)</Button>
        </Tooltip>

        <Tooltip
          content="This is a destructive tooltip"
          variant={"destructive"}
        >
          <Button variant={"destructive"}>Hover over me (Destructive)</Button>
        </Tooltip>
        <ComponentPropsGrid
          params={[
            {
              name: "content",
              type: ["string", "ReactNode"],
              optional: true,
              description: "The current selection of the radio group.",
            },
            {
              name: "variant",
              type: "string",
              optional: true,
              description: "The style variant of the tooltip.",
            },
          ]}
        />
      </Column>
    </>
  )
}
