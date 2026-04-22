import { Description, Details, Text, Subtitle, Summary, Li, Link } from '@/styles/GlobalStyle';
import {
  ProjectsFeaturesList,
  ProjectsLi,
  ProjectsList,
  ProjectsParagraph,
  ProjectsSection,
} from './Projects.styled';
import { theme } from '@/styles/theme';

const Projects = () => {
  return (
    <ProjectsSection>
      <Subtitle fontWeight={theme.fontWeight.light}>Proyectos más destacados</Subtitle>
      <ProjectsList>
        <ProjectsLi>
          <Description>Mi antiguo portfolio web</Description>
          <ProjectsParagraph>
            <Text>
              Creado en noviembre 2021 y actualizado durante los años posteriores. Refleja mis
              comienzos como desarrollador web y la búsqueda de mostrarme al mundo laboral con un
              diseño moderno y fluido.
            </Text>
            <Details>
              <Summary>Más información</Summary>
              Ahora he decidido renovarlo y esta es mi nueva creación en lo que a portfolio moderno
              y minimalista se refiere. Detalles a destacar del antiguo portfolio:
              <ProjectsFeaturesList>
                <Li>- Creado exclusivamente con HTML, CSS y JS.</Li>
                <Li>- Fecha de creación: 18 de noviembre de 2021.</Li>
                <Li>
                  - Publicado hasta 2026 en <u>https://antonioweb.es</u>.
                </Li>
                <Li>
                  - Github:{' '}
                  <Link href="https://github.com/Anrogo/Web-Portfolio" target="_blank">
                    Web Portfolio
                  </Link>
                </Li>
              </ProjectsFeaturesList>
            </Details>
          </ProjectsParagraph>
        </ProjectsLi>
        <ProjectsLi>
          <Description>Blog Argaming</Description>
          <ProjectsParagraph>
            <Text>
              Se trata de mi proyecto final para el Grado Superior de Desarrollo de Aplicaciones Web
              en el Instituto Virgen del Carmen (Jáen), del curso 2019/20.
            </Text>
            <Details>
              <Summary>Más información</Summary>
              <ProjectsFeaturesList>
                <Li>- Lenguaje/s: HTML, CSS, JS y PHP. Framework de PHP: CodeIgniter 3.1</Li>
                <Li>- Fecha creación: Junio 2020.</Li>
                <Li>- Fecha última modificación: Noviembre 2021.</Li>
                <Li>
                  - Github:{' '}
                  <Link
                    href="https://github.com/Anrogo/Proyecto-final-DAW---ARGaming"
                    target="_blank"
                  >
                    Blog Argaming
                  </Link>
                </Li>
              </ProjectsFeaturesList>
            </Details>
          </ProjectsParagraph>
        </ProjectsLi>
      </ProjectsList>
    </ProjectsSection>
  );
};

export default Projects;
