import { Button, Column, Row } from "@/components"

const sizes: Array<"xs" | "sm" | "md" | "lg"> = ["lg", "md", "sm", "xs"]
const variants: Array<
  "primary" | "secondary" | "tertiary" | "ghost" | "destructive"
> = ["primary", "secondary", "tertiary", "ghost", "destructive"]

export default function Page() {
  return (
    <Row space={2}>
      {sizes.map((size) => {
        return (
          <Column space={2} align="start">
            {variants.map((variant) => (
              <>
                <Button
                  variant={variant}
                  size={size}
                  className="mt-2 first:mt-0"
                >
                  Large
                </Button>
                <Button variant={variant} size={size} className="mt-2" disabled>
                  Large
                </Button>
              </>
            ))}
          </Column>
        )
      })}
    </Row>
  )
}
