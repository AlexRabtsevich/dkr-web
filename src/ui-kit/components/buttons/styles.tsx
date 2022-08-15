import { styled } from '@mui/material';

export const StyledClearButton = styled('span')(({ theme }) => ({
  background: theme.palette.secondary.main,
  height: '1.25rem',
  width: '1.25rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,

  '& .MuiSvgIcon-root': {
    color: `${theme.palette.common.white}!important`,
    fontSize: '1rem',
    cursor: 'pointer',
  },
}));
