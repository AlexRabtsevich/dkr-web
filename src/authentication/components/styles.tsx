import { styled } from '@mui/material';

import { sanJuan } from '../../ui-kit/theme/theme-options/colors';

export const StyledBackgroundDiv = styled('div')({
  height: '100%',
});

export const StyledPageWrapperDiv = styled('div')(() => ({
  paddingBottom: '3.75rem',
  paddingTop: '3.75rem',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'scroll',
}));

export const StyledFormWrapperDiv = styled('div')(({ theme }) => ({
  background: sanJuan,
  padding: '2.5rem 2rem',
  textDecorationColor: theme.palette.common.white,
  borderRadius: '0.5rem',
  backdropFilter: 'blur(2rem)',
  '& .MuiFormHelperText-root.Mui-error .MuiTypography-root': {
    color: theme.palette.error.light,
  },
  '&  .MuiTypography-h4': {
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  '& a': {
    display: 'inline-block',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1.0625rem',
  },
}));
