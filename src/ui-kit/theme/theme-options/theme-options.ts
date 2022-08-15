import { ThemeOptions } from '@mui/material';

import { ThemeHandle } from '../store';
import * as lightThemeOptions from './light';
import * as darkThemeOptions from './dark';

export const themeOptionsProvider = new Map<ThemeHandle, ThemeOptions>([
  [ThemeHandle.Light, lightThemeOptions],
  [ThemeHandle.Dark, darkThemeOptions],
]);

export const DEFAULT_THEME_OPTIONS = lightThemeOptions;
