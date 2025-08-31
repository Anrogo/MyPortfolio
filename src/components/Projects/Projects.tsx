import { Description, Details, Text, Subtitle, Summary, Li, Link } from '@/styles/GlobalStyle';
import { ProjectsLi, ProjectsList, ProjectsParagraph, ProjectsSection } from './Projects.styled';
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
              <ProjectsList>
                <Li>- Creado exclusivamente con HTML, CSS y JS</Li>
                <Li>
                  - Github:{' '}
                  <Link href="https://github.com/Anrogo/Web-Portfolio" target="_blank">
                    Web Portfolio
                  </Link>
                </Li>
                Lenguaje/s: PHP Framework: CodeIgniter 3.1 Fecha creación: Junio 2020 Fecha última
                modificación: Noviembre 2021
              </ProjectsList>
            </Details>
          </ProjectsParagraph>
        </ProjectsLi>
      </ProjectsList>
    </ProjectsSection>
  );
};

export default Projects;
