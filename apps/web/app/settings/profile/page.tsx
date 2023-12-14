import { Config } from "../../../config/config"

async function getData() {
  const res = await fetch(`${Config.baseApiUrl}/random-string`, {
    cache: "no-cache",
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

  return <div>I generated {data}</div>
}
