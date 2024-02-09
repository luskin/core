import { Column, Row } from "@/ui/layout/flex"
import { Button } from "@/ui/components/button"
import React from "react"
import { DesignComponentHeader } from "../component-header"
import { Tooltip } from "@/ui/components/tooltip"

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
          "Buttons are used to perform an action or navigate to a new location. They are typically placed throughout your UI, in places like: dialogs, forms, cards, and toolbars."
        }
      />
      <Row gap={4} className={"mt-4"}>
        {sizes.map((size) => {
          return (
            <Column gap={4} key={size}>
              {variants.map((variant) => (
                <React.Fragment key={"variant"}>
                  <Tooltip
                    content={
                      <Column>
                        <code>variant: '{variant}'</code>
                        <code>size: '{size}'</code>
                      </Column>
                    }
                  >
                    <Button
                      variant={variant}
                      size={size}
                      className="mt-2 first:mt-0"
                    >
                      {sizeToName(size)}
                    </Button>
                  </Tooltip>
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
