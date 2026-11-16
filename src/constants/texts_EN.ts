import CalculatorImg from '@/assets/images/calculadora_python.png';
import PepperClientesImg from '@/assets/images/pepper-clientes-web.webp';
import PepperComerciosImg from '@/assets/images/pepper-comercios-web.webp';
import ArgamingImg from '@/assets/images/portada_argaming.webp';
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
  myName: 'Hi, I am Antonio Rodríguez González',
  myPosition: 'Frontend Developer',
  myDescription: 'Passionate about the world of programming and new technologies',
  profileImageAlt: "Antonio's profile photo",
};

export const AboutMeTexts: AboutMeText = {
  title: 'About me',
  description:
    'I am a developer from Jaén with experience in both frontend and backend development, specialised in web and mobile applications. I am currently part of the frontend team. Previously, I worked on the backend at the same company, Pepper. I am detail-oriented, organised and independent, as well as collaborative and dynamic. It is also worth mentioning that I am passionate about technology and sport.',
  imageAlt: 'Person using a computer',
};

export const ExperienceTexts: ExperienceText = {
  title: 'Professional Experience',
  jobs: [
    {
      dates: 'September 2023 - Present:',
      linkDescription: {
        before: 'I have worked as a frontend developer for over 3 years at ',
        linkText: 'Pepper Financial Services Group',
        linkHref: 'https://pepperfinance.es',
        after:
          ', a multinational financial services company. I build web and mobile applications using modern technologies such as React, Angular, Next.js, and Ionic. My responsibilities include:',
      },
      detailsTitle: 'Responsibilities',
      details: [
        'Building user interfaces for a range of products.',
        'Improving functionality and design to enhance the user experience (UX/UI).',
        'Testing and validating features to ensure performance and stability.',
        'Collaborating with cross-functional teams in agile environments.',
        'Maintaining and continuously improving applications.',
      ],
    },
    {
      dates: 'June 2022 - September 2023:',
      linkDescription: {
        before: 'Previously, I also worked as a backend developer at ',
        linkText: 'Pepper Financial Services Group',
        linkHref: 'https://pepperfinance.es',
        after: ' for 1 year and 3 months. My responsibilities included:',
      },
      detailsTitle: 'Responsibilities',
      details: [
        'Working with SQL Server.',
        'Writing PL/SQL code.',
        'Troubleshooting a range of issues.',
        'Creating, modifying, and updating queries and stored procedures.',
        'Testing and validating scripts.',
        'Automating processes.',
        'Updating and improving internal applications.',
        'Integrating new merchants and their plugins into the e-commerce platform.',
      ],
    },
    {
      dates: 'March - June 2022:',
      linkDescription: {
        before:
          'My work placement (FCT) for the Higher Vocational Degree in Multiplatform Application Development was completed at ',
        linkText: 'VMLY&R',
        linkHref: 'https://www.vmlyr.com/es-es/spain',
        after: ', part of WPP and located at 26 Ríos Rosas Street, Madrid.',
      },
      detailsTitle: 'Responsibilities',
      details: [
        'Managing and cleaning files.',
        'Loading data with Microsoft Azure Storage Explorer and Hermes.',
        'Querying, extracting, and processing data in Oracle.',
        'Creating and modifying queries.',
        'Analyzing and automating processes in Oracle.',
        'Running queries in Dynamics.',
        'Analyzing, designing, and automating manual processes.',
      ],
    },
    {
      dates: 'February - March 2021:',
      description:
        'I worked as an IT technician for a company in my hometown of Úbeda. My work ranged from inventorying and inspecting equipment to troubleshooting software and hardware issues, printers, and network connections.',
    },
    {
      dates: 'April - June 2020:',
      description:
        'I completed my Web Application Development work placement (FCT) remotely with Soluciones Center SCA. My tasks involved web development, hosting, troubleshooting, and expanding my WordPress and PrestaShop knowledge through courses and new assignments.',
    },
    {
      dates: 'November 2018 - October 2019:',
      description:
        'I worked as a SEPI Foundation intern in the “Introduction to Business” program, from November 1, 2018, to October 31, 2019. I learned a great deal during that year. Some of my responsibilities included:',
      detailsTitle: 'Responsibilities',
      details: [
        'Administering systems and networks.',
        'Maintaining computers and printers.',
        'Installing software and hardware.',
        'Administering servers.',
        'Taking inventory of computer equipment and networks.',
        'Troubleshooting computer, printer, and network issues.',
      ],
    },
    {
      dates: 'March - June 2018:',
      description:
        'I completed my work placement (FCT) for the Networked Computer Systems Administration degree at Soluciones Center SCA, where I learned to build websites with PrestaShop and WordPress. I also received a letter of recommendation and specialist certificates in both platforms.',
    },
  ],
};

export const ProjectsTexts: ProjectsText = {
  title: 'Featured Projects',
  detailsLabel: 'Details',
  projects: [
    {
      title: 'Pepper Customers',
      description:
        'Mobile and web application for Pepper customers. It allows them to manage their products, personal information, and documents, as well as access improved benefits.',
      detailsTitle: 'Details',
      details: [
        'Built with React, Ionic, and TypeScript.',
        'Created in June 2025.',
        'Optimized for mobile devices with Ionic. Available for both Android and iOS.',
        {
          before: 'Currently available at: ',
          linkText: 'Pepper Customers web',
          linkHref: 'https://pepperclientes.pepperfinance.es',
          after: '.',
        },
      ],
      media: {
        type: 'image',
        src: PepperClientesImg,
        width: 640,
        height: 360,
        alt: 'Pepper Customers web app home screen',
        className: 'pepperClientesImg',
      },
    },
    {
      title: 'Pepper Cross-Selling Landing',
      description:
        'Responsive web application for Pepper customers. It allows access and contracting of new products such as personal loans or refinancing of other existing loans.',
      detailsTitle: 'Details',
      details: [
        'Created with React, NextJS, and Typescript.',
        'Created in September 2023.',
        'Optimized for mobile devices with a carefully crafted responsive design.',
        'Refactored and improved in 2026 to add refinancing options when an application for a new product is declined.',
        'Access requires a link sent by SMS. It contains a verified token that is valid only for the preselected customer.',
      ],
    },
    {
      title: 'Pepper Merchants',
      description:
        'Mobile and web application for Pepper merchants. It allows merchants to manage their products, loans, and customers, as well as access statistics and reports.',
      detailsTitle: 'Details',
      details: [
        'Built with React, Ionic, and TypeScript.',
        'Created in July 2023.',
        'Optimized for mobile devices with Ionic. Available for both Android and iOS.',
        {
          before: 'Currently available at: ',
          linkText: 'Pepper Merchants web',
          linkHref: 'https://peppercomercios.pepperfinance.es',
          after: '.',
        },
      ],
      media: {
        type: 'image',
        src: PepperComerciosImg,
        width: 640,
        height: 360,
        alt: 'Pepper Merchants web app home screen',
        className: 'pepperComerciosImg',
      },
    },
    {
      title: 'Pepper Payment Landing',
      description:
        'Fully responsive single-page web application for Pepper customers. It allows them to access and pay outstanding debt, make early payments, or check upcoming payments.',
      detailsTitle: 'Details',
      details: [
        'Built with React and TypeScript.',
        'Created in February 2023.',
        'Optimized for mobile devices with a carefully crafted responsive design.',
        'I extensively refactored it in 2025, adding new features and performance improvements.',
        'Access requires a link sent by SMS or through the Pepper Customers app. The link contains a verified token that is valid only for a specific customer.',
      ],
    },
    {
      title: 'My Previous Portfolio',
      description:
        'Created in November 2021 and updated over the following years, it reflects my beginnings as a web developer and my first attempt to present myself professionally with a modern, fluid design.',
      detailsTitle: 'Details',
      detailsDescription:
        'My current portfolio is a modern, minimalist redesign of this one. Highlights of the previous portfolio:',
      details: [
        'Built with HTML, CSS, and JavaScript, with PHP handling contact form emails.',
        'Created on November 18, 2021.',
        'Published at https://antonioweb.es until 2026.',
        {
          before: 'GitHub: ',
          linkText: 'portfolio v1',
          linkHref: 'https://github.com/Anrogo/Web-Portfolio',
          after: '',
        },
      ],
    },
    {
      title: 'Blog Argaming',
      description:
        'My final project for the Higher Vocational Degree in Web Application Development at IES Virgen del Carmen (Jaén), completed during the 2019/20 academic year.',
      detailsTitle: 'Details',
      details: [
        'Languages: HTML, CSS, JavaScript, and PHP. PHP framework: CodeIgniter 3.1.',
        'Created in June 2020.',
        'Last updated in November 2021.',
        {
          before: 'GitHub: ',
          linkText: 'Argaming blog',
          linkHref: 'https://github.com/Anrogo/Proyecto-final-DAW---ARGaming',
          after: '',
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
        'UI/UX design for a healthy cooking mobile app. Created as part of the User Interface Development and User Experience coursework in the second year of the Multiplatform Application Development program.',
      detailsTitle: 'Details',
      details: [
        'Software: designed in Figma.',
        'Created on December 5, 2021.',
        {
          before: 'Figma: ',
          linkText: 'HealthyCook App',
          linkHref:
            'https://www.figma.com/proto/EUhjwcPGLIoAh10vOgVlHZ/Mockups-Healthycook-App?node-id=34%3A124&scaling=scale-down&page-id=0%3A1&starting-point-node-id=34%3A124',
          after: '',
        },
      ],
      media: {
        type: 'iframe',
        src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEUhjwcPGLIoAh10vOgVlHZ%2FMockups-Healthycook-App%3Fnode-id%3D34%253A124%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D34%253A124',
        title: 'Vista previa del prototipo HealthyCook App en Figma',
      },
    },
    {
      title: 'My Calculator',
      description: {
        before:
          'A basic calculator built with Python and its Tkinter GUI library. I created it while taking this Udemy course: ',
        linkText: 'Universidad Python 2021 - POO, Tkinter, Django, Flask y más',
        linkHref:
          'https://www.udemy.com/course/universidad-python-desde-cero-hasta-experto-django-flask-rest-web/',
        after: ' (47 h).',
      },
      detailsTitle: 'Details',
      details: [
        'Language: Python.',
        'IDE: PyCharm.',
        'Created on January 15, 2022.',
        {
          before: 'GitHub: ',
          linkText: 'calculator',
          linkHref: 'https://github.com/Anrogo/Python-Curse/tree/master/Tkinter/Calculadora',
          after: '',
        },
      ],
      media: {
        type: 'image',
        src: CalculatorImg,
        width: 300,
        height: 300,
        alt: 'Calculator built with Python and Tkinter',
      },
    },
  ],
};

export const EducationTexts: EducationText = {
  title: 'Education',
  education: [
    {
      dates: '2020-2022:',
      description:
        'Higher Technician qualification in Multiplatform Application Development, completed at CEV - School of Communication, Image and Sound in Madrid.',
    },
    {
      dates: '2019-2020:',
      description:
        'Higher Technician qualification in Web Application Development, completed at IES Virgen del Carmen in Jaén.',
    },
    {
      dates: '2016-2018:',
      description:
        'Higher Technician qualification in Networked Computer Systems Administration, completed at IES Los Cerros in Úbeda.',
    },
    {
      dates: '2012-2014:',
      description: 'Science and Technology Baccalaureate, completed at IES Los Cerros in Úbeda.',
    },
  ],
};

export const NavBarLinkTexts: NavBarLinkText = {
  experience: 'Experience',
  projects: 'Projects',
  education: 'Education',
};

export const UiTexts: UiText = {
  changeLanguage: 'Change language',
  currentLanguage: 'Current language',
  spanish: 'Spanish',
  english: 'English',
  activateDarkMode: 'Turn on dark mode',
  activateLightMode: 'Turn on light mode',
  backToTop: 'Back to top',
};
