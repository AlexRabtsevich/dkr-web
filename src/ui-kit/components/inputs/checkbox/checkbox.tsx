import React, { FC } from 'react';
import MaterialCheckbox from '@mui/material/Checkbox';
import { CheckboxProps as MaterialCheckboxProps } from '@mui/material/Checkbox/Checkbox';

export type CheckboxProps = MaterialCheckboxProps;

export const Checkbox: FC<CheckboxProps> = (props) => <MaterialCheckbox color="primary" {...props} />;
