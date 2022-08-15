import { styled } from '@mui/material';
import { SnackbarProvider } from 'notistack';

export const StyledSnackbarProvider = styled(SnackbarProvider)(() => ({
  '&.SnackbarContent-root': {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'start',
    borderRadius: 0,
    justifyContent: 'space-between',
    maxWidth: '37.5rem',
  },
}));
