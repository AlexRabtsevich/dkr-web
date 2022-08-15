import React, { FC } from 'react';
import MaterialSelect from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { FormHelperText } from '@mui/material';

import { MenuProps } from './options';
import { useChangeMultiselectValue, useMultiselectOptions, useRenderMultiselectValue } from './hooks';
import { IMultiselectProps, MultiselectValue } from './types';

export const Multiselect: FC<IMultiselectProps> = (props) => {
  const {
    items,
    label,
    fullWidth = true,
    helperText,
    error,
    disabled,
    value = [],
    selectItems,
    ...multiselectProps
  } = props;

  const renderValue = useRenderMultiselectValue(items);
  const multiselectOptions = useMultiselectOptions(items, value as any, disabled);
  const onChange = useChangeMultiselectValue(selectItems);

  return (
    <FormControl fullWidth={fullWidth} variant='filled' color='primary'>
      {label && (
        <InputLabel error={error} disabled={disabled}>
          {label}
        </InputLabel>
      )}
      <MaterialSelect<MultiselectValue>
        multiple
        error={error}
        disabled={disabled}
        renderValue={renderValue}
        onChange={onChange}
        MenuProps={MenuProps}
        value={value}
        {...multiselectProps}
      >
        {multiselectOptions}
      </MaterialSelect>
      {helperText && (
        <FormHelperText error={error} style={{ height: '1px' }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
