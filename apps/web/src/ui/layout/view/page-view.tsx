import { cn } from '@/lib/tailwind/utils';
import { PropsWithChildren, Ref } from 'react';

interface PageViewProps extends PropsWithChildren {
  ref?: Ref<HTMLDivElement>;
  className?: string;
  ignoreDefaultContentSizing?: boolean;
}

export default function PageView(props: PageViewProps) {
  const { className = '', ref, ignoreDefaultContentSizing } = props;

  return (
    <main className={cn('min-h-full w-full p-4', className)} ref={ref}>
      <div className={ignoreDefaultContentSizing ? 'w-full' : 'mx-auto max-w-[1144px]'}>{props.children}</div>
    </main>
  );
}
