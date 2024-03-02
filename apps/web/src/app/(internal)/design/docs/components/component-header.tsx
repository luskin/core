import { Heading, Paragraph } from "@/ui/components/typography"
import { Column } from "@/ui/layout/flex"
import { stringUtils } from "@shared/utils"

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
      {title && <Heading size="xl">{title}</Heading>}
      {stringUtils.isString(description) ? (
        <Paragraph>{description}</Paragraph>
      ) : (
        description
      )}
    </Column>
  )
}
