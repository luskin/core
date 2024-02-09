"use client"
import { DesignComponentHeader } from "../component-header"
import { Column } from "@/ui/layout/flex"
import { Radio } from "@/ui/components/radio"
import { useState } from "react"

export default function RadioPage() {
  const [value, setValue] = useState("option1")
  return (
    <>
      <DesignComponentHeader
        title="Radio"
        description="The radio component is used to allow users to select a single option from a list of options. It is often used in forms to allow users to make a single selection from a list of options. The radio component is a great way to present a list of options to users in a way that is easy to understand and use."
      />

      <Column gap={4} className="mt-8">
        <Radio
          onValueChange={setValue}
          value={value}
          options={[
            {
              value: "option1",
              label: "Option 1",
            },
            {
              value: "option2",
              label: "Option 2",
            },
            {
              value: "option3",
              label: "Option 3",
            },
          ]}
        />
      </Column>
    </>
  )
}
