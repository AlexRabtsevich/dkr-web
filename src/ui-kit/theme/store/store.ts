import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

import { ThemeHandle, ThemeStore } from './types';
import { initialThemeState } from './initial-state';

export const useThemeStore = create<ThemeStore>()(
  subscribeWithSelector((set) => ({
    ...initialThemeState,
    changeTheme: (themeHandle: ThemeHandle) => {
      set((state) => ({ ...state, themeHandle }));
    },
  })),
);
