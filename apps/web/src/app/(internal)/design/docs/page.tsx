import { Heading, Label, Paragraph } from "@/ui/components/typography"

export default function DesignDocsPage() {
  return (
    <div className="w-full">
      <Heading size="xl">Design Docs</Heading>
      <Paragraph>
        These docs will guide you in all of your design implementation
        endevours. Our entire design system and component library is available
        here for you to reference with code snippets. TODO Write more.
      </Paragraph>

      <Label>Table of Contents</Label>
      <ul>
        <li>Introduction</li>
        <li>Getting Started</li>
        <li>Terminology</li>
        <li>Color Palette</li>
        <li>Typography</li>
        <li>Layout</li>
        <li>Components</li>
        <li>Utilities</li>
      </ul>

      <Label size={"sm"}>Terminology</Label>
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
