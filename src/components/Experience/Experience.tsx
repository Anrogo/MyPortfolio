import { Description, Li, Link, Subtitle, Summary, Text } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';
import {
  ExperienceList,
  ExperienceListDetail,
  ExperienceParagraph,
  ExperienceSection,
} from './Experience.styled';

const Experience = () => {
  return (
    <ExperienceSection>
      <Subtitle fontWeight={theme.fontWeight.light}>Experiencia profesional</Subtitle>
      <ExperienceList>
        <ExperienceListDetail>
          <Description>Septiembre 2023 - Actualidad</Description>
          <ExperienceParagraph>
            <Text>
              Trabajo como desarrollador frontend en{' '}
              <Link href="https://pepperfinance.es" target="_blank" rel="noreferrer">
                Pepper Financial Services Group
              </Link>
              , multinacional del sector financiero. Desarrollo aplicaciones web y móviles con
              tecnologías modernas como React, Angular, Next.js o Ionic.
              <details>
                <Summary>Más información</Summary>
                <ExperienceList>
                  <Li>- Implementación de interfaces de usuario para diferentes productos.</Li>
                  <Li>
                    - Optimización de funcionalidades y diseño para mejorar la experiencia de
                    usuario (UX/UI).
                  </Li>
                  <Li>- Pruebas y validaciones para garantizar rendimiento y estabilidad.</Li>
                  <Li>- Colaboración con equipos multidisciplinares en entornos ágiles.</Li>
                  <Li>- Mantenimiento y evolución continua de las aplicaciones.</Li>
                </ExperienceList>
              </details>
            </Text>
          </ExperienceParagraph>
        </ExperienceListDetail>

        <ExperienceListDetail>
          <Description>Junio 2022 - septiembre 2023: </Description>
          <ExperienceParagraph>
            <Text>
              Previamente también trabajé como desarrollador de backend en{' '}
              <Link href="https://pepperfinance.es" target="_blank">
                Pepper Financial Services Group
              </Link>
              . Desempeñando las siguiente labores en el equipo de mantenimiento:
              <details>
                <Summary>Más información</Summary>
                <ExperienceList>
                  <Li>- Uso de SQL Server.</Li>
                  <Li>- Programación con PL/SQL.</Li>
                  <Li>- Resolución de incidencias de diversa tipología.</Li>
                  <Li>
                    - Creación, modificación y actualización de queries o procedimientos
                    almacenados.
                  </Li>
                  <Li>- Pruebas de valicaciones de los scripts.</Li>
                  <Li>- Automatización de procesos.</Li>
                  <Li>- Actualización y mejora de los aplicativos internos.</Li>
                  <Li>
                    - Integración de nuevos comercios y sus plugins en la plataforma de Ecommerce.
                  </Li>
                </ExperienceList>
              </details>
            </Text>
          </ExperienceParagraph>
        </ExperienceListDetail>

        <ExperienceListDetail>
          <Description>Marzo - junio 2022: </Description>
          <ExperienceParagraph>
            <Text>
              Las prácticas, o FCT, del Grado Superior de DAM. Completada en la empresa{' '}
              <Link href="https://www.vmlyr.com/es-es/spain" target="_blank">
                VMLY&R
              </Link>
              , del grupo WPP, situado en Ríos Rosas 26, Madrid. Como data trainee he desempeñado
              las siguiente labores:
              <details>
                <Summary>Más información</Summary>
                <ExperienceList>
                  <Li>- Manejo y limpieza de ficheros.</Li>
                  <Li>- Carga de datos a través de Microsoft Azure Storage Explore y Hermes.</Li>
                  <Li>- Consulta, extracción y procesamiento de datos en Oracle.</Li>
                  <Li>- Creación y/o modificación de queries.</Li>
                  <Li>- Análisis y automatización de procesos en Oracle.</Li>
                  <Li>- Realización de consultas en Dynamics.</Li>
                  <Li>- Análisis, diseño y automatización de procesos manuales.</Li>
                </ExperienceList>
              </details>
            </Text>
          </ExperienceParagraph>
        </ExperienceListDetail>

        <ExperienceListDetail>
          <Description>Febrero - marzo 2021: </Description>
          <ExperienceParagraph>
            <Text>
              He trabajado como técnico de informática en un empresa de mi localidad, Úbeda. En este
              puesto he llevado a cabo desde inventario y revisión de equipos hasta resolución de
              diversos problemas tanto de software o hardware, como en impresoras y las conexiones
              de red entre otros.
            </Text>
          </ExperienceParagraph>
        </ExperienceListDetail>

        <ExperienceListDetail>
          <Description>Abril - junio 2020: </Description>
          <ExperienceParagraph>
            <Text>
              Formación, mediante teletrabajo, con la empresa Soluciones Center SCA durante las
              prácticas (FCT) del CFGS DAW. Diversas tareas relacionadas con desarrollo web,
              hosting, resolución de problemas y actualización de mis conocimientos sobre WordPress
              y PrestaShop con nuevos cursos y tareas renovadas.
            </Text>
          </ExperienceParagraph>
        </ExperienceListDetail>

        <ExperienceListDetail>
          <Description>Noviembre 2018 - octubre 2019: </Description>
          <ExperienceParagraph>
            <Text>
              Trabajo como becario de la Fundación SEPI dentro del programa “Iniciación a la
              Empresa”, desde el 1 de noviembre de 2018 hasta el 31 de octubre de 2019. He aprendido
              muchísimo durante este año y algunas de las muchas tareas desarrolladas han sido:
              <details>
                <Summary>Más información</Summary>
                <ExperienceList>
                  <Li>- Administración de sistemas y redes.</Li>
                  <Li>- Mantenimiento de equipos e impresoras.</Li>
                  <Li>- Instalación de software y hardware.</Li>
                  <Li>- Administración de servidores.</Li>
                  <Li>- Inventario de equipos.</Li>
                  <Li>- Resolución de diversos problemas relacionados con equipos informáticos.</Li>
                </ExperienceList>
              </details>
            </Text>
          </ExperienceParagraph>
        </ExperienceListDetail>

        <ExperienceListDetail>
          <Description>Marzo – junio 2018: </Description>
          <ExperienceParagraph>
            <Text>
              Formación en centro de trabajo con Soluciones Center SCA (FCT) del CFGS ASIR.
              Aprendizaje sobre desarrollo de webs a través de los cms PrestaShop y WordPress.
              Recibí además una carta de recomendación de la empresa y dos certificados de
              especialista en PrestaShop y WordPress.
            </Text>
          </ExperienceParagraph>
        </ExperienceListDetail>
      </ExperienceList>
    </ExperienceSection>
  );
};

export default Experience;
