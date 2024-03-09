import { Icon, IconName } from '@/ui/components/icon';
import { stringUtils } from '@shared/utils';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { Row } from '../flex';

type HeaderProps = PropsWithChildren & {
  icon?: IconName | React.ReactNode;
  onIconClickHref?: string;
  hamburgerMenu?: boolean;
};

function Header(props: HeaderProps) {
  const { icon = 'mothershipWordmark', onIconClickHref = '/', children, hamburgerMenu } = props;
  return (
    <Row className="h-16 w-full items-center pl-8 pr-4">
      {stringUtils.isString(icon) ? (
        <Link href={onIconClickHref}>
          <Icon name={icon as IconName} className="h-4" />
        </Link>
      ) : (
        icon
      )}
      {hamburgerMenu && <Icon name="hamburgerMenu" className="ml-4 h-3" />}
      {children}
    </Row>
  );
}

export { Header };
export type { HeaderProps };
