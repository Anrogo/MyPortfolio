import AboutMe from '@/components/AboutMe/AboutMe';
import ArrowUp from '@/components/ArrowUp/ArrowUp';
import Copyright from '@/components/Copyright/Copyright';
import Education from '@/components/Education/Education';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';
import NavBarLink from '@/components/NavBarLink/NavBarLink';
import Projects from '@/components/Projects/Projects';
import SiteConfiguration from '@/components/SiteConfiguration/SiteConfiguration';
import { Language } from '@/interfaces/Text';
import { Container, MainContainer } from '@/styles/GlobalStyle';
import { useEffect, useState } from 'react';

const Home = () => {
  const [textsLanguage, setTextsLanguage] = useState<Language>('es');
  const [texts, setTexts] = useState<typeof import('@/constants/texts_ES')>(
    require('@/constants/texts_ES')
  );

  useEffect(() => {
    console.log('Idioma seleccionado:', textsLanguage);
    if (textsLanguage === 'es') {
      import('@/constants/texts_ES').then((module) => {
        setTexts(module);
      });
    } else if (textsLanguage === 'en') {
      import('@/constants/texts_EN').then((module) => {
        setTexts(module);
      });
    }
  }, [textsLanguage]);

  return (
    <MainContainer>
      <Container>
        <SiteConfiguration onLanguageChange={setTextsLanguage} />
        <Hero texts={texts} />
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
