import { homeTexts } from '@/constants/texts';
import { HeroSection, Container } from './Hero.styled';
import { Description, Subtitle, Title } from '@/styles/GlobalStyle';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Container>
        <Title>Hola, soy {homeTexts.myName}</Title>
        <Subtitle>{homeTexts.myPosition}</Subtitle>
        <Description>{homeTexts.myDescription}</Description>
      </Container>
    </HeroSection>
  );
};

export default Hero;
