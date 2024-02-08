import { Column, Row } from "@/ui/layout/flex"
import { Button } from "@/ui/components/button"
import React from "react"
import { DesignComponentHeader } from "../component-header"

const sizes: Array<"xs" | "sm" | "md" | "lg"> = ["lg", "md", "sm", "xs"]
const variants: Array<
  "primary" | "secondary" | "tertiary" | "ghost" | "destructive"
> = ["primary", "secondary", "tertiary", "ghost", "destructive"]

function sizeToName(size: "xs" | "sm" | "md" | "lg") {
  switch (size) {
    case "lg":
      return "Large"
    case "md":
      return "Medium"
    case "sm":
      return "Small"
    case "xs":
      return "XSmall"
  }
}

export default function Page() {
  return (
    <>
      <DesignComponentHeader
        title="Button"
        description={
          "Buttons to serve various actions throughout the application."
        }
      />
      <Row gap={4} className={"p-4"}>
        {sizes.map((size) => {
          return (
            <Column gap={4} key={size}>
              {variants.map((variant) => (
                <React.Fragment key={"variant"}>
                  <Button
                    variant={variant}
                    size={size}
                    className="mt-2 first:mt-0"
                  >
                    {sizeToName(size)}
                  </Button>
                  <Button
                    variant={variant}
                    size={size}
                    className="mt-2"
                    disabled
                  >
                    {sizeToName(size)}
                  </Button>
                </React.Fragment>
              ))}
            </Column>
          )
        })}
      </Row>
    </>
  )
}