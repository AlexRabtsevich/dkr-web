import { styled } from '@mui/material/styles';

export const StyledImg = styled('img')({
  cursor: 'pointer',
  transition: '0.2s',
  marginRight: '0.125rem',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});
