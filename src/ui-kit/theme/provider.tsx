import React, { FC, PropsWithChildren, useMemo } from 'react';
import { ThemeProvider as MaterialThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeHandle, useThemeStore } from './store';
import { setItemToLocaleStorage } from '../../common/utils';
import { THEME_HANDLE_KEY } from './constants';
import { DEFAULT_THEME_OPTIONS, themeOptionsProvider } from './theme-options/theme-options';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const themeHandle = useThemeStore((state) => state.themeHandle);

  useThemeStore.subscribe(
    (state) => state.themeHandle,
    (handle: ThemeHandle) => setItemToLocaleStorage(THEME_HANDLE_KEY, handle),
  );

  const theme = useMemo(() => {
    const themeOptions = themeOptionsProvider.get(themeHandle) || DEFAULT_THEME_OPTIONS;

    return createTheme({ ...themeOptions });
  }, [themeHandle]);

  return (
    <MaterialThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  );
};
