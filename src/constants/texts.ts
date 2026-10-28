import { ExperienceText } from '@/interfaces/Text';

export const HomeTexts = {
  myName: 'Antonio Rodríguez González',
  myPosition: 'Desarrollador Frontend',
  myDescription: 'Apasionado por el mundo de la programación y las nuevas tecnologías',
};

export const AboutMeTexts = {
  description:
    'Soy un programador con experiencia en desarrollo frontend y backend, especializado en aplicaciones web y móviles. Actualmente formo parte del equipo de frontend, tras haber trabajado en backend en la misma empresa, Pepper. Me caracterizo por ser detallista, organizado e independiente, además de colaborativo y dinámico. Cabe añadir que soy una persona apasasionada por la tecnología y también por el deporte siempre que saco un hueco.',
};

export const ExperienceTexts: ExperienceText = {
  title: 'Experiencia profesional',
  jobs: [
    {
      dates: 'Septiembre 2023 - Actualidad:',
      linkDescription: {
        before: 'Llevo más de 3 años trabajando como desarrollador frontend en ',
        linkText: 'Pepper Financial Services Group',
        linkHref: 'https://pepperfinance.es',
        after:
          ', multinacional del sector financiero. Desarrollo aplicaciones web y móviles con tecnologías modernas como React, Angular, Next.js o Ionic.',
      },
      detailsTitle: 'Detalles',
      details: [
        'Implementación de interfaces de usuario para diferentes productos.',
        'Optimización de funcionalidades y diseño para mejorar la experiencia de usuario (UX/UI).',
        'Pruebas y validaciones para garantizar rendimiento y estabilidad.',
        'Colaboración con equipos multidisciplinares en entornos ágiles.',
        'Mantenimiento y evolución continua de las aplicaciones.',
      ],
    },
    {
      dates: 'Junio 2022 - septiembre 2023:',
      linkDescription: {
        before: 'Previamente también trabajé como desarrollador de backend en ',
        linkText: 'Pepper Financial Services Group',
        linkHref: 'https://pepperfinance.es',
        after: ' durante 1 año y 3 meses.',
      },
      detailsTitle: 'Detalles',
      details: [
        'Uso de SQL Server.',
        'Programación con PL/SQL.',
        'Resolución de incidencias de diversa tipología.',
        'Creación, modificación y actualización de queries o procedimientos almacenados.',
        'Pruebas de validaciones de los scripts.',
        'Automatización de procesos.',
        'Actualización y mejora de los aplicativos internos.',
        'Integración de nuevos comercios y sus plugins en la plataforma de Ecommerce.',
      ],
    },
    {
      dates: 'Marzo - junio 2022:',
      linkDescription: {
        before: 'Las prácticas, o FCT, del Grado Superior de DAM. Completada en la empresa ',
        linkText: 'VMLY&R',
        linkHref: 'https://www.vmlyr.com/es-es/spain',
        after: ', del grupo WPP, situado en Ríos Rosas 26, Madrid.',
      },
      detailsTitle: 'Detalles',
      details: [
        'Manejo y limpieza de ficheros.',
        'Carga de datos a través de Microsoft Azure Storage Explorer y Hermes.',
        'Consulta, extracción y procesamiento de datos en Oracle.',
        'Creación y/o modificación de queries.',
        'Análisis y automatización de procesos en Oracle.',
        'Realización de consultas en Dynamics.',
        'Análisis, diseño y automatización de procesos manuales.',
      ],
    },
    {
      dates: 'Febrero - marzo 2021:',
      description:
        'He trabajado como técnico de informática en un empresa de mi localidad, Úbeda. En este puesto he llevado a cabo desde inventario y revisión de equipos hasta resolución de diversos problemas tanto de software o hardware, como en impresoras y las conexiones de red entre otros.',
    },
    {
      dates: 'Abril - junio 2020:',
      description:
        'Formación, mediante teletrabajo, con la empresa Soluciones Center SCA durante las prácticas (FCT) del CFGS DAW. Diversas tareas relacionadas con desarrollo web, hosting, resolución de problemas y actualización de mis conocimientos sobre WordPress y PrestaShop con nuevos cursos y tareas renovadas.',
    },
    {
      dates: 'Noviembre 2018 - octubre 2019:',
      description:
        'Trabajo como becario de la Fundación SEPI dentro del programa “Iniciación a la Empresa”, desde el 1 de noviembre de 2018 hasta el 31 de octubre de 2019. He aprendido muchísimo durante este año y algunas de las muchas tareas desarrolladas han sido:',
      detailsTitle: 'Detalles',
      details: [
        'Administración de sistemas y redes.',
        'Mantenimiento de equipos e impresoras.',
        'Instalación de software y hardware.',
        'Administración de servidores.',
        'Inventario de todos los equipos informáticos y redes.',
        'Resolución de diversos problemas relacionados con equipos informáticos, impresoras y redes.',
      ],
    },
    {
      dates: 'Marzo - junio 2018: ',
      description:
        'Formación en centro de trabajo con Soluciones Center SCA (FCT) del CFGS ASIR. Aprendizaje sobre desarrollo de webs a través de los cms PrestaShop y WordPress. Recibí además una carta de recomendación de la empresa y dos certificados de especialista en PrestaShop y WordPress.',
    },
  ],
};
