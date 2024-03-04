import { ModalDefault, ModalDefaultProps } from './modal.default';

type ModalErrorProps = ModalDefaultProps & {};

const ModalError = (props: ModalErrorProps) => {
  return <ModalDefault iconName="exclamationPoint" iconClassName="bg-error-10 text-white" {...props} />;
};

export { ModalError };
export type { ModalErrorProps };
