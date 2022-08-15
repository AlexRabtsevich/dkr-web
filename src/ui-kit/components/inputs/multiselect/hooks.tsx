import MenuItem from '@mui/material/MenuItem';
import { ListItemText } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

import { Checkbox } from '../checkbox';
import { MultiSelectItem, MultiselectValue, SelectMultiselectItems } from './types';

const FIRST_ITEM_INDEX = 0;

export const useMultiselectOptions = (
  items: MultiSelectItem[],
  multiselectValue: MultiselectValue,
  disabledCheckbox?: boolean,
) => {
  return useMemo(() => {
    return items.map(({ value, name }) => (
      <MenuItem key={value} value={value} disabled={disabledCheckbox}>
        <Checkbox checked={multiselectValue?.includes(value)} />
        <ListItemText primary={name} />
      </MenuItem>
    ));
  }, [disabledCheckbox, items, multiselectValue]);
};

export const useRenderMultiselectValue = (items: MultiSelectItem[]) => {
  return useCallback(
    (multiselectValue: MultiselectValue) =>
      multiselectValue.reduce((joinedValue, currentValue, index) => {
        const selectedOptionName = items.find(({ value }) => value === currentValue)?.name;

        if (!selectedOptionName) {
          return joinedValue;
        }

        return joinedValue.concat(index > FIRST_ITEM_INDEX ? `, ${selectedOptionName}` : selectedOptionName);
      }, ''),
    [items],
  );
};

export const useChangeMultiselectValue = (selectItems: SelectMultiselectItems) => {
  return useCallback(
    (event: SelectChangeEvent<MultiselectValue | string>) => {
      const eventValue = event.target.value;
      // On autofill we get a stringified value.
      const selectedValues = typeof eventValue === 'string' ? eventValue.split(',') : eventValue;
      selectItems(selectedValues);
    },
    [selectItems],
  );
};
