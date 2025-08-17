import AboutMe from '@/components/AboutMe/AboutMe';
import Education from '@/components/Education/Education';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';
import { Container } from '@/styles/GlobalStyle';

const Home = () => {
  return (
    <Container>
      <Hero />
      <AboutMe />
      <Experience />
      <Education />
    </Container>
  );
};

export default Home;
