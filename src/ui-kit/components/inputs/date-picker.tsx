import * as React from 'react';
import {
  DatePicker as MaterialDatePicker,
  DatePickerProps as MaterialDatePickerProps,
} from '@mui/x-date-pickers/DatePicker';
import { FC } from 'react';
import { Moment } from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { TextField, TextFieldProps } from './text-field';

type Props = Pick<TextFieldProps, 'error' | 'helperText'>;

export type DatePickerProps = Omit<MaterialDatePickerProps<Moment, Moment>, 'renderInput'> & Props;

export const DatePicker: FC<DatePickerProps> = ({ helperText, error, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MaterialDatePicker
        {...props}
        renderInput={(params) => <TextField error={error} helperText={helperText} {...params} />}
      />{' '}
    </LocalizationProvider>
  );
};
