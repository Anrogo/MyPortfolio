import { HomeTexts } from '@/constants/texts';
import {
  HeroSection,
  HeroContainer,
  HeroImgSection,
  HeroTextSection,
  ProfileImage,
  HeroSubtitle,
} from './Hero.styled';
import { Description, Title } from '@/styles/GlobalStyle';
import profileImage from '@/assets/images/perfil-web.jpg';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroTextSection id="hero-section-left">
          <Title>Hola, soy {HomeTexts.myName}</Title>
          <HeroSubtitle>{HomeTexts.myPosition}</HeroSubtitle>
          <Description>{HomeTexts.myDescription}</Description>
        </HeroTextSection>
        <HeroImgSection id="hero-section-right">
          <ProfileImage
            src={profileImage}
            alt="Foto de perfil de Antonio"
            fill
            sizes="(max-width: 768px) 180px, 280px"
          />
        </HeroImgSection>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
