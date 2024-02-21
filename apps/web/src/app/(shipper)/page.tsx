import { Footer } from "@/ui/layout/footer"
import { Heading, Paragraph, Label } from "@/ui/components/typography"

export default function QuotePage() {
  return (
    <main className="flex-1 px-[88px] pt-6">
      <div>
        <Heading size="h1">Quote and compare rates instantly</Heading>
        <Paragraph size={"lg"} variant={"secondary"} className="mt-4">
          Compare rates from top carriers all in one place
        </Paragraph>
      </div>
      <Footer />
    </main>
  )
}
