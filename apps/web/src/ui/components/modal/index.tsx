import { ModalBase, ModalBaseProps as ModalDefaultProps } from './modal.base';
import { ModalError, ModalErrorProps } from './modal.error';
import { ModalSuccess, ModalSuccessProps } from './modal.success';
import { ModalTrigger } from './modal.parts';

export const Modal = {
  Default: ModalBase,
  Error: ModalError,
  Success: ModalSuccess,
};

export { ModalTrigger };
export type { ModalErrorProps, ModalDefaultProps, ModalSuccessProps };
