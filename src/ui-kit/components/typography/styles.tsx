import { styled, Typography } from '@mui/material';

export const StyledTextWithSeparator = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  '&::after,&::before': {
    content: '""',
    flex: '1!important',
    borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
  },

  '&:not(:empty)::before': {
    marginRight: '0.35em',
  },
  '&:not(:empty)::after': {
    marginLeft: '0.35em',
  },
});
