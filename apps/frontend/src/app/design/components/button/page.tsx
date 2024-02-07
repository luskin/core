import { Column, Row } from "@/components/layout/flex"
import { Button } from "@/components/primitives/button"
import React from "react"

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
    <Row space={4} classNames={"p-4"}>
      {sizes.map((size) => {
        return (
          <Column space={4} key={size}>
            {variants.map((variant) => (
              <React.Fragment key={"variant"}>
                <Button
                  variant={variant}
                  size={size}
                  className="mt-2 first:mt-0"
                >
                  {sizeToName(size)}
                </Button>
                <Button variant={variant} size={size} className="mt-2" disabled>
                  {sizeToName(size)}
                </Button>
              </React.Fragment>
            ))}
          </Column>
        )
      })}
    </Row>
  )
}
