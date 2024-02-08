import { Column } from "@/components/layout/flex"
import { Heading, Label, Paragraph } from "@/components/primitives/typography"

export default function Typography() {
  return (
    <Column>
      <Column space={2} className="mt-8">
        <Heading size={"h1"}>Typography</Heading>
        <Heading size={"h2"} variant={"secondary"}>
          Text reference material
        </Heading>
      </Column>

      <Column space={2} className="mt-8">
        <Heading size={"h1"}>Heading/Large (h1)</Heading>
        <Heading size={"h1"} variant={"secondary"}>
          Heading/Large (h1 secondary)
        </Heading>
        <Heading size={"h2"}>Heading/Medium (h2)</Heading>
        <Heading size={"h2"} variant={"secondary"}>
          Heading/Medium (h2 secondary)
        </Heading>
        <Heading size={"h3"}>Heading/Small (h3)</Heading>
        <Heading size={"h3"} variant={"secondary"}>
          Heading/Small (h3 secondary)
        </Heading>
        <Heading size={"h4"}>Heading/XSmall (h4)</Heading>
        <Heading size={"h4"} variant={"secondary"}>
          Heading/XSmall (h4 secondary)
        </Heading>
      </Column>

      <Column space={2} className="mt-8">
        <Label size={"lg"}>Label/Large</Label>
        <Label size={"lg"} variant={"secondary"}>
          Label/Large
        </Label>
        <Label size={"md"}>Label/Medium</Label>
        <Label size={"md"} variant={"secondary"}>
          Label/Medium
        </Label>
        <Label size={"sm"}>Label/Small</Label>
        <Label size={"sm"} variant={"secondary"}>
          Label/Small
        </Label>
      </Column>

      <Column space={2} className="mt-8">
        <Paragraph size={"lg"}>Paragraph/Large</Paragraph>
        <Paragraph size={"lg"} variant={"secondary"}>
          Paragraph/Large
        </Paragraph>
        <Paragraph size={"md"}>Paragraph/Medium</Paragraph>
        <Paragraph size={"md"} variant={"secondary"}>
          Paragraph/Medium
        </Paragraph>
        <Paragraph size={"sm"}>Paragraph/Small</Paragraph>
        <Paragraph size={"sm"} variant={"secondary"}>
          Paragraph/Small
        </Paragraph>
      </Column>
    </Column>
  )
}
