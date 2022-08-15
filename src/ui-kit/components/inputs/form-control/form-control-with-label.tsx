import React, { FC, ReactNode } from 'react';
import FormControl, { FormControlProps as MaterialFormControlProps } from '@mui/material/FormControl';
import { FormControlLabelProps as MaterialFormControlLabelProps } from '@mui/material/FormControlLabel';

import { StyledFormControlHelperText, StyledFormControlLabel } from './styles';

type FormControlProps = Pick<MaterialFormControlProps, 'error' | 'fullWidth' | 'className'>;
type FormControlLabelProps = Pick<MaterialFormControlLabelProps, 'control' | 'label'>;

export interface IFormControlWithLabelProps extends FormControlProps, FormControlLabelProps {
  helperText?: ReactNode;
}

export const FormControlWithLabel: FC<IFormControlWithLabelProps> = (props) => {
  const { label, helperText, error, control, ...formControlProps } = props;

  return (
    <FormControl variant='filled' color='primary' error={error} {...formControlProps}>
      <StyledFormControlLabel control={control} label={label} />
      {helperText && <StyledFormControlHelperText error={error}>{helperText}</StyledFormControlHelperText>}
    </FormControl>
  );
};
