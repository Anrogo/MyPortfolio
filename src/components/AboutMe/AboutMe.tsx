import { Subtitle } from '@/styles/GlobalStyle';
import { AboutMeDescription, AboutMeSection } from './AboutMe.styled';
import { theme } from '@/styles/theme';
import { AboutMeTexts } from '@/constants/texts';

const AboutMe = () => {
  return (
    <AboutMeSection>
      <Subtitle fontWeight={theme.fontWeight.light}>Sobre mí</Subtitle>
      <AboutMeDescription>{AboutMeTexts.description}</AboutMeDescription>
    </AboutMeSection>
  );
};

export default AboutMe;
