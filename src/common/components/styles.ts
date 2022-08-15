import { Box, Card, Container, styled } from '@mui/material';

import { PrimaryHeadline } from '../../ui-kit';

export const StyledPageHeaderHeadline = styled(PrimaryHeadline)(({ theme }) => ({
  marginBottom: theme.spacing(0),
  marginRight: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
}));

export const StyledPageHeaderActionButtonsBox = styled(Box)(({ theme }) => ({
  '& > button': {
    minWidth: 'auto',
    marginLeft: '0.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1071,
    backgroundColor: theme.palette.background.paper,
    padding: '1rem',
    boxShadow: `0 0 2.25rem ${theme.palette.background.paper}, inset 0 0 0.25rem ${theme.palette.background.paper}`,
    overflowX: 'auto',
  },
}));

export const StyledPageContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    paddingTop: '2rem',
    paddingBottom: '1rem',
  },
  paddingTop: '3rem',
  paddingBottom: '2rem',
}));
