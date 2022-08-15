import { FC, ReactNode } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import moment from 'moment';

import { DatePicker, ErrorText } from '../../ui-kit';

interface IProps {
  name: string;
  label?: ReactNode;
}

export const FormDatePicker: FC<IProps> = ({ name, label }) => {
  const { control, getFieldState } = useFormContext();
  const { error } = getFieldState(name);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, onChange, value } }) => (
        <DatePicker
          inputRef={ref}
          value={value || null}
          onChange={(date) => onChange(moment(date).toISOString())}
          error={!!error}
          helperText={!!error && <ErrorText>{error.message}</ErrorText>}
          label={label}
        />
      )}
    />
  );
};
