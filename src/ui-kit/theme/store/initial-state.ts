import { IThemeState, ThemeHandle } from './types';
import { getItemFromLocalStorage } from '../../../common/utils';
import { THEME_HANDLE_KEY } from '../constants';

export const initialThemeState: IThemeState = {
  themeHandle: (getItemFromLocalStorage(THEME_HANDLE_KEY) as ThemeHandle) || ThemeHandle.Light,
};
