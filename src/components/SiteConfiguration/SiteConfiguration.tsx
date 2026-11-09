import { useEffect, useState } from 'react';
import {
  SiteConfigurationContainer,
  SiteConfigurationContent,
  ToggleButton,
} from './SiteConfiguration.styled';
import Image from 'next/image';
import type { Language, UiText } from '@/interfaces/Text';

interface SiteConfigurationProps {
  language: Language;
  uiTexts: UiText;
  onLanguageChange: (language: Language) => void;
}

const SiteConfiguration = ({ language, uiTexts, onLanguageChange }: SiteConfigurationProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    sessionStorage.setItem('DarkMode', (!isDarkMode).toString());
  };

  const toggleLanguage = () => {
    onLanguageChange(language === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    const darkModePreference = sessionStorage.getItem('DarkMode');
    if (darkModePreference) {
      setIsDarkMode(darkModePreference === 'true');
    }
  }, []);

  return (
    <SiteConfigurationContainer>
      <SiteConfigurationContent>
        <ToggleButton
          type="button"
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? uiTexts.activateLightMode : uiTexts.activateDarkMode}
        >
          {isDarkMode ? '🌙' : '☀️'}
        </ToggleButton>
      </SiteConfigurationContent>
      <SiteConfigurationContent>
        <ToggleButton
          type="button"
          onClick={toggleLanguage}
          aria-label={`${uiTexts.changeLanguage}. ${uiTexts.currentLanguage}: ${
            language === 'es' ? uiTexts.spanish : uiTexts.english
          }`}
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
