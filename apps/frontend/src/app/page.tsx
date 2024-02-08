import { Footer } from "@/components/layout/footer"
import { Heading, Paragraph, Label } from "@/components/primitives/typography"

export default function Home() {
  return (
    <main className="flex-1">
      <div>
        <Heading size="h1">This is heading</Heading>
      </div>
      <Footer />
    </main>
  )
}
