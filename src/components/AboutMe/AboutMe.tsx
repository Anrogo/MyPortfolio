import { Subtitle } from '@/styles/GlobalStyle';
import { AboutMeDescription, AboutMeSection } from './AboutMe.styled';
import { theme } from '@/styles/theme';
import Image from 'next/image';
import technologist from '@/assets/images/man-technologist.png';
import type { AboutMeText } from '@/interfaces/Text';

const AboutMe = ({ texts }: { texts: AboutMeText }) => {
  return (
    <AboutMeSection id="about-me">
      <Subtitle fontWeight={theme.fontWeight.light}>{texts.title}</Subtitle>
      <AboutMeDescription>{texts.description}</AboutMeDescription>
      <Image src={technologist} width={100} height={100} alt={texts.imageAlt} unoptimized />
    </AboutMeSection>
  );
};

export default AboutMe;
