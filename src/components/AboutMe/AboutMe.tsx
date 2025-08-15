import { Subtitle } from '@/styles/GlobalStyle';
import { AboutMeDescription, AboutMeSection } from './AboutMe.styled';
import { theme } from '@/styles/theme';
import { AboutMeTexts } from '@/constants/texts';
import Image from 'next/image';
import technologist from '@/assets/images/man-technologist.png';

const AboutMe = () => {
  return (
    <AboutMeSection>
      <Subtitle fontWeight={theme.fontWeight.light}>Sobre mí </Subtitle>
      <AboutMeDescription>{AboutMeTexts.description}</AboutMeDescription>
      <Image src={technologist} width={100} height={100} alt="technologist man" unoptimized />
    </AboutMeSection>
  );
};

export default AboutMe;
