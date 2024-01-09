import React, { ComponentType, ElementType } from "react"

// The HOC should accept any component that can take a className prop
export interface WithClassNameProps {
  className?: string
}

// Define the type of the properties the returned component will accept
// It should accept any of the original props plus the possibility of additional className
export type InjectedClassNameProps<P extends WithClassNameProps> = P &
  WithClassNameProps

// The HOC function: it takes a component and returns a new component that merges class names
export function withClassNames<P extends WithClassNameProps>(
  WrappedIcon: ComponentType<P>
): ComponentType<InjectedClassNameProps<P>> {
  // The returned component is a functional component that takes props P
  return (props: InjectedClassNameProps<P>) => {
    // Merge the className from HOC props with the WrappedIcon's own className
    const { className, ...otherProps } = props
    const combinedClassName = [props.className, className]
      .filter(Boolean)
      .join(" ")

    // We spread `otherProps` and then override the `className` with `combinedClassName`
    return <WrappedIcon {...(otherProps as P)} className={combinedClassName} />
  }
}
