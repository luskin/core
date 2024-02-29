"use client"
import { DesignComponentHeader } from "../component-header"
import { Column } from "@/ui/layout/flex"
import { useState } from "react"
import { Toggle } from "@/ui/components/toggle"
import { ComponentPropsGrid } from "../component-props-grid"
import { Label } from "@/ui/components/typography"

export default function TogglePage() {
  const [value, setValue] = useState<boolean>(false)
  return (
    <>
      <DesignComponentHeader
        title="Toggle"
        description="The toggle component is used to allow users to toggle between two states. It is often used in forms to allow users to make a single selection from a list of options."
      />

      <Column gap={4} className="mt-8">
        <Label>
          The current value of the toggle is: {value ? "Yes" : "No"}
        </Label>
        <Toggle
          onToggledChange={setValue}
          toggled={value}
          offLabel={"No"}
          onLabel={"Yes"}
        />
        <ComponentPropsGrid
          params={[
            {
              name: "toggled",
              type: "boolean",
              description: "The current on/off state of the toggle.",
            },
            {
              name: "onToggledChange",
              type: "function",
              description: "Callback when the state of the toggle changes",
            },
          ]}
        />
      </Column>
    </>
  )
}
