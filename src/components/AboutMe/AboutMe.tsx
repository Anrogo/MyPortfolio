import Image from 'next/image';
import { AboutMeDescription, AboutMeSection } from './AboutMe.styled';
import technologist from '@/assets/images/man-technologist.png';
import type { AboutMeText } from '@/interfaces/Text';
import { SectionSubtitle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

const AboutMe = ({ texts }: { texts: AboutMeText }) => {
  return (
    <AboutMeSection id="about-me">
      <SectionSubtitle fontWeight={theme.fontWeight.light}>{texts.title}</SectionSubtitle>
      <AboutMeDescription>{texts.description}</AboutMeDescription>
      <Image src={technologist} width={100} height={100} alt={texts.imageAlt} unoptimized />
    </AboutMeSection>
  );
};

export default AboutMe;
