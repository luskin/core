import stylex from "@stylexjs/stylex"
import { Button } from "@repo/ui"
import Link from "next/link"

const style = stylex.create({
  main: {
    color: "red",
  },
})

export default function Page() {
  return (
    <main {...stylex.props(style.main)}>
      <div>
        <Link href="/dashboard">
          <Button>Back</Button>
        </Link>
      </div>
      <div>this is a new button page</div>
    </main>
  )
}
