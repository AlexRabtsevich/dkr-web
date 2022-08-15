import { Dialog, DialogActions, IconButton, styled } from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    maxWidth: theme.spacing(108),
    borderRadius: theme.spacing(1.5),
    padding: theme.spacing(4),
    position: 'relative',
    overflowX: 'hidden',
    '& > div > .MuiTypography-h1': {
      paddingRight: '1.5rem',
      marginBottom: 0,
    },
    [theme.breakpoints.down('md')]: {
      height: 'fit-content',
    },
  },
  '& .MuiDialogContent-root': {
    padding: 0,
    overflowX: 'hidden',
    '& > div': {
      paddingBottom: '0.125rem',
      paddingTop: 0,
      '& > .MuiGrid-root:first-of-type': {
        '& > *': {
          marginRight: '1rem',
        },
        [theme.breakpoints.up('md')]: {
          '& > *': {
            marginRight: '0.5rem',
          },
        },
      },
    },
    '& .MuiTypography-root': {
      wordBreak: 'break-word',
    },
  },
  '& > .MuiDialog-container': {
    backdropFilter: 'blur(12px)',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      paddingTop: theme.spacing(4),
    },
  },
}));

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: '0.5rem 0 0',
  [theme.breakpoints.up('md')]: {
    padding: '2rem 0 0',
  },
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap-reverse',
    '& > *': {
      marginTop: '1rem',
    },
  },
}));

export const StyledDialogCloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2.5),
  right: theme.spacing(2.5),
  width: theme.spacing(3),
  height: theme.spacing(3),
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  zIndex: 100,
}));
