import AboutMe from '@/components/AboutMe/AboutMe';
import ArrowUp from '@/components/ArrowUp/ArrowUp';
import Copyright from '@/components/Copyright/Copyright';
import Education from '@/components/Education/Education';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';
import NavBarLink from '@/components/NavBarLink/NavBarLink';
import Projects from '@/components/Projects/Projects';
import SiteConfiguration from '@/components/SiteConfiguration/SiteConfiguration';
import { Container, MainContainer } from '@/styles/GlobalStyle';

const Home = () => {
  return (
    <MainContainer>
      <Container>
        <SiteConfiguration />
        <Hero />
        <NavBarLink />
        <AboutMe />
        <Experience />
        <Projects />
        <Education />
        <Copyright />
        <ArrowUp />
      </Container>
    </MainContainer>
  );
};

export default Home;
