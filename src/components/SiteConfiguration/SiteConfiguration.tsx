import { useEffect, useState } from 'react';
import {
  SiteConfigurationContainer,
  SiteConfigurationContent,
  ToggleButton,
} from './SiteConfiguration.styled';

const SiteConfiguration = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleDarkMode = () => {
    console.log('Modo oscuro:', !isDarkMode);
    setIsDarkMode(!isDarkMode);
    sessionStorage.setItem('DarkMode', (!isDarkMode).toString());
  };

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => {
      const nextLanguage = currentLanguage === 'es' ? 'en' : 'es';
      sessionStorage.setItem('Language', nextLanguage);
      console.log('Idioma seleccionado:', nextLanguage);
      return nextLanguage;
    });
  };

  useEffect(() => {
    const darkModePreference = sessionStorage.getItem('DarkMode');
    const languagePreference = sessionStorage.getItem('Language');
    if (darkModePreference) {
      setIsDarkMode(darkModePreference === 'true');
    }
    if (languagePreference) {
      setLanguage(languagePreference as 'es' | 'en');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <SiteConfigurationContainer>
      <SiteConfigurationContent>
        <ToggleButton onClick={toggleDarkMode}>Modo {isDarkMode ? '🌙' : '☀️'}</ToggleButton>
      </SiteConfigurationContent>
      <SiteConfigurationContent>
        <ToggleButton
          type="button"
          onClick={toggleLanguage}
          aria-label={`Cambiar idioma. Idioma actual: ${language === 'es' ? 'español' : 'inglés'}`}
        >
          Idioma {language.toUpperCase()}
        </ToggleButton>
      </SiteConfigurationContent>
    </SiteConfigurationContainer>
  );
};

export default SiteConfiguration;
