import { ModalDefault, ModalDefaultProps } from './modal.default';
import { ModalError, ModalErrorProps } from './modal.error';
import { ModalSuccess, ModalSuccessProps } from './modal.success';
import { ModalTrigger } from './modal.parts';
import { ModalBase, ModalBaseProps } from './modal.base';

export const Modal = {
  Base: ModalBase,
  Default: ModalDefault,
  Error: ModalError,
  Success: ModalSuccess,
};

export { ModalTrigger };
export type { ModalErrorProps, ModalDefaultProps, ModalSuccessProps, ModalBaseProps };
