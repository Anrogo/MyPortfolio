import { homeTexts } from '@/constants/texts';
import { HeroSection, HeroContainer } from './Hero.styled';
import { Description, Subtitle, Title } from '@/styles/GlobalStyle';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <Title>Hola, soy {homeTexts.myName}</Title>
        <Subtitle>{homeTexts.myPosition}</Subtitle>
        <Description>{homeTexts.myDescription}</Description>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
