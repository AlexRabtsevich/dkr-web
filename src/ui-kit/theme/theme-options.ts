import { ThemeOptions } from '@mui/material';

import { ThemeHandle } from './store';

const LightThemeOptions: ThemeOptions = {};

const DarkThemeOptions: ThemeOptions = {};

export const themeOptionsProvider = new Map<ThemeHandle, ThemeOptions>([
  [ThemeHandle.Light, LightThemeOptions],
  [ThemeHandle.Dark, DarkThemeOptions],
]);

export const DEFAULT_THEME_OPTIONS = LightThemeOptions;
