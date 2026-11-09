import { HomeTexts } from '@/constants/texts_ES';
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

const Hero = ({ texts }: { texts: typeof import('@/constants/texts_ES') }) => {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroInformation>
          <HeroTextSection id="hero-section-left">
            <Title>{texts.HomeTexts.myName}</Title>
            <HeroSubtitle>{texts.HomeTexts.myPosition}</HeroSubtitle>
            <Description>{texts.HomeTexts.myDescription}</Description>
          </HeroTextSection>
          <HeroImgSection id="hero-section-right">
            <ProfileImage
              src={profileImage}
              alt="Foto de perfil de Antonio"
              fill
              sizes="(max-width: 768px) 180px, 280px"
            />
          </HeroImgSection>
        </HeroInformation>
        <SocialLinks />
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
