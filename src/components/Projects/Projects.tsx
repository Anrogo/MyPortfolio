import { Description, Details, Subtitle, Summary, Li, Link, Paragraph } from '@/styles/GlobalStyle';
import {
  IframeContainer,
  ImgContainer,
  ProjectsDetails,
  ProjectsFeaturesList,
  ProjectsLi,
  ProjectsList,
  ProjectsSection,
} from './Projects.styled';
import Image from 'next/image';
import CalculatorImg from '@/assets/images/calculadora_python.png';
import ArgamingImg from '@/assets/images/portada_argaming.png';
import { theme } from '@/styles/theme';

const Projects = () => {
  return (
    <ProjectsSection>
      <Subtitle fontWeight={theme.fontWeight.light}>Proyectos más destacados</Subtitle>
      <ProjectsList>
        <ProjectsLi>
          <Description>Mi antiguo portfolio web</Description>
          <ProjectsDetails>
            <Paragraph>
              Creado en noviembre 2021 y actualizado durante los años posteriores. Refleja mis
              comienzos como desarrollador web y la búsqueda de mostrarme al mundo laboral con un
              diseño moderno y fluido.
            </Paragraph>
            <Details>
              <Summary>Detalles</Summary>
              <Paragraph>
                Mi portfolio actual se basa en la renovación de este con un enfoque moderno y
                minimalista. Detalles a destacar del antiguo portfolio:
              </Paragraph>
              <ProjectsFeaturesList>
                <Li>
                  - Creado exclusivamente con HTML, CSS y JS. Y con PHP para el envío de correos de
                  contacto.
                </Li>
                <Li>- Fecha de creación: 18 de noviembre de 2021.</Li>
                <Li>
                  - Publicado hasta 2026 en <u>https://antonioweb.es</u>.
                </Li>
                <Li>
                  - Github:{' '}
                  <Link href="https://github.com/Anrogo/Web-Portfolio" target="_blank">
                    portfolio v1
                  </Link>
                </Li>
              </ProjectsFeaturesList>
            </Details>
          </ProjectsDetails>
        </ProjectsLi>
        <ProjectsLi>
          <Description>Blog Argaming</Description>
          <ProjectsDetails>
            <Paragraph>
              Se trata de mi proyecto final para el Grado Superior de Desarrollo de Aplicaciones Web
              en el Instituto Virgen del Carmen (Jáen), del curso 2019/20.
            </Paragraph>
            <Details>
              <Summary>Detalles</Summary>
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
                    blog Argaming
                  </Link>
                </Li>
              </ProjectsFeaturesList>
              <ImgContainer>
                <Image
                  src={ArgamingImg}
                  width={600}
                  height={300}
                  alt="Portada del blog ARGaming"
                  unoptimized
                />
              </ImgContainer>
            </Details>
          </ProjectsDetails>
        </ProjectsLi>
        <ProjectsLi>
          <Description>HealthyCook App</Description>
          <ProjectsDetails>
            <Paragraph>
              Diseño UI - UX para aplicación móvil de cocina saludable. Forma parte del ejercicio de
              la asignatura Desarrollo de Interfaces (UI) y Experiencia de Usuario (UX) de 2º DAM.
            </Paragraph>
            <Details>
              <Summary>Detalles</Summary>
              <ProjectsFeaturesList>
                <Li>- Software: desarrollado mediante la aplicación Figma.</Li>
                <Li>- Fecha creación: 5 de diciembre de 2021.</Li>
                <Li>
                  - Figma:{' '}
                  <Link
                    href="https://www.figma.com/proto/EUhjwcPGLIoAh10vOgVlHZ/Mockups-Healthycook-App?node-id=34%3A124&scaling=scale-down&page-id=0%3A1&starting-point-node-id=34%3A124"
                    target="_blank"
                  >
                    HealthyCook App
                  </Link>
                </Li>
              </ProjectsFeaturesList>
              <IframeContainer>
                <iframe
                  width="500"
                  height="380"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEUhjwcPGLIoAh10vOgVlHZ%2FMockups-Healthycook-App%3Fnode-id%3D34%253A124%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D34%253A124"
                  allowFullScreen
                ></iframe>
              </IframeContainer>
            </Details>
          </ProjectsDetails>
        </ProjectsLi>
        <ProjectsLi>
          <Description>Mi propia calculadora</Description>
          <ProjectsDetails>
            <Paragraph>
              Aplicación de calculadora básica creada con Python y su librería gráfica Tkinter. La
              he realizado gracias al siguiente curso de Udemy:{' '}
              <Link
                href="https://www.udemy.com/course/universidad-python-desde-cero-hasta-experto-django-flask-rest-web/"
                target="_blank"
              >
                Universidad Python 2021 - POO, Tkinter, Django, Flask y más
              </Link>{' '}
              (47 h)..
            </Paragraph>
            <Details>
              <Summary>Detalles</Summary>
              <ProjectsFeaturesList>
                <Li>- Lenguaje/s: Python.</Li>
                <Li>- IDE: Pycharm.</Li>
                <Li>- Fecha creación: 15 de enero de 2022.</Li>
                <Li>
                  - Github:{' '}
                  <Link
                    href="https://github.com/Anrogo/Python-Curse/tree/master/Tkinter/Calculadora"
                    target="_blank"
                  >
                    calculadora
                  </Link>
                </Li>
              </ProjectsFeaturesList>
              <ImgContainer>
                <Image
                  src={CalculatorImg}
                  width={300}
                  height={300}
                  alt="Calculadora con Python y Django"
                  unoptimized
                />
              </ImgContainer>
            </Details>
          </ProjectsDetails>
        </ProjectsLi>
      </ProjectsList>
    </ProjectsSection>
  );
};

export default Projects;
