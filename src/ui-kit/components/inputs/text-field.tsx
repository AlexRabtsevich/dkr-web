import { TextFieldProps as MaterialTextFieldProps, TextField as MaterialTextField } from '@mui/material';
import React, { FC } from 'react';

export type TextFieldProps = MaterialTextFieldProps;

export const TextField: FC<TextFieldProps> = (props) => {
  return <MaterialTextField fullWidth rows={3} variant='filled' {...props} />;
};
