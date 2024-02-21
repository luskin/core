import { services } from "@/lib/services"

export default async function Reporting() {
  const result = await services.purchase.create()
  return <div>Reporting: {result}</div>
}
