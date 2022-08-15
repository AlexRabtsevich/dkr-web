import { useFormContext, Controller } from 'react-hook-form';
import { FC } from 'react';

import { ErrorText, ISelectProps, Select } from '../../ui-kit';

interface IProps extends ISelectProps {
  name: string;
}

export const FormSelect: FC<IProps> = ({ label, name, ...props }) => {
  const { control, getFieldState, formState } = useFormContext();
  const { error } = getFieldState(name, formState);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...fieldProps } }) => (
        <Select
          {...props}
          {...fieldProps}
          label={label}
          inputRef={ref}
          helperText={!!error && <ErrorText>{error.message}</ErrorText>}
          error={!!error}
        />
      )}
    />
  );
};
