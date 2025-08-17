import { Description, Subtitle, Text } from '@/styles/GlobalStyle';
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
          <Description>Septiembre 2023 - actualidad: </Description>
          <ExperienceParagraph>
            <Text>
              Trabajo de desarrollador frontend en{' '}
              <a href="https://pepperfinance.es" target="_blank">
                Pepper Financial Services Group
              </a>{' '}
              que es una multinacional del mundo financiero situada en Juan Esplandiu 13, Madrid.
              Aquí desarrollo labores como:
              <ExperienceList>
                <li>
                  - Desarrollo y programación de interfaces de usuario para diferentes aplicativos.
                </li>
                <li>
                  {' '}
                  - Implementación de mejoras en funcionalidades y diseño para optimizar la
                  experiencia del usuario.
                </li>
                <li>
                  - Uso de tecnologías como React, Angular, Next.js e Ionic para construir
                  aplicaciones modernas y eficientes.
                </li>
                <li>
                  {' '}
                  - Realización de pruebas y validaciones para asegurar el correcto funcionamiento y
                  rendimiento de las aplicaciones.
                </li>
                <li>
                  - Colaboración con equipos multidisciplinarios para entregar soluciones de alta
                  calidad.
                </li>
                <li>
                  - Mantenimiento y actualización continua de las aplicaciones para adaptarse a
                  nuevas necesidades y tecnologías.
                </li>
              </ExperienceList>
            </Text>
          </ExperienceParagraph>
        </ExperienceListDetail>

        <ExperienceListDetail>
          <Description>Junio 2022 - septiembre 2023: </Description>
          <ExperienceParagraph>
            <Text>
              Previamente también trabajé como desarrollador de backend en{' '}
              <a href="https://pepperfinance.es" target="_blank">
                Pepper Financial Services Group
              </a>
              . Desempeñando las siguiente labores en el equipo de mantenimiento:
              <ExperienceList>
                <li>- Uso de SQL Server.</li>
                <li>- Programación con PL/SQL.</li>
                <li>- Resolución de incidencias de diversa tipología.</li>
                <li>
                  - Creación, modificación y actualización de queries o procedimientos almacenados.
                </li>
                <li>- Pruebas de valicaciones de los scripts.</li>
                <li>- Automatización de procesos.</li>
                <li>- Actualización y mejora de los aplicativos internos.</li>
                <li>
                  - Integración de nuevos comercios y sus plugins en la plataforma de Ecommerce.
                </li>
              </ExperienceList>
            </Text>
          </ExperienceParagraph>
        </ExperienceListDetail>

        <ExperienceListDetail>
          <Description>Marzo - junio 2022: </Description>
          <ExperienceParagraph>
            <Text>
              Las prácticas, o FCT, del Grado Superior de DAM. Completada en la empresa{' '}
              <a href="https://www.vmlyr.com/es-es/spain" target="_blank">
                VMLY&R
              </a>
              , del grupo WPP, situado en Ríos Rosas 26, Madrid. Como data trainee he desempeñado
              las siguiente labores:
              <ExperienceList>
                <li>- Manejo y limpieza de ficheros.</li>
                <li>- Carga de datos a través de Microsoft Azure Storage Explore y Hermes.</li>
                <li>- Consulta, extracción y procesamiento de datos en Oracle.</li>
                <li>- Creación y/o modificación de queries.</li>
                <li>- Análisis y automatización de procesos en Oracle.</li>
                <li>- Realización de consultas en Dynamics.</li>
                <li>- Análisis, diseño y automatización de procesos manuales.</li>
              </ExperienceList>
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
              <ExperienceList>
                <li>- Administración de sistemas y redes.</li>
                <li>- Mantenimiento de equipos e impresoras</li>
                <li>- Instalación de software y hardware</li>
                <li>- Administración de servidores</li>
                <li>- Inventario de equipos</li>
                <li>- Resolución de diversos problemas derivados de equipos informáticos</li>
              </ExperienceList>
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
