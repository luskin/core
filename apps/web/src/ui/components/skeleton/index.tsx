import { cn } from "@/lib/tailwind/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-slate-3 via-slate-6 to-slate-3",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
