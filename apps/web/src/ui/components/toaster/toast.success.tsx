import { ToastBase, ToastBaseProps } from './toast.base';

export function ToastSuccess(props: ToastBaseProps) {
  return <ToastBase iconName="checkmark" iconClassName="bg-success-4 text-success-10" {...props} />;
}
