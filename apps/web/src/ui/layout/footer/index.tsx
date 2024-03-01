import { Paragraph } from "@/ui/components/typography"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <Paragraph size={"sm"} variant={"secondary"}>
        © 2024 Mothership Technologies Inc. All rights reserved.
      </Paragraph>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          <Paragraph size={"sm"} variant={"secondary"}>
            Terms of Service
          </Paragraph>
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          <Paragraph size={"sm"} variant={"secondary"}>
            Privacy
          </Paragraph>
        </Link>
      </nav>
    </footer>
  )
}
