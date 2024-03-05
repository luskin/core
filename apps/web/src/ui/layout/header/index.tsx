import { Icon, IconName } from '@/ui/components/icon';
import { stringUtils } from '@shared/utils';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

type HeaderProps = PropsWithChildren & {
  icon?: IconName | React.ReactNode;
  onIconClickHref?: string;
  hamburgerMenu?: boolean;
};

function Header(props: HeaderProps) {
  const { icon = 'mothershipWordmark', onIconClickHref = '/', children, hamburgerMenu } = props;
  return (
    <div className="flex h-16 items-center px-4">
      <div className="flex h-8 items-center justify-start">
        {stringUtils.isString(icon) ? (
          <Link href={onIconClickHref}>
            <Icon name={icon as IconName} className="h-4" />
          </Link>
        ) : (
          icon
        )}
        {hamburgerMenu && <Icon name="hamburgerMenu" className="ml-4 h-3" />}
      </div>
      {children}
    </div>
  );
}

export { Header };
export type { HeaderProps };
