import stylex from "@stylexjs/stylex"

const style = stylex.create({
  main: {
    color: "red",
  },
})

export default function Home() {
  return (
    <main {...stylex.props(style.main)}>
      <div>this is a new page</div>
    </main>
  )
}
