import { Config } from "../../../../config/config"

export const dynamic = "force-dynamic"

async function getData() {
  const res = await fetch(`${Config.baseApiUrl}/random-string`, {
    cache: "no-store",
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return ((await res.json()) as { random: string }).random
}

export default async function Page() {
  const data = await getData()
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return <div>I generated {data}</div>
}
