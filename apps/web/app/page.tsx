import Link from "next/link"

export default function Page(): JSX.Element {
  return (
    <main>
      <h1>Web App</h1>
      <Link href="/api">API</Link>
      <Link href="/admin">Admin</Link>
    </main>
  )
}
