"use client"
import { DesignComponentHeader } from "../component-header"
import { Column } from "@/ui/layout/flex"
import { useState } from "react"
import { Toggle } from "@/ui/components/toggle"
import { ComponentPropsGrid } from "../component-props-grid"
import { Heading, Label, Paragraph } from "@/ui/components/typography"

export default function TogglePage() {
  const [defaultValue, setDefaultValue] = useState<boolean>(false)
  const [customValue, setCustomValue] = useState<boolean>(false)
  return (
    <>
      <DesignComponentHeader
        title="Toggle"
        description="The toggle component is used to allow users to toggle between two states. It is often used in forms to allow users to make a single selection from a list of options."
      />

      <Column gap={4} className="mt-8">
        <Heading size="md">Default</Heading>
        <Paragraph>
          The current value of the toggle is: {defaultValue ? "true" : "false"}
        </Paragraph>
        <Toggle onToggledChange={setDefaultValue} toggled={defaultValue} />
        <Heading size="md">Custom lables</Heading>
        <Paragraph>
          This example sets the{" "}
          <code className="text-success-11">offLabel</code> to "AM" and the{" "}
          <code className="text-success-11">onLabel</code> to "PM"
        </Paragraph>
        <Toggle
          onToggledChange={setCustomValue}
          toggled={customValue}
          offLabel="AM"
          onLabel="PM"
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
            {
              name: "offLabel",
              type: "string",
              optional: true,
              description: "The label for the off state, defaults to 'No'",
            },
            {
              name: "onLabel",
              type: "string",
              optional: true,
              description: "The label for the off state, defaults to 'Yes'",
            },
          ]}
        />
      </Column>
    </>
  )
}
