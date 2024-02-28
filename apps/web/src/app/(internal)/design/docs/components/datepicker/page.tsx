"use client"
import { Column } from "@/ui/layout/flex"
import { DesignComponentHeader } from "../component-header"
import { Tooltip } from "@/ui/components/tooltip"
import { DatePicker } from "@/ui/components/datepicker"
import { ComponentPropsGrid } from "../component-props-grid"
import { useState } from "react"
import { DateTime } from "@shared/libs"

export default function Page() {
  const [date, setDate] = useState<DateTime | undefined>(new DateTime())
  return (
    <>
      <DesignComponentHeader
        title="Calendar"
        description={"Serve a calendar to select a date or a range of dates."}
      />
      <Column gap={4} className={"mt-4"}>
        <DatePicker mode="single" selected={date} onSelect={setDate} />
        <ComponentPropsGrid
          params={[
            {
              name: "mode",
              type: ["string"],
              optional: false,
              description:
                "The mode of the date picker. Options are 'single' or 'range'.",
            },
          ]}
        />
      </Column>
    </>
  )
}
