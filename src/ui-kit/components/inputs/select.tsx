import React, { FC, ReactNode } from 'react';
import MaterialSelect, { SelectProps as MaterialSelectProps } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { FormHelperText, MenuItem } from '@mui/material';

export interface ISelectItem {
  name: string;
  value: string;
}

export interface ISelectProps extends MaterialSelectProps {
  items: ISelectItem[];
  helperText?: ReactNode;
}

export const Select: FC<ISelectProps> = ({
  items,
  label,
  fullWidth = true,
  helperText,
  error,
  disabled,
  ...selectProps
}) => {
  return (
    <FormControl fullWidth={fullWidth} variant='filled' color='primary'>
      {label && (
        <InputLabel error={error} disabled={disabled}>
          {label}
        </InputLabel>
      )}
      <MaterialSelect label={label} error={error} disabled={disabled} {...selectProps}>
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </MaterialSelect>
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};
