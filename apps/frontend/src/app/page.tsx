import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Paragraph } from "@/components/primitives/typography"
import { Label } from "@/components/primitives/typography/label"

export default function Home() {
  return (
    <main className="flex-1">
      <div>
        <Label>My Label</Label>
        <Paragraph>My Main Text</Paragraph>
      </div>
      <Footer />
    </main>
  )
}
