import { ToastBase, ToastBaseProps } from './toast.base';

export function ToastError(props: ToastBaseProps) {
  return (
    <ToastBase
      iconName="exclamationPoint"
      iconClassName="bg-error-10 text-white"
      descriptionClassName={'text-error-11'}
      {...props}
    />
  );
}
