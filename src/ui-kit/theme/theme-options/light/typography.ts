import { TypographyOptions } from '@mui/material/styles/createTypography';

const baseTextTypographyOptions = {
  fontSize: '0.9375rem',
  lineHeight: '1.25rem',
  fontWeight: 'normal',
};

export const typography: TypographyOptions = {
  fontFamily: 'Poppins, sans-serif',
  h1: {
    fontSize: '1.5rem',
    lineHeight: '2.25rem',
    fontWeight: 'bold',
    letterSpacing: '0.02rem',
  },
  h2: {
    letterSpacing: '0.02rem',
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
    fontWeight: 600,
  },
  h3: {
    fontSize: '1.125rem',
    lineHeight: '1.3125rem',
    fontWeight: 'bold',
  },
  h4: {
    fontSize: '1.375rem',
    fontWeight: 300,
    textTransform: 'uppercase',
    letterSpacing: '0.02rem',
  },
  subtitle1: {
    fontSize: '0.9375rem',
    lineHeight: '1.25rem',
    fontWeight: 600,
  },
  subtitle2: baseTextTypographyOptions,
  body1: baseTextTypographyOptions,
  body2: {
    fontSize: '1rem',
    lineHeight: '1.125rem',
    fontWeight: 400,
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.9375rem',
    lineHeight: '1rem',
  },
};
