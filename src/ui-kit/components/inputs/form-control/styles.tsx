import FormControlLabel from '@mui/material/FormControlLabel';
import { FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginLeft: '0.5rem',
  '& > span:last-child': {
    color: theme.palette.text.primary,
    '&.Mui-disabled': {
      color: theme.palette.action.disabled,
    },
  },
}));

export const StyledFormControlHelperText = styled(FormHelperText)({
  marginLeft: '0.1875rem',
  marginTop: '0.25rem',
  fontSize: '0.9375rem',
  lineHeight: '1rem',
});
