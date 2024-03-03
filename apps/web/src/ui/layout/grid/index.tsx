import { arrayUtils } from '@shared/utils';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export interface GridProps extends PropsWithChildren {
  numCols?: number;
  className?: string | Array<string>;
  gap?: number;
}

export function Grid({ children, numCols, gap, className }: GridProps) {
  const classNameMerged = clsx(
    'grid',
    numCols && `grid-cols-${numCols}`,
    gap && `gap-${gap}`,
    ...arrayUtils.ensure(className)
  );

  return <div className={classNameMerged}>{children}</div>;
}
