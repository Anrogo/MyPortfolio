import { createContext, useContext } from 'react';

interface ThemeModeContextValue {
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
}

export const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error('useThemeMode must be used within ThemeModeContext.Provider');
  }

  return context;
};
