import React, { FC, PropsWithChildren } from 'react';
import { SnackbarKey, SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { StyledSnackbarProvider } from './styles';

const MAX_ALERTS_NUMBER = 10;

interface ISnackbarProvider extends SnackbarProvider {
  closeSnackbar: (key?: SnackbarKey) => void;
}

export const AlertContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const alertsRef = React.createRef<ISnackbarProvider>();
  const onClickDismiss = (key: string | number) => () => {
    if (alertsRef.current) {
      alertsRef.current.closeSnackbar(key);
    }
  };

  const action = (key: string | number) => {
    return (
      <IconButton size='small' aria-label='close' color='inherit' onClick={onClickDismiss(key)}>
        <CloseIcon fontSize='small' />
      </IconButton>
    );
  };

  return (
    <StyledSnackbarProvider
      hideIconVariant
      maxSnack={MAX_ALERTS_NUMBER}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      ref={alertsRef}
      action={action}
    >
      <CssBaseline />
      {children}
    </StyledSnackbarProvider>
  );
};
