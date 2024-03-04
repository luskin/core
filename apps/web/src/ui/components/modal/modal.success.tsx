import { ModalDefault, ModalDefaultProps } from './modal.default';

type ModalSuccessProps = ModalDefaultProps & {};

const ModalSuccess = (props: ModalSuccessProps) => {
  return <ModalDefault iconName="checkmark" iconClassName="bg-success-4 text-success-10" {...props} />;
};

export { ModalSuccess };
export type { ModalSuccessProps };
