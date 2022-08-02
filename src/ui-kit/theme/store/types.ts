export enum ThemeHandle {
  Dark = 'DARK',
  Light = 'LIGHT',
}

export interface IThemeState {
  themeHandle: ThemeHandle;
}

export interface IThemeHandlers {
  changeTheme(themeHandle: ThemeHandle): void;
}

export type ThemeStore = IThemeState & IThemeHandlers;
