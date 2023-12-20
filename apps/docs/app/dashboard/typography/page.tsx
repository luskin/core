import stylex from "@stylexjs/stylex"
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
          <div>Back</div>
        </Link>
      </div>
      <div>this is a new typography page</div>
    </main>
  )
}
