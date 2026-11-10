import {
  SiteConfigurationContainer,
  SiteConfigurationContent,
  ToggleButton,
} from './SiteConfiguration.styled';
import Image from 'next/image';
import { useThemeMode } from '@/contexts/ThemeModeContext';
import type { Language, UiText } from '@/interfaces/Text';
import moonIcon from '@/assets/icons/moon.png';
import sunIcon from '@/assets/icons/sun.png';

interface SiteConfigurationProps {
  language: Language;
  uiTexts: UiText;
  onLanguageChange: (language: Language) => void;
}

const SiteConfiguration = ({ language, uiTexts, onLanguageChange }: SiteConfigurationProps) => {
  const { isDarkMode, setDarkMode } = useThemeMode();

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    onLanguageChange(language === 'es' ? 'en' : 'es');
  };

  return (
    <SiteConfigurationContainer>
      <SiteConfigurationContent>
        <ToggleButton
          type="button"
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? uiTexts.activateLightMode : uiTexts.activateDarkMode}
        >
          {isDarkMode ? (
            <Image key="moon" src={moonIcon} alt="Moon" width={24} height={24} />
          ) : (
            <Image key="sun" src={sunIcon} alt="Sun" width={24} height={24} />
          )}
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
            <Image
              className="flag"
              key="spain"
              src="/images/flags/spain.svg"
              alt=""
              width={24}
              height={16}
            />
          ) : (
            <Image
              className="flag"
              key="uk"
              src="/images/flags/uk.svg"
              alt=""
              width={24}
              height={16}
            />
          )}
        </ToggleButton>
      </SiteConfigurationContent>
    </SiteConfigurationContainer>
  );
};

export default SiteConfiguration;
