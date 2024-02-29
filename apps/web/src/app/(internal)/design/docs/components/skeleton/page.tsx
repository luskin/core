import { DesignComponentHeader } from "../component-header"
import { Column } from "@/ui/layout/flex"
import { ComponentPropsGrid } from "../component-props-grid"
import { Skeleton } from "@/ui/components/skeleton"
import { Paragraph } from "@/ui/components/typography"

export default function SkeletonPage() {
  return (
    <>
      <DesignComponentHeader
        title="Skeleton"
        description="The skeleton component is used to show a placeholder while content is loading. It is often used to give the user an idea of what the content will look like when it is loaded. The skeleton component is a great way to improve the user experience by providing visual feedback that something is happening in the background."
      />

      <Column gap={2} className="mt-8">
        <code>w-12 h-3 rounded-full</code>
        <Skeleton className="w-12 h-3 rounded-full" />
        <code>w-28 h-3 rounded-full</code>
        <Skeleton className="w-28 h-3 rounded-full" />
        <code>w-12 h-12 rounded-lg</code>
        <Skeleton className="w-12 h-12 rounded-lg" />
        <code>...etc</code>
      </Column>

      <Column gap={4} className="mt-8">
        <ComponentPropsGrid params={[]} />
      </Column>
    </>
  )
}
