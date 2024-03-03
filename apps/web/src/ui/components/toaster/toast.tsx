import { toast as sonnerToast } from 'sonner';
import { ToastSuccess } from './toast.success';
import { ToastBaseProps } from './toast.base';
import { ToastError } from './toast.error';

type ToastOptions = ToastBaseProps & {
  duration?: number;
};

const toast = {
  success: (options: ToastOptions) =>
    sonnerToast.custom(
      (id) => (
        <ToastSuccess
          description={options.description}
          title={options.title}
          onClose={() => sonnerToast.dismiss(id)}
          actionButtons={options.actionButtons}
        />
      ),
      {
        duration: options.duration,
      }
    ),
  error: (options: ToastOptions) =>
    sonnerToast.custom(
      (id) => (
        <ToastError
          description={options.description}
          title={options.title}
          onClose={() => sonnerToast.dismiss(id)}
          actionButtons={options.actionButtons}
        />
      ),
      {
        duration: options.duration,
      }
    ),
};

export { toast };
export type { ToastOptions };
