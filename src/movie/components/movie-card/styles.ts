import { Card, styled } from '@mui/material';

interface IMoveCardProps {
  rating: number;
}

export const StyledMovieCard = styled(Card, {
  shouldForwardProp: (propName: PropertyKey) => propName !== 'rating',
})<IMoveCardProps>(({ rating, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 0,
  position: 'relative',
  '&::after': {
    content: `"${rating}"`,
    position: 'absolute',
    borderRadius: '50%',
    height: '1.75rem',
    width: '1.75rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: '0.75rem',
    top: '0.5rem',
    right: '0.5rem',
  },
}));
