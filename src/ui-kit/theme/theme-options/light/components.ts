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
        backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/uploads/fabric_1.png")',
      },
      a: {
        textDecoration: 'none',
        cursor: 'pointer',
        color: colors.persianGreen,
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
  MuiBottomNavigation: {
    styleOverrides: {
      root: {
        background: 'transparent',
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        height: '1.5rem',

        '&.Mui-focused': {
          color: colors.shuttleGray,
          '&.Mui-error': {
            color: colors.cinnabar,
          },
        },
        '&.MuiFormLabel-filled': {
          color: colors.shuttleGray,

          '&.Mui-error': {
            color: colors.cinnabar,

            '&.Mui-focused': {
              color: colors.cinnabar,
            },
          },
          '&.Mui-focused': {
            color: colors.atoll,
          },
        },
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
      containedPrimary: {
        backgroundColor: colors.persianGreen,
        '&:hover': {
          backgroundColor: colors.persianGreen,
          boxShadow: `0 0.25rem 0.625rem 0.3125rem ${colors.lilyWhite20Alpha}`,
        },
        '&.Mui-disabled': {
          backgroundColor: colors.heather,
          color: colors.white,
        },
      },
      outlined: {
        padding: '0.875rem 1.25rem',
        fontSize: '0.875rem',
        lineHeight: '1.1875rem',
        boxShadow: 'none',
      },
      outlinedPrimary: {
        border: `2px solid ${colors.persianGreen}`,
        '&:hover': {
          borderColor: colors.persianGreen,
          border: `2px solid ${colors.persianGreen}`,
        },
        '&.Mui-disabled': {
          color: colors.heather,
          border: `2px solid ${colors.heather}`,
        },
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
            backgroundColor: colors.grayChateau12Alpha,
            borderRadius: '50%',
            transition: '0.2s',
          },
        },
        '& > .MuiTouchRipple-root': {
          display: 'none',
        },
        '&.Mui-disabled': {
          color: colors.heather,
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        backgroundColor: colors.wildSand,
        '&:hover': {
          backgroundColor: colors.wildSand,
        },
        '&.Mui-disabled': {
          backgroundColor: colors.alabaster,
          '&.Mui-error': {
            backgroundColor: colors.provincialPink,
            '&:hover': {
              backgroundColor: colors.cosmos,
            },
          },
        },
        '& .MuiSvgIcon-root': {
          color: colors.grayChateau,
        },
        '&.Mui-focused': {
          backgroundColor: colors.alabaster,

          '&.MuiFilledInput-underline:before,&.MuiFilledInput-underline:after': {
            borderColor: colors.atoll,
          },
          '& .MuiSvgIcon-root': {
            color: colors.atoll,
          },
        },
        '&.Mui-error': {
          backgroundColor: colors.provincialPink,
          '&:hover': {
            backgroundColor: colors.cosmos,
          },
        },
        '@media (hover: none)': {
          '&:hover': {
            backgroundColor: `${colors.concrete} !important`, // overrides background color for all inputs
          },
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        '&.MuiFilledInput-underline::before': {
          borderBottom: `2px solid ${colors.concrete}`,
        },
        '&.MuiFilledInput-root:hover:not(.Mui-disabled):before': {
          borderBottom: `2px solid ${colors.concrete}`,
        },
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
          backgroundColor: colors.alabaster,
          '&::before': {
            borderBottomStyle: 'solid',
            opacity: '0.4',
          },
        },
        '&.MuiFilledInput-underline.Mui-error.Mui-focused': {
          '&::before, &::after': {
            borderBottom: `2px solid ${colors.cinnabar}`,
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
        boxShadow: `0 0.125rem 1rem ${colors.black5Alpha}`,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: `0 0.125rem 1rem ${colors.black5Alpha} !important`, // overrides shadow for all papers
      },
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
          color: colors.atoll,
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
