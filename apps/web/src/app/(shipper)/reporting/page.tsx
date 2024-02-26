import { numUtils } from "@shared/utils"

export default async function Reporting() {
  const result: string = await new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          "MS" +
            numUtils.random({
              min: 100000,
              max: 999999,
            })
        ),
      1500
    )
  )
  return <div>Reporting: {result}</div>
}
