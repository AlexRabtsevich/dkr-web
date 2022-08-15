import React, { FC, MouseEvent, PropsWithChildren } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import { SecondaryContainedButton, SecondaryTextButton } from '../buttons';
import { IModalProps, Modal } from './modal';

export interface IDialogProps extends IModalProps {
  onConfirm?: (event: MouseEvent<HTMLButtonElement>) => void;
  dismissButtonLabel?: string;
  confirmButtonLabel?: string;
  isDisabledConfirmButton?: boolean;
}

export const Dialog: FC<PropsWithChildren<IDialogProps>> = (props) => {
  const { onConfirm, onClose, dismissButtonLabel, confirmButtonLabel, isDisabledConfirmButton, ...modalProps } = props;

  const close = (event: MouseEvent<HTMLButtonElement>) => onClose && onClose(event);
  const confirm = (event: MouseEvent<HTMLButtonElement>) => onConfirm && onConfirm(event);

  const actions = (
    <>
      {dismissButtonLabel && (
        <SecondaryTextButton onClick={close} startIcon={<CloseIcon />}>
          {dismissButtonLabel}
        </SecondaryTextButton>
      )}
      {confirmButtonLabel && (
        <SecondaryContainedButton
          disabled={isDisabledConfirmButton}
          onClick={confirm}
          data-testid='dialog-confirmation-button'
        >
          {confirmButtonLabel}
        </SecondaryContainedButton>
      )}
    </>
  );

  return <Modal {...modalProps} actionBar={actions} onClose={close} />;
};
