import { useEffect, useState } from 'react';
import {
  LanguageOption,
  LanguageSelect,
  SiteConfigurationContainer,
  SiteConfigurationContent,
  ToggleButton,
} from './SiteConfiguration.styled';

const SiteConfiguration = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    console.log('Modo oscuro:', !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    console.log('Idioma seleccionado:', selectedLanguage);
  };

  useEffect(() => {
    const darkModePreference = sessionStorage.getItem('darkMode');
    if (darkModePreference) {
      setIsDarkMode(darkModePreference === 'true');
    }
  }, [isDarkMode]);

  return (
    <SiteConfigurationContainer>
      <SiteConfigurationContent>
        <ToggleButton onClick={toggleDarkMode}>Modo {isDarkMode ? '🌙' : '☀️'}</ToggleButton>
      </SiteConfigurationContent>
      <SiteConfigurationContent>
        <LanguageSelect onChange={handleLanguageChange}>
          <LanguageOption value="es">Español</LanguageOption>
          <LanguageOption value="en">Inglés</LanguageOption>
        </LanguageSelect>
      </SiteConfigurationContent>
    </SiteConfigurationContainer>
  );
};

export default SiteConfiguration;
