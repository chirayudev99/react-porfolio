import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    react_native,
    flutter,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    next,
    cling,
    applore,
    freelancer,
    vidfin,
    ascendion,
    innex,
    markmind,
    choicemonk,
    chauffeur,
    chatgpt,
    krypton,
    askchirayu
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
const services = [
  {
    title: "Modern Web Applications",
    icon: web,
  },
  {
    title: "Cross-Platform Mobile Apps",
    icon: mobile,
  },
  {
    title: "Scalable Backend & APIs",
    icon: backend,
  },
  {
    title: "GenAI & AI-Powered Solutions",
    icon: mobile,
  },
];
  
  const technologies = [
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "React Native",
    //   icon: react_native,
    // },
    {
      name: "Flutter",
      icon: flutter,
    },
    
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company_name: "Ascendion Digital Solutions Pvt. Ltd.",
    icon: ascendion,
    iconBg: "#E6DEDD",
    date: "Nov 2025 - Present",
    points: [
      "Led performance optimization and large-scale refactoring initiatives for an enterprise React application supporting Johnson & Johnson business workflows.",
      "Refactored complex modules into reusable hooks, utilities, helpers, and constants while optimizing state subscriptions with useMemo and useCallback, reducing module load times by 30-40% and improving overall application performance by 40%.",
      "Analyzed business requirements and Jira user stories, evaluated technical feasibility, identified implementation risks, and proposed scalable solutions aligned with product requirements.",
      "Collaborated with Business Analysts, QA, and distributed engineering teams to drive technical design, task breakdowns, testing strategy, and end-to-end feature delivery.",
      "Maintained 80%+ SonarQube coverage and resolved 100+ defects during release cycles, ensuring stable and regression-free enterprise deployments.",
    ],
  },

  {
    title: "Senior Frontend Engineer",
    company_name: "Innex.ai",
    icon: innex,
    iconBg: "#E6DEDD",
    date: "Apr 2024 - Sep 2025",
    points: [
      "Worked as a founding engineer, establishing frontend architecture, development workflows, reusable patterns, and engineering practices for a healthcare-focused GenAI product.",
      "Architected and developed complex React.js interfaces with Redux, Material UI, and CSS Modules, focusing on scalability, maintainability, and high-performance rendering.",
      "Engineered interactive data visualization dashboards using React ApexCharts and Cal-Heatmap, efficiently handling large datasets and complex user interactions.",
      "Designed advanced filtering workflows using memoization and lazy loading to minimize unnecessary computation, reduce rendering overhead, and improve responsiveness.",
      "Implemented scalable asynchronous state management using Redux, Redux Thunk, and Formik-based validation while collaborating directly with clients and cross-functional stakeholders.",
    ],
  },

  {
    title: "Next.js Developer",
    company_name: "Vidfin Technologies",
    icon: vidfin,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Jan 2024",
    points: [
      "Led frontend development for a stock-market education platform using Next.js, Bootstrap, Zustand, Firebase, and VdoCipher.",
      "Improved application performance by 50% through code splitting, lazy loading, prefetching, and rendering optimizations, significantly improving Lighthouse performance scores.",
      "Integrated VdoCipher for secure video streaming and implemented advanced video playback capabilities with custom controls.",
      "Implemented Firebase Dynamic Links and deep-linking workflows to provide seamless cross-device navigation and content sharing.",
      "Improved SEO and organic discoverability through server-side rendering and dynamically generated metadata across application pages.",
    ],
  },

  {
    title: "MERN Developer",
    company_name: "Applore Technologies",
    icon: applore,
    iconBg: "#E6DEDD",
    date: "May 2022 - Feb 2023",
    points: [
      "Architected and delivered SaaS MVPs for 5+ startups across e-commerce, healthcare, education, administration, and recommendation platforms using React.js, Node.js, TypeScript, GraphQL, and MongoDB.",
      "Led projects from technical planning and architecture through development, deployment, and production delivery while managing client communication and technical requirements.",
      "Mentored frontend developers through code reviews, technical guidance, task planning, and development best practices.",
      "Designed scalable REST and GraphQL APIs with Node.js and implemented maintainable backend architectures for data-intensive applications.",
      "Spearheaded a US-based healthcare application with HIPAA-compliant development practices and successfully completed HIPAA Associate certification.",
      "Delivered a critical client project 10 days ahead of schedule and received recognition for exceptional dedication and delivery.",
    ],
  },

  {
    title: "MERN Developer",
    company_name: "Cling Multi Solutions Pvt Ltd",
    icon: cling,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - May 2022",
    points: [
      "Developed and maintained 10+ production web applications using React.js, Node.js, Express.js, and MongoDB across multiple business domains.",
      "Implemented reusable frontend components, RESTful APIs, database integrations, and responsive interfaces while collaborating with cross-functional development teams.",
      "Diagnosed and resolved application issues, participated in debugging and code reviews, and contributed to improving overall application reliability.",
      "Collaborated closely with team members throughout development and delivery while following established engineering practices.",
      "Recognized as Employee of the Month twice for technical contribution, ownership, and delivery.",
    ],
  },

  {
    title: "Freelance MERN Developer",
    company_name: "Bespoke London Chauffeurs",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Jan 2021",
    points: [
      "Developed a full-stack chauffeur booking platform using React.js, Node.js, and MongoDB for a UK-based client.",
      "Integrated secure online payment processing and real-time geolocation APIs for live driver tracking, route estimation, and booking workflows.",
      "Designed a responsive, mobile-first interface optimized for consistent user experience across desktop and mobile devices.",
      "Implemented booking management, dynamic pricing, and automated booking confirmation workflows.",
      "Optimized backend APIs and database queries, reducing booking response time by approximately 35%.",
    ],
  },
];

const projects = [
  {
    name: "MarkMind AI",
    description:
      "Oxford University Innovation Startup Incubator selected - AI EdTech platform connecting teachers and students through automated assessment and contextual feedback, built with full-stack architecture",
      
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: markmind,
    source_code_link: false,
  },

  {
    name: "Complimind AI",
    description:
      "Healthcare GenAI copilot designed to help professionals navigate governance documents, regulations, standards, and industry best practices through an intelligent and interactive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
      {
        name: "dataviz",
        color: "orange-text-gradient",
      },
    ],
    image: innex,
    source_code_link: "https://complimind.co.uk/",
  },

  {
    name: "Choicemonk",
    description:
      "SaaS product recommendation platform that helps users research, compare, and evaluate products through intelligent search, filtering, sorting, and personalized recommendations to help you make best purchasing decision",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: choicemonk,
    source_code_link: false,
  },

  {
    name: "Vidfin",
    description:
      "Stock-market education platform built with Next.js, featuring secure video streaming, dynamic content, SEO optimization, and performance-focused frontend architecture.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "vdocipher",
        color: "orange-text-gradient",
      },
    ],
    image: vidfin,
    source_code_link: "https://vidfin.com",
  },

  {
    name: "AskChirayu",
    description:
      "Portfolio-aware AI assistant that turns Chirayu's experience, projects, and technical knowledge into an interactive conversational experience with contextual responses",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "orange-text-gradient",
      },
    ],
    image: askchirayu,
    source_code_link: "https://ask-chirayu-ai.vercel.app",
  },

  {
    name: "Krypton",
    description:
      "Real-time cryptocurrency market intelligence platform combining live WebSocket data, market APIs, interactive financial charts, and optimized Next.js data-fetching workflows",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "websocket",
        color: "pink-text-gradient",
      },
      {
        name: "charts",
        color: "orange-text-gradient",
      },
    ],
    image: krypton,
    source_code_link: "https://krypton-curr.vercel.app",
  },
];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  

  
  export { services, technologies, experiences, testimonials, projects };