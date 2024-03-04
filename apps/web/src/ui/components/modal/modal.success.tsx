import { ModalBase, ModalBaseProps } from './modal.base';

type ModalSuccessProps = ModalBaseProps & {};

const ModalSuccess = (props: ModalSuccessProps) => {
  return <ModalBase iconName="checkmark" iconClassName="bg-success-4 text-success-10" {...props} />;
};

export { ModalSuccess };
export type { ModalSuccessProps };
