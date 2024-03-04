import { ModalBase, ModalBaseProps } from './modal.base';

type ModalErrorProps = ModalBaseProps & {};

const ModalError = (props: ModalErrorProps) => {
  return <ModalBase iconName="exclamationPoint" iconClassName="bg-error-10 text-white" {...props} />;
};

export { ModalError };
export type { ModalErrorProps };
