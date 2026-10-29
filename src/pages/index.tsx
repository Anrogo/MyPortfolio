import AboutMe from '@/components/AboutMe/AboutMe';
import Copyright from '@/components/Copyright/Copyright';
import Education from '@/components/Education/Education';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';
import NavBarLink from '@/components/NavBarLink/NavBarLink';
import Projects from '@/components/Projects/Projects';
import { Container, MainContainer } from '@/styles/GlobalStyle';

const Home = () => {
  return (
    <MainContainer>
      <Container>
        <Hero />
        <NavBarLink />
        <AboutMe />
        <Experience />
        <Projects />
        <Education />
        <Copyright />
      </Container>
    </MainContainer>
  );
};

export default Home;
