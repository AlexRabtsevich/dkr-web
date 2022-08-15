import { Components } from '@mui/material';

import * as colors from '../colors';

export const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
      },
      a: {
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
        {
          transition: 'background-color 5000s ease-in-out 0s',
        },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        height: '1.5rem',
        '&.MuiInputLabel-shrink': {
          fontWeight: 'normal',
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: '0.625rem',
      },
      contained: {
        boxShadow: 'none',
        padding: '1rem 1.25rem',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        letterSpacing: '0.02rem',
        whiteSpace: 'nowrap',
      },
      outlined: {
        padding: '0.875rem 1.25rem',
        fontSize: '0.875rem',
        lineHeight: '1.1875rem',
        boxShadow: 'none',
      },
      text: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        padding: '0.25rem 0.5rem',
        letterSpacing: '0.02rem',

        '& > .MuiButton-label': {
          height: '2rem',
        },
        '& > .MuiButton-startIcon': {
          marginRight: '0.125rem',
          padding: '0.25rem',
        },
        '&:hover': {
          backgroundColor: 'transparent !important', // overrides background color for all text buttons

          '& > .MuiButton-startIcon': {
            borderRadius: '50%',
            transition: '0.2s',
          },
        },
        '& > .MuiTouchRipple-root': {
          display: 'none',
        },
      },
    },
  },

  MuiInputBase: {
    styleOverrides: {
      root: {
        '& > .MuiInputBase-input': {
          height: '100%',
          lineHeight: '1.25rem',
          paddingTop: '1.8125rem',
          paddingBottom: '0.5625rem',
        },
        '&.MuiInputBase-multiline': {
          '& > .MuiInputBase-input': {
            paddingTop: '0',
          },
        },
        '&.MuiFilledInput-underline.Mui-disabled': {
          '&::before': {
            borderBottomStyle: 'solid',
            opacity: '0.4',
          },
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: '1rem',
        borderRadius: '0.5rem',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {},
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        '& .MuiFilledInput-root:first-of-type': {
          '& .MuiSelect-root': {
            paddingTop: '1.15625rem',
            paddingBottom: '1.15625rem',
          },
        },
        '& .MuiSelect-icon': {
          '&.Mui-disabled': {
            display: 'none',
          },
        },
        '&:readonly': {
          backgroundColor: 'black',
        },
        '& .MuiInputAdornment-root': {
          cursor: 'default',
        },
        '& > .MuiInputLabel-root': {
          fontSize: '0.875rem',
          '&.MuiInputLabel-shrink': {
            fontSize: '1.125rem',
          },
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        cursor: 'pointer',
      },
    },
  },
};
