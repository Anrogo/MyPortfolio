import CalculatorImg from '@/assets/images/calculadora_python.webp';
import NetJobHome from '@/assets/images/netjob-home.webp';
import PepperImg1 from '@/assets/images/pepper-1.jpg';
import PepperImg2 from '@/assets/images/pepper-2.jpg';
import PepperClientesImg from '@/assets/images/pepper-clientes-web.webp';
import PepperComerciosImg from '@/assets/images/pepper-comercios-web.webp';
import ArgamingImg from '@/assets/images/portada_argaming.webp';
import OldPortfolioImg from '@/assets/images/portfolio-web-viejo.webp';
import YourEventsAppImg from '@/assets/images/your-events-app.webp';
import type {
  AboutMeText,
  CourseText,
  EducationText,
  ExperienceText,
  HomeText,
  NavBarLinkText,
  ProjectsText,
  UiText,
} from '@/interfaces/Text';

export const HomeTexts: HomeText = {
  myName: 'Antonio Rodríguez González',
  myPosition: 'Frontend Developer | React, Angular and TypeScript',
  myDescription: 'Passionate about programming and new technologies',
  profileImageAlt: "Antonio's profile photo",
};

export const AboutMeTexts: AboutMeText = {
  title: 'About me',
  description:
    'Frontend developer specialised in React, Angular and TypeScript, with experience in financial environments, backend development and data analysis. I combine attention to detail with an end-to-end mindset to build reliable solutions in Scrum teams, from the development phase through to production.',
  imageAlt: 'Person using a computer',
};

export const ExperienceTexts: ExperienceText = {
  title: 'Professional Experience',
  jobs: [
    {
      title: 'Frontend Developer',
      company: 'Pepper Financial Services Group',
      dates: 'September 2023 - Present',
      linkDescription: {
        before: 'I work as a frontend developer at ',
        linkText: 'Pepper Financial Services Group',
        linkHref: 'https://pepperfinance.es',
        after:
          ', in the financial sector. I develop web and mobile applications and collaborate with agile teams throughout the full cycle, from implementation to production deployments. My responsibilities include:',
      },
      detailsTitle: 'Responsibilities',
      details: [
        'Developing financial applications with React, Angular, Next.js and TypeScript.',
        'Designing responsive interfaces and reusable components from Figma designs.',
        'Developing modular architectures with Nx, Module Federation and Vite.',
        'Managing state with Redux, Context API and custom hooks.',
        'Optimising client-side performance and improving accessibility with WCAG and ARIA.',
        'Integrating REST APIs and synchronising real-time data through WebSockets.',
        'Creating and maintaining unit, integration and E2E tests with Vitest, Jest, React Testing Library and Cypress.',
        'Participating in Azure pipelines and deployments, and analysing user behaviour with Microsoft Clarity.',
      ],
    },
    {
      title: 'Backend Developer',
      company: 'Pepper Financial Services Group',
      dates: 'June 2022 - September 2023',
      linkDescription: {
        before: 'Previously, I worked as a back-end developer at ',
        linkText: 'Pepper Financial Services Group',
        linkHref: 'https://pepperfinance.es',
        after: ' for one year and three months, developing business logic and supporting internal applications. My responsibilities included:',
      },
      detailsTitle: 'Responsibilities',
      details: [
        'Programming business logic in SQL Server using T-SQL.',
        'Designing and optimising complex queries to manipulate and extract data.',
        'Automating internal processes and testing scripts.',
        'Analysing and resolving backend incidents and improving internal applications.',
        'Integrating financing plugins into e-commerce platforms.',
      ],
    },
    {
      title: 'Data Analyst (Intern)',
      company: 'VMLY&R',
      dates: 'March - June 2022',
      linkDescription: {
        before:
          'I completed my Higher Technician internship in Multiplatform Application Development at ',
        linkText: 'VMLY&R',
        linkHref: 'https://www.vmlyr.com/es-es/spain',
        after: ', working with Oracle, Microsoft Dynamics and data processes.',
      },
      detailsTitle: 'Responsibilities',
      details: [
        'Querying, extracting and processing data in Oracle and Microsoft Dynamics.',
        'Automating tasks with Python to manage files, queries and processes in Oracle (PL/SQL).',
        'Cleaning and preparing files for database imports using Azure Storage Explorer.',
      ],
    },
    {
      title: 'IT Technician',
      company: 'Ferretería Ubetense',
      dates: 'February - March 2021',
      description:
        'I worked as an IT technician for a company in my hometown of Úbeda. My work included carrying out equipment inventories and inspections, as well as troubleshooting software and hardware problems, printer faults, and network connectivity issues.',
    },
    {
      title: 'Internship - Web App Development',
      company: 'Soluciones Center SCA',
      dates: 'April - June 2020',
      description:
        'I completed my Web Application Development internship remotely with Soluciones Center SCA. My tasks involved web development, hosting, troubleshooting, and expanding my knowledge of WordPress and PrestaShop through courses and new assignments.',
    },
    {
      title: 'IT Systems Intern',
      company: 'Cetarsa SA',
      dates: 'November 2018 - October 2019',
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
      title: 'Internship - Networked Systems Administration',
      company: 'Soluciones Center SCA',
      dates: 'March - June 2018',
      description:
        'I completed my internship for my Networked Computer Systems Administration qualification at Soluciones Center SCA, where I learned to build websites with PrestaShop and WordPress. I also received a letter of recommendation and specialist certificates in both platforms.',
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
      media: {
        type: 'image',
        src: PepperImg2,
        width: 640,
        height: 360,
        alt: 'Screenshot of Pepper Cross-Selling Landing',
        className: 'pepperComerciosImg',
      },
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
      media: {
        type: 'image',
        src: PepperImg1,
        width: 640,
        height: 360,
        alt: 'Screenshot of Pepper Payment Landing',
        className: 'pepperComerciosImg',
      },
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
          after: ' (Click to visit the new link).',
        },
        {
          before: 'GitHub: ',
          linkText: 'portfolio v1',
          linkHref: 'https://github.com/Anrogo/Web-Portfolio',
          after: '.',
        },
      ],
      media: {
        type: 'image',
        src: OldPortfolioImg,
        width: 600,
        height: 300,
        alt: 'Cover image of Antonio’s previous portfolio website',
        className: 'portfolioImg',
      },
    },
    {
      title: 'NetJob',
      description:
        'This was my team final project for the Higher Technician qualification in Multiplatform Application Development at CEV - Higher School of Audiovisual Communication, 3D Animation and New Technologies.',
      detailsTitle: 'Details',
      details: [
        'Languages: Java and TypeScript.',
        'Frameworks: Spring Boot (backend) and Angular (frontend).',
        'Created between February and May 2022.',
        'Authors: Antonio Rodríguez González, José Carlos, Juanpe, Kevin, Jorge, Álex, Oleksandra, Santi and Leire.',
        {
          before: 'GitHub: ',
          linkText: 'NetJob repository',
          linkHref: 'https://github.com/jose1182/Frontend-Web',
          after: '.',
        },
        {
          before: 'Watch our demo on YouTube: ',
          linkText: 'NetJob video',
          linkHref: 'https://youtu.be/XimVF6XPrTE',
          after: '.',
        },
      ],
      media: {
        type: 'image',
        src: NetJobHome,
        width: 606,
        height: 282,
        alt: 'NetJob cover image',
        className: 'NetJobImg',
      },
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
      title: 'My Own Calculator',
      description: {
        before:
          'A basic calculator built with Python and its Tkinter GUI library. I created it while taking this Udemy course: ',
        linkText: 'Python University 2021 - POO, Tkinter, Django, Flask and more',
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
      title: 'Your Events App',
      description:
        'An application based on an event agenda design. It includes the event location, date and time, and a defining title. It was a class exercise where we practised designing multiple screens, sharing data between them, and integrating and using maps.',
      detailsTitle: 'Details',
      details: [
        'Languages: Java and XML.',
        'IDE: Android Studio.',
        'Created on December 4, 2020.',
        {
          before: 'App presentation: ',
          linkText: 'YourEvents',
          linkHref: '#',
          after: '.',
        },
      ],
      media: {
        type: 'image',
        src: YourEventsAppImg,
        width: 240,
        height: 426,
        alt: 'YourEvents app',
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

export const CoursesTexts: CourseText = {
  title: 'Advanced training – courses',
  courses: [
    {
      date: '2022',
      description: 'Spring University 2021 - Spring Framework and Spring Boot (74 h)'
    },
    {
      date: '2022',
      description: 'Python University 2021 - POO, Tkinter, Django, Flask and more (47 h)'
    },
    {
      date: '2020',
      description: 'Master’s in Full-Stack Web Development: Angular, Node, Laravel, Symfony (34 hours)'
    },
    {
      date: '2020',
      description: 'Bootstrap course (4 h)'
    },
    {
      date: '2020',
      description: 'Bootstrap 4 course: responsive design and layout (12 h)'
    },
    {
      date: '2020',
      description: 'CodeIgniter 3 course (for the final project of DAW - 10 h)'
    },
    {
      date: '2020',
      description: 'Professional JavaScript course (30 h)'
    },
    {
      date: '2019',
      description: 'HTML5 and CSS3 course (10 h)'
    },
    {
      date: '2018',
      description: 'CCNA Switching & Routing: Basic principles of routing and switching.'
    },
    {
      date: '2018',
      description: 'Cisco Networking Academy Cybersecurity Essentials.'
    },
    {
      date: '2018',
      description: 'Cisco Networking Academy Introduction to Cybersecurity.'
    },
    {
      date: '2017',
      description: 'CCNA Switching & Routing: Introduction to networking.'
    },
  ]
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
