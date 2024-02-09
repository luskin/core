import { Heading, Paragraph } from "@/ui/components/typography"
import { Column } from "@/ui/layout/flex"
import { stringUtils } from "@core/utils"

export interface DesignComponentHeaderProps {
  title?: string
  description?: string | React.ReactNode
}

export function DesignComponentHeader({
  title,
  description,
}: DesignComponentHeaderProps) {
  return (
    <Column gap={2} className={"w-1/2"}>
      {title && <Heading size="h1">{title}</Heading>}
      {stringUtils.isString(description) ? (
        <Paragraph>{description}</Paragraph>
      ) : (
        description
      )}
    </Column>
  )
}
