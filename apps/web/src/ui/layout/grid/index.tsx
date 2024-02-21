import { arrayUtils } from "@core/utils"
import clsx from "clsx"
import { PropsWithChildren } from "react"

export interface GridProps extends PropsWithChildren {
  numCols?: number
  className?: string | Array<string>
}

export function Grid({ children, numCols, className }: GridProps) {
  const classNameMerged = clsx(
    "grid",
    numCols && `grid-cols-${numCols}`,
    ...arrayUtils.ensure(className)
  )

  return <div className={classNameMerged}>{children}</div>
}
