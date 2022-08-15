import { SelectProps } from '@mui/material/Select';
import { ReactNode } from 'react';

import { ISelectItem } from '../select';

export type MultiSelectItem = ISelectItem;
export type MultiselectValue = string[];
export type SelectMultiselectItems = (items: MultiselectValue) => void;

export interface IMultiselectProps
  extends Omit<SelectProps<MultiselectValue>, 'onChange' | 'renderValue' | 'multiple'> {
  items: MultiSelectItem[];
  selectItems: SelectMultiselectItems;
  helperText?: ReactNode;
}
