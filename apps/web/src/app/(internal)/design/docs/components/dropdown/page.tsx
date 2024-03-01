"use client"
import { DesignComponentHeader } from "../component-header"
import { Column } from "@/ui/layout/flex"
import { Radio } from "@/ui/components/radio"
import { useState } from "react"
import { ComponentPropsGrid } from "../component-props-grid"
import { Heading, Paragraph } from "@/ui/components/typography"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/components/dropdown"
import { Button } from "@/ui/components/button"

export default function RadioPage() {
  const [value, setValue] = useState("option1")
  return (
    <>
      <DesignComponentHeader
        title="Dropdown"
        description="The dropdown component is used to allow users to select an option from a list."
      />
      <Column gap={4} className="mt-8">
        <Column gap={2}>
          <Heading>Standard Dropdown</Heading>
          <Paragraph>Click the button to open the dropdown menu.</Paragraph>
        </Column>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} size={"md"} icon="userFlat" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Dropdown title</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem icon="truckSideRight">Label</DropdownMenuItem>
            <DropdownMenuItem icon="truckSideRight">Label</DropdownMenuItem>
            <DropdownMenuItem icon="truckSideRight">Label</DropdownMenuItem>
            <DropdownMenuItem icon="truckSideRight" description="Description">
              Label
            </DropdownMenuItem>
            <DropdownMenuItem icon="logout" dangerous className="mt-2">
              Dangerous
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ComponentPropsGrid
          params={[
            {
              name: "value",
              type: "boolean",
              optional: true,
              description: "The current selection of the radio group.",
            },
            {
              name: "onValueChange",
              type: "function",
              description: "Callback when the state of the selection changes",
            },
          ]}
        />
      </Column>
    </>
  )
}
