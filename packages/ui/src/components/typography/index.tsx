import React, { ReactNode } from "react"
import { Size, SizeProps } from "../../globals/styles/types/size"

// General typography component
const TypographyComponent: React.FC<
  SizeProps & {
    as: keyof JSX.IntrinsicElements
    children?: ReactNode
    className?: string
  }
> = ({ size = "medium", as: Component, children, ...props }) => {
  return (
    <Component className={props.className} {...props}>
      {children}
    </Component>
  )
}

// Specific typography components
const Heading: React.FC<
  SizeProps & React.HTMLAttributes<HTMLHeadingElement>
> = (props) => {
  let className = "font-extrabold font-[2.5rem]"
  return (
    <TypographyComponent
      as="h1"
      className="font-extrabold leading"
      {...props}
    />
  )
}

const Label: React.FC<SizeProps & React.HTMLAttributes<HTMLLabelElement>> = (
  props
) => <TypographyComponent as="label" {...props} />

const Paragraph: React.FC<
  SizeProps & React.HTMLAttributes<HTMLParagraphElement>
> = (props) => <TypographyComponent as="p" {...props} />

// Exporting as a compound component
export const Typography = {
  Heading,
  Label,
  Paragraph,
}
