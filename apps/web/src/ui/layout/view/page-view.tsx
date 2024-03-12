import { cn } from '@/lib/tailwind/utils';
import { PropsWithChildren } from 'react';

interface PageViewProps extends PropsWithChildren {
  className?: string;
  ignoreDefaultContentSizing?: boolean;
}

export default function PageView(props: PageViewProps) {
  const { className = '', ignoreDefaultContentSizing } = props;

  return (
    <main className={cn('min-h-full w-full p-4', className)}>
      <div className={ignoreDefaultContentSizing ? 'w-full' : 'mx-auto max-w-[1144px]'}>{props.children}</div>
    </main>
  );
}
