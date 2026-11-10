import {
  HeroSection,
  HeroContainer,
  HeroImgSection,
  HeroTextSection,
  ProfileImage,
  HeroSubtitle,
  HeroInformation,
} from './Hero.styled';
import { Description, Title } from '@/styles/GlobalStyle';
import profileImage from '@/assets/images/perfil-web.jpg';
import SocialLinks from '../SocialLinks/SocialLinks';
import type { HomeText } from '@/interfaces/Text';

interface HeroProps {
  texts: HomeText;
  darkTheme: boolean;
}

const Hero = ({ texts, darkTheme }: HeroProps) => {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroInformation>
          <HeroTextSection id="hero-section-left">
            <Title>{texts.myName}</Title>
            <HeroSubtitle>{texts.myPosition}</HeroSubtitle>
            <Description>{texts.myDescription}</Description>
          </HeroTextSection>
          <HeroImgSection id="hero-section-right">
            <ProfileImage
              src={profileImage}
              alt={texts.profileImageAlt}
              fill
              sizes="(max-width: 768px) 180px, 280px"
              placeholder="blur"
            />
          </HeroImgSection>
        </HeroInformation>
        <SocialLinks darkTheme={darkTheme} />
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
