import { toast as sonnerNotification } from 'sonner';
import { NotificationSuccess } from './notification.success';
import { NotificationBaseProps } from './notification.base';
import { NotificationError } from './notification.error';

type NotificationOptions = NotificationBaseProps & {
  duration?: number;
};

const notification = {
  success: (options: NotificationOptions) =>
    sonnerNotification.custom(
      (id) => (
        <NotificationSuccess
          description={options.description}
          title={options.title}
          onClose={() => sonnerNotification.dismiss(id)}
          actionButtons={options.actionButtons}
        />
      ),
      {
        duration: options.duration,
      }
    ),
  error: (options: NotificationOptions) =>
    sonnerNotification.custom(
      (id) => (
        <NotificationError
          description={options.description}
          title={options.title}
          onClose={() => sonnerNotification.dismiss(id)}
          actionButtons={options.actionButtons}
        />
      ),
      {
        duration: options.duration,
      }
    ),
};

export { notification };
export type { NotificationOptions };
