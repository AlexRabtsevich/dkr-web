import React, { FC } from 'react';

import { Checkbox, CheckboxProps } from './checkbox';
import { IFormControlWithLabelProps, FormControlWithLabel } from '../form-control';

export type CheckboxWithLabelProps = Omit<IFormControlWithLabelProps, 'control'> & CheckboxProps;

export const CheckboxWithLabel: FC<CheckboxWithLabelProps> = (props) => {
  const { label, fullWidth, helperText, error, className, ...checkboxProps } = props;

  return (
    <FormControlWithLabel
      label={label}
      fullWidth={fullWidth}
      helperText={helperText}
      error={error}
      className={className}
      control={<Checkbox {...checkboxProps} />}
    />
  );
};
