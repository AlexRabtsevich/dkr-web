import React, { ChangeEvent, useCallback } from 'react';
import { FormControlLabel } from '@mui/material';

import { ThemeHandle, useThemeStore } from '../../../../ui-kit';
import { StyledSwitch } from './styles';

export const ThemeToggle = () => {
  const { themeHandle, changeTheme } = useThemeStore();
  const isChecked = themeHandle === ThemeHandle.Dark;

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      const handle = checked ? ThemeHandle.Dark : ThemeHandle.Light;
      changeTheme(handle);
    },
    [changeTheme],
  );

  return <FormControlLabel control={<StyledSwitch onChange={onChange} checked={isChecked} />} label='' />;
};
