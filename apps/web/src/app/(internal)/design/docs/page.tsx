import { Heading, Label, Paragraph } from "@/ui/components/typography"

export default function DesignDocsPage() {
  return (
    <div className="w-full">
      <Heading size="xl">Design Docs</Heading>
      <Paragraph className="mt-4">
        These docs will guide you in all of your design implementation
        endevours. Our entire design system and component library is available
        here for you to reference with code snippets. TODO Write more.
      </Paragraph>

      <Label size={"lg"}>Terminology</Label>
      <Paragraph>
        AppBar = Application control bar, usually on sticks to top of the screen
        on desktop.
      </Paragraph>
      <Paragraph>
        MenuBar = The menu bar is the bar of features/pages to navigate to,
        usually on the left side of the screen on desktop
      </Paragraph>
    </div>
  )
}
