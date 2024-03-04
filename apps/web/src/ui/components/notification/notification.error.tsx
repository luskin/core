import { NotificationBase, NotificationBaseProps } from './notification.base';

export function NotificationError(props: NotificationBaseProps) {
  return (
    <NotificationBase
      iconName="exclamationPoint"
      iconClassName="bg-error-10 text-white"
      descriptionClassName={'text-error-11'}
      {...props}
    />
  );
}
