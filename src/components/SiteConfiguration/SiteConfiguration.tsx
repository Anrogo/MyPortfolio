import { useEffect, useState } from 'react';
import {
  SiteConfigurationContainer,
  SiteConfigurationContent,
  ToggleButton,
} from './SiteConfiguration.styled';
import Image from 'next/image';
import { Language } from '@/interfaces/Text';

interface SiteConfigurationProps {
  onLanguageChange?: (language: Language) => void;
}

const SiteConfiguration = ({ onLanguageChange }: SiteConfigurationProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('es');

  const toggleDarkMode = () => {
    console.log('Modo oscuro:', !isDarkMode);
    setIsDarkMode(!isDarkMode);
    sessionStorage.setItem('DarkMode', (!isDarkMode).toString());
  };

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => {
      const nextLanguage = currentLanguage === 'es' ? 'en' : 'es';
      onLanguageChange?.(nextLanguage);
      sessionStorage.setItem('Language', nextLanguage);
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
      setLanguage(languagePreference as Language);
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <SiteConfigurationContainer>
      <SiteConfigurationContent>
        <ToggleButton onClick={toggleDarkMode}>{isDarkMode ? '🌙' : '☀️'}</ToggleButton>
      </SiteConfigurationContent>
      <SiteConfigurationContent>
        <ToggleButton
          type="button"
          onClick={toggleLanguage}
          aria-label={`Cambiar idioma. Idioma actual: ${language === 'es' ? 'español' : 'inglés'}`}
        >
          {language === 'es' ? (
            <Image src="/images/flags/spain.svg" alt="" width={24} height={16} />
          ) : (
            <Image src="/images/flags/uk.svg" alt="" width={24} height={16} />
          )}
        </ToggleButton>
      </SiteConfigurationContent>
    </SiteConfigurationContainer>
  );
};

export default SiteConfiguration;
