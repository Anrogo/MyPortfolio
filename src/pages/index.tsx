import Head from 'next/head';
import { useEffect, useState } from 'react';
import AboutMe from '@/components/AboutMe/AboutMe';
import ArrowUp from '@/components/ArrowUp/ArrowUp';
import Copyright from '@/components/Copyright/Copyright';
import Courses from '@/components/Courses/Courses';
import Education from '@/components/Education/Education';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';
import NavBarLink from '@/components/NavBarLink/NavBarLink';
import Projects from '@/components/Projects/Projects';
import SiteConfiguration from '@/components/SiteConfiguration/SiteConfiguration';
import * as englishTexts from '@/constants/texts_EN';
import * as spanishTexts from '@/constants/texts_ES';
import { useThemeMode } from '@/contexts/ThemeModeContext';
import type { Language, PortfolioTexts } from '@/interfaces/Text';
import { Container, MainContainer } from '@/styles/GlobalStyle';

const textsByLanguage: Record<Language, PortfolioTexts> = {
  es: spanishTexts,
  en: englishTexts,
};

const Home = () => {
  const [language, setLanguage] = useState<Language>('es');
  const texts = textsByLanguage[language];
  const { isDarkMode } = useThemeMode();

  useEffect(() => {
    const savedLanguage = sessionStorage.getItem('Language');
    if (savedLanguage === 'es' || savedLanguage === 'en') {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    sessionStorage.setItem('Language', nextLanguage);
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <MainContainer>
        <Container>
          <SiteConfiguration
            language={language}
            uiTexts={texts.UiTexts}
            onLanguageChange={handleLanguageChange}
          />
          <Hero texts={texts.HomeTexts} darkTheme={isDarkMode} />
          <NavBarLink texts={texts.NavBarLinkTexts} />
          <AboutMe texts={texts.AboutMeTexts} />
          <Experience texts={texts.ExperienceTexts} />
          <Projects texts={texts.ProjectsTexts} />
          <Education texts={texts.EducationTexts} />
          <Courses texts={texts.CoursesTexts} />
          <Copyright />
          <ArrowUp label={texts.UiTexts.backToTop} />
        </Container>
      </MainContainer>
    </>
  );
};

export default Home;
