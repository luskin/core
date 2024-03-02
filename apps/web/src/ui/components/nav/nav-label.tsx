import { Label } from '../typography';
import React from 'react';

export interface NavLabelProps extends React.AnchorHTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const NavLabel = React.forwardRef<HTMLDivElement, NavLabelProps>(({ href = false, ...props }, ref) => {
  return (
    <div className="h-8">
      <Label size={'md'} variant={'secondary'}>
        {props.children}
      </Label>
    </div>
  );
});
NavLabel.displayName = 'NavLabel';

export { NavLabel };
