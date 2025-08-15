import AboutMe from '@/components/AboutMe/AboutMe';
import Hero from '@/components/Hero/Hero';
import { Container } from '@/styles/GlobalStyle';

const Home = () => {
  return (
    <Container>
      <Hero />
      <AboutMe />
    </Container>
  );
};

export default Home;
