// src/pages/_app.tsx
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ThemeModeContext } from '@/contexts/ThemeModeContext';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { darkTheme, defaultTheme } from '@/styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(sessionStorage.getItem('DarkMode') === 'true');
  }, []);

  const setDarkMode = (nextIsDarkMode: boolean) => {
    setIsDarkMode(nextIsDarkMode);
    sessionStorage.setItem('DarkMode', String(nextIsDarkMode));
  };

  return (
    <ThemeModeContext.Provider value={{ isDarkMode, setDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default App;
