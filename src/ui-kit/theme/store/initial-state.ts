import { IThemeState, ThemeHandle } from './types';
import { getItemFromLocalStorage } from '../../../common/utils';

const THEME_KEY = 'theme';

export const initialThemeState: IThemeState = {
  themeHandle: (getItemFromLocalStorage(THEME_KEY) as ThemeHandle) || ThemeHandle.Light,
};
