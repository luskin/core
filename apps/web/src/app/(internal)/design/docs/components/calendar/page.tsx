"use client"
import { Column } from "@/ui/layout/flex"
import { DesignComponentHeader } from "../component-header"
import { Calendar } from "@/ui/components/calendar"
import { ComponentPropsGrid } from "../component-props-grid"
import { useState } from "react"
import { DateTime } from "@shared/libs"
import { Heading } from "@/ui/components/typography"

export default function Page() {
  const [firstDate, setFirstDate] = useState<DateTime | undefined>(undefined)
  const [secondDate, setSecondDate] = useState<DateTime | undefined>(undefined)
  return (
    <>
      <DesignComponentHeader
        title="Calendar"
        description={"Serve a calendar to select a date or a range of dates."}
      />
      <Column gap={4} className={"mt-4"}>
        <Heading size={"h3"}>Single Month</Heading>
        <Calendar
          mode="single"
          selected={firstDate}
          onSelect={setFirstDate}
          numberOfMonths={1}
        />
        <Heading size={"h3"}>Multiple Months</Heading>
        <Calendar
          mode="single"
          selected={secondDate}
          onSelect={setSecondDate}
          numberOfMonths={2}
          showOutsideDays={false}
        />
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
