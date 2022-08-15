import { styled } from '@mui/material';

export const StyledSignUpTextDiv = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  marginTop: '1.5rem',
  textAlign: 'center',
  fontFamily: 'Open Sans',
  fontSize: '0.9375rem',
  '& a': {
    marginLeft: theme.spacing(1),

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
