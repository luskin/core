import { NotificationBase, NotificationBaseProps } from './notification.base';

export function NotificationSuccess(props: NotificationBaseProps) {
  return <NotificationBase iconName="checkmark" iconClassName="bg-success-4 text-success-10" {...props} />;
}
