import React, { FC, MouseEvent, PropsWithChildren, ReactElement } from 'react';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

import { PrimaryHeadline } from '../typography';
import { StyledDialog, StyledDialogActions, StyledDialogCloseButton } from './styles';

export interface IModalProps {
  isOpen: boolean;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
  headerTitle?: string;
  actionBar?: ReactElement;
  scroll?: 'body' | 'paper';
}

export const Modal: FC<PropsWithChildren<IModalProps>> = (props) => {
  const { headerTitle, isOpen, children, onClose, actionBar, scroll } = props;

  const close = (event: MouseEvent<HTMLButtonElement>) => onClose && onClose(event);

  return (
    <StyledDialog fullWidth open={isOpen} onBackdropClick={close} scroll={scroll}>
      <StyledDialogCloseButton onClick={close} size='large'>
        <CloseIcon />
      </StyledDialogCloseButton>
      <PrimaryHeadline>{headerTitle}</PrimaryHeadline>
      <DialogContent>{children}</DialogContent>
      {actionBar && <StyledDialogActions>{actionBar}</StyledDialogActions>}
    </StyledDialog>
  );
};
