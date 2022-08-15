import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { ErrorText, TextField, TextFieldProps } from '../../ui-kit';

interface IProps {
  name: string;
}

export const FormTextField: FC<TextFieldProps & IProps> = ({ name, ...props }) => {
  const { register, getFieldState, formState } = useFormContext();
  const { ref, ...rest } = register(name);
  const { error } = getFieldState(name, formState);

  return (
    <TextField
      inputRef={ref}
      {...rest}
      {...props}
      error={!!error}
      helperText={!!error && <ErrorText color='error'>{error.message}</ErrorText>}
    />
  );
};
