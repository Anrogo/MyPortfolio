import CalculatorImg from '@/assets/images/calculadora_python.webp';
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
        before: 'I have worked as a front-end developer for over three years at ',
        linkText: 'Pepper Financial Services Group',
        linkHref: 'https://pepperfinance.es',
        after:
          ', a multinational financial services company. I build web and mobile applications using modern technologies such as React, Angular, NextJS, and Ionic. My responsibilities include:',
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
        before: 'Previously, I worked as a back-end developer at ',
        linkText: 'Pepper Financial Services Group',
        linkHref: 'https://pepperfinance.es',
        after: ' for one year and three months. My responsibilities included:',
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
          'I completed my work placement (FCT) as part of my Higher Technician qualification in Multiplatform Application Development at ',
        linkText: 'VMLY&R',
        linkHref: 'https://www.vmlyr.com/es-es/spain',
        after: ', part of WPP and based at 26 Ríos Rosas Street in Madrid.',
      },
      detailsTitle: 'Responsibilities',
      details: [
        'Managing and cleaning files.',
        'Loading data with Microsoft Azure Storage Explorer and Hermes.',
        'Querying, extracting, and processing data in Oracle.',
        'Creating and modifying queries.',
        'Analysing and automating processes in Oracle.',
        'Running queries in Dynamics.',
        'Analysing, designing, and automating manual processes.',
      ],
    },
    {
      dates: 'February - March 2021:',
      description:
        'I worked as an IT technician for a company in my hometown of Úbeda. My work included carrying out equipment inventories and inspections, as well as troubleshooting software and hardware problems, printer faults, and network connectivity issues.',
    },
    {
      dates: 'April - June 2020:',
      description:
        'I completed my Web Application Development work placement (FCT) remotely with Soluciones Center SCA. My tasks involved web development, hosting, troubleshooting, and expanding my knowledge of WordPress and PrestaShop through courses and new assignments.',
    },
    {
      dates: 'November 2018 - October 2019:',
      description:
        'I worked as an intern with the SEPI Foundation as part of the “Introduction to Business” programme from 1 November 2018 to 31 October 2019. I learned a great deal during that year. My responsibilities included:',
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
        'I completed my work placement (FCT) for my Networked Computer Systems Administration qualification at Soluciones Center SCA, where I learned to build websites with PrestaShop and WordPress. I also received a letter of recommendation and specialist certificates in both platforms.',
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
        'Mobile and web app for Pepper customers. It enables customers to manage their products, details and documentation, as well as access enhanced features.',
      detailsTitle: 'Details',
      details: [
        'Built with React, Ionic, and TypeScript.',
        'Created in June 2025.',
        'Optimised for mobile devices with Ionic. Available for both Android and iOS.',
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
        'Responsive web application for Pepper customers. It enables customers to take out new products, such as personal loans, or refinance existing loans.',
      detailsTitle: 'Details',
      details: [
        'Created with React, NextJS, and TypeScript.',
        'Created in September 2023.',
        'Optimised for mobile devices with a carefully crafted responsive design.',
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
        'Optimised for mobile devices with Ionic. Available for both Android and iOS.',
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
        'Fully responsive single-page web application for Pepper customers. It allows them to repay outstanding balances, make early payments, or check upcoming payments.',
      detailsTitle: 'Details',
      details: [
        'Built with React and TypeScript.',
        'Created in February 2023.',
        'Optimised for mobile devices with a carefully crafted responsive design.',
        'I substantially refactored it in 2025, adding new features and performance improvements.',
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
        {
          before: 'Published until 2026 at https://antonioweb.es, and now hosted on ',
          linkText: 'Vercel',
          linkHref: 'https://portfolio-web-lake-tau.vercel.app',
          after: ' (View the old version on Vercel).',
        },
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
        'My final project for the Higher Technician qualification in Web Application Development at IES Virgen del Carmen (Jaén), completed during the 2019/20 academic year.',
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
        alt: 'ARGaming blog cover image',
        className: 'argamingImg',
      },
    },
    {
      title: 'HealthyCook App',
      description:
        'UI/UX design for a healthy cooking mobile app. Created as part of the User Interface Development and User Experience coursework in the second year of the Multiplatform Application Development programme.',
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
        title: 'Preview of the HealthyCook App prototype in Figma',
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
      description: 'Baccalaureate in Science and Technology, completed at IES Los Cerros in Úbeda.',
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
