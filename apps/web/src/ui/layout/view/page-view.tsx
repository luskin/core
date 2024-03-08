import { cn } from '@/lib/tailwind/utils';
import { PropsWithChildren } from 'react';

interface PageViewProps extends PropsWithChildren {
  className?: string;
}

export default function PageView(props: PageViewProps) {
  const { className = '' } = props;

  return <main className={cn('min-h-full w-full p-4', className)}>{props.children}</main>;
}
