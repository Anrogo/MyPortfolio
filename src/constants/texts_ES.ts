import CalculatorImg from '@/assets/images/calculadora_python.png';
import PepperClientesImg from '@/assets/images/pepper-clientes-web.webp';
import PepperComerciosImg from '@/assets/images/pepper-comercios-web.webp';
import ArgamingImg from '@/assets/images/portada_argaming.png';
import type {
  AboutMeText,
  EducationText,
  ExperienceText,
  HomeText,
  NavBarLinkText,
  ProjectsText,
  UiText,
} from '@/interfaces/Text';

export const HomeTexts: HomeText = {
  myName: 'Hola, soy Antonio Rodríguez González',
  myPosition: 'Desarrollador Frontend',
  myDescription: 'Apasionado por el mundo de la programación y las nuevas tecnologías',
  profileImageAlt: 'Foto de perfil de Antonio',
};

export const AboutMeTexts: AboutMeText = {
  title: 'Sobre mí',
  description:
    'Soy un programador jienense con experiencia en desarrollo frontend y backend, especializado en aplicaciones web y móviles. Actualmente formo parte del equipo de frontend. Anteriormente trabajé en backend en la misma empresa, Pepper. Me caracterizo por ser detallista, organizado e independiente, además de colaborativo y dinámico. Cabe añadir que soy una persona apasionada por la tecnología y también por el deporte.',
  imageAlt: 'Persona usando un ordenador',
};

export const ExperienceTexts: ExperienceText = {
  title: 'Experiencia profesional',
  jobs: [
    {
      dates: 'Septiembre 2023 - actualidad:',
      linkDescription: {
        before: 'Llevo más de 3 años trabajando como desarrollador frontend en ',
        linkText: 'Pepper Financial Services Group',
        linkHref: 'https://pepperfinance.es',
        after:
          ', multinacional del sector financiero. Desarrollo aplicaciones web y móviles con tecnologías modernas como React, Angular, Next.js o Ionic. Funciones que realizo:',
      },
      detailsTitle: 'Detalles',
      details: [
        'Implementación de interfaces de usuario para diferentes productos.',
        'Optimización de funcionalidades y diseño para mejorar la experiencia de usuario (UX/UI).',
        'Pruebas y validaciones para garantizar rendimiento y estabilidad.',
        'Colaboración con equipos multidisciplinares en entornos ágiles.',
        'Mantenimiento y evolución continua de las distintas aplicaciones.',
      ],
    },
    {
      dates: 'Junio 2022 - septiembre 2023:',
      linkDescription: {
        before: 'Previamente también trabajé como desarrollador de backend en ',
        linkText: 'Pepper Financial Services Group',
        linkHref: 'https://pepperfinance.es',
        after: ' durante 1 año y 3 meses. Funciones que llevaba a cabo: ',
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
        'He trabajado como técnico de informática en una empresa de mi localidad, Úbeda. En este puesto he llevado a cabo el inventario y revisión de equipos. También me he encargado de la resolución de diversos problemas tanto de software o hardware, como en impresoras y las conexiones de red entre otros.',
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

export const ProjectsTexts: ProjectsText = {
  title: 'Proyectos destacados',
  detailsLabel: 'Detalles',
  projects: [
    {
      title: 'Pepper Clientes',
      description:
        'Aplicación móvil y web para los clientes de Pepper. Permite a los clientes gestionar sus productos, datos y documentación, así como acceder a mejores prestaciones.',
      detailsTitle: 'Detalles',
      details: [
        'Creado con React, Ionic y Typescript.',
        'Fecha de creación: junio 2025.',
        'Adaptado a móviles mediante Ionic. Disponible tanto para Android como para iOS.',
        {
          before: 'Publicado actualmente en: ',
          linkText: 'Pepper Clientes web',
          linkHref: 'https://pepperclientes.pepperfinance.es',
          after: '.',
        },
      ],
      media: {
        type: 'image',
        src: PepperClientesImg,
        width: 640,
        height: 360,
        alt: 'Pantalla de inicio de la aplicación web Pepper Clientes',
        className: 'pepperClientesImg',
      },
    },
    {
      title: 'Landing de Venta Cruzada de Pepper',
      description:
        'Landing web de una única página para los clientes de Pepper. Permite acceder y contratar nuevos productos como préstamos personales o refinanciar otros préstamos existentes.',
      detailsTitle: 'Detalles',
      details: [
        'Creado con React, NextJS y Typescript.',
        'Fecha de creación: Septiembre 2023.',
        'Adaptado a móviles mediante un diseño responsive muy cuidado y optimizado.',
        'Fue refactorizada y mejorada en 2026 para añadir opciones de refinanciación en el caso de que se rechace la contratación de un nuevo producto.',
        'Para acceder es necesario un link que se envía en un sms. Este contiene un token verificado y válido solo para el cliente preseleccionado.',
      ],
    },
    {
      title: 'Pepper Comercios',
      description:
        'Aplicación móvil y web para comercios de Pepper. Permite a los comercios gestionar sus productos, préstamos y clientes, así como acceder a estadísticas y reportes',
      detailsTitle: 'Detalles',
      details: [
        'Creado con React, Ionic y Typescript.',
        'Fecha de creación: julio 2023.',
        'Adaptado a móviles mediante Ionic. Disponible tanto para Android como para iOS.',
        {
          before: 'Publicado actualmente en: ',
          linkText: 'Pepper Comercios web',
          linkHref: 'https://peppercomercios.pepperfinance.es',
          after: '.',
        },
      ],
      media: {
        type: 'image',
        src: PepperComerciosImg,
        width: 640,
        height: 360,
        alt: 'Pantalla de inicio de la aplicación web Pepper Comercios',
        className: 'pepperComerciosImg',
      },
    },
    {
      title: 'Landing de pagos de Pepper',
      description:
        'Landing web de una única página totalmente responsive para los clientes de Pepper. Permite acceder y abonar pagos de deuda pendiente, adelantar pagos o consultar sus pagos futuros.',
      detailsTitle: 'Detalles',
      details: [
        'Creado con React y Typescript.',
        'Fecha de creación: febrero 2023.',
        'Adaptado a móviles mediante un diseño responsive muy cuidado y optimizado.',
        'Fue refactorizada, por mi, en profundidad en 2025 además de incorporar nuevas funcionalidades y mejoras de rendimiento.',
        'Para acceder es necesario un link que se envía en un sms, o bien desde la app de Clientes. Este enlace contiene un token verificado y válido solo para un cliente concreto.',
      ],
    },
    {
      title: 'Mi antiguo portfolio web',
      description:
        'Creado en noviembre 2021 y actualizado durante los años posteriores. Refleja mis comienzos como desarrollador web y la búsqueda de mostrarme al mundo laboral con un diseño moderno y fluido.',
      detailsTitle: 'Detalles',
      detailsDescription:
        'Mi portfolio actual se basa en la renovación de este con un enfoque moderno y minimalista. Detalles a destacar del antiguo portfolio:',
      details: [
        'Creado exclusivamente con HTML, CSS y JS. Y con PHP para el envío de correos de contacto.',
        'Fecha de creación: 18 de noviembre de 2021.',
        'Publicado hasta 2026 en https://antonioweb.es.',
        {
          before: 'GitHub: ',
          linkText: 'portfolio v1',
          linkHref: 'https://github.com/Anrogo/Web-Portfolio',
          after: '.',
        },
      ],
    },
    {
      title: 'Blog Argaming',
      description:
        'Se trata de mi proyecto final para el Grado Superior de Desarrollo de Aplicaciones Web en el Instituto Virgen del Carmen (Jaén), del curso 2019/20.',
      detailsTitle: 'Detalles',
      details: [
        'Lenguaje/s: HTML, CSS, JS y PHP. Framework de PHP: CodeIgniter 3.1',
        'Fecha de creación: Junio 2020.',
        'Fecha última modificación: Noviembre 2021.',
        {
          before: 'GitHub: ',
          linkText: 'blog Argaming',
          linkHref: 'https://github.com/Anrogo/Proyecto-final-DAW---ARGaming',
          after: '.',
        },
      ],
      media: {
        type: 'image',
        src: ArgamingImg,
        width: 600,
        height: 300,
        alt: 'Portada del blog ARGaming',
        className: 'argamingImg',
      },
    },
    {
      title: 'HealthyCook App',
      description:
        'Diseño UI - UX para aplicación móvil de cocina saludable. Forma parte del ejercicio de la asignatura Desarrollo de Interfaces (UI) y Experiencia de Usuario (UX) de 2º DAM.',
      detailsTitle: 'Detalles',
      details: [
        'Software: desarrollado mediante la aplicación Figma.',
        'Fecha de creación: 5 de diciembre de 2021.',
        {
          before: 'Figma: ',
          linkText: 'HealthyCook App',
          linkHref:
            'https://www.figma.com/proto/EUhjwcPGLIoAh10vOgVlHZ/Mockups-Healthycook-App?node-id=34%3A124&scaling=scale-down&page-id=0%3A1&starting-point-node-id=34%3A124',
          after: '.',
        },
      ],
      media: {
        type: 'iframe',
        src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEUhjwcPGLIoAh10vOgVlHZ%2FMockups-Healthycook-App%3Fnode-id%3D34%253A124%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D34%253A124',
        title: 'Vista previa del prototipo HealthyCook App en Figma',
      },
    },
    {
      title: 'Mi propia calculadora',
      description: {
        before:
          'Aplicación de calculadora básica creada con Python y su librería gráfica Tkinter. La he realizado gracias al siguiente curso de Udemy: ',
        linkText: 'Universidad Python 2021 - POO, Tkinter, Django, Flask y más',
        linkHref:
          'https://www.udemy.com/course/universidad-python-desde-cero-hasta-experto-django-flask-rest-web/',
        after: ' (47 h).',
      },
      detailsTitle: 'Detalles',
      details: [
        'Lenguaje/s: Python.',
        'IDE: PyCharm.',
        'Fecha de creación: 15 de enero de 2022.',
        {
          before: 'GitHub: ',
          linkText: 'calculadora',
          linkHref: 'https://github.com/Anrogo/Python-Curse/tree/master/Tkinter/Calculadora',
          after: '.',
        },
      ],
      media: {
        type: 'image',
        src: CalculatorImg,
        width: 300,
        height: 300,
        alt: 'Calculadora con Python y Tkinter',
      },
    },
  ],
};

export const EducationTexts: EducationText = {
  title: 'Educación y estudios',
  education: [
    {
      dates: '2020-2022:',
      description:
        'CFGS Técnico Superior en Desarrollo de Aplicaciones Multiplataforma. En el CEV - Escuela Superior de Comunicación, Imagen y Sonido de Madrid.',
    },
    {
      dates: '2019-2020:',
      description:
        'CFGS Técnico Superior en Desarrollo de Aplicaciones Web. En el instituto IES Virgen del Carmen, Jaén.',
    },
    {
      dates: '2016-2018:',
      description:
        'CFGS Técnico Superior en Administración de Sistemas Informáticos en Red. En el instituto IES Los Cerros, Úbeda.',
    },
    {
      dates: '2012-2014:',
      description: 'Bachillerato científico-tecnológico. En el instituto IES Los Cerros, Úbeda',
    },
  ],
};

export const NavBarLinkTexts: NavBarLinkText = {
  experience: 'Experiencia',
  projects: 'Proyectos',
  education: 'Educación',
};

export const UiTexts: UiText = {
  changeLanguage: 'Cambiar idioma',
  currentLanguage: 'Idioma actual',
  spanish: 'español',
  english: 'inglés',
  activateDarkMode: 'Activar modo oscuro',
  activateLightMode: 'Activar modo claro',
  backToTop: 'Volver arriba',
};
