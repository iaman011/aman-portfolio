import {
  mm,
  yt,
  LLlearing,
  cdc,
  cb,
  chargeswap,
  q,
  uber,
  movie,
  pyyy,
  Logo_Qubinets,
  crave,
} from "../assets";

import cbseb from "../assets/023.jpg"

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiC,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiOpenai,
  SiNextdotjs,
  SiWebauthn,
  SiPrisma,
  SiStripe,
  SiGoogle, // for Gemini API
  SiJsonwebtokens
  
} from "react-icons/si";

import { SiVercel, SiWhatsapp, SiX } from "react-icons/si";


import { DiCss3, DiJava } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/1sNKhdHYjiJW54M5apehsGPiYmFPeEEaT/view?usp=sharing";
export const repoLink = "https://github.com/iaman011";

export const callToAction = "https://drive.google.com/file/d/1sNKhdHYjiJW54M5apehsGPiYmFPeEEaT/view?usp=sharing";

export const navLinks = [
  {
    id: "skills",
    // title: "Skills & Experience",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },

  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: mm,
    title: "Maharishi Dayanand University, Rohtak",
    degree: "Bachelor of Technology",
    duration: "2022-2026",
    content1: "Computer Science and Engineering",
  },
    {
    id: "education-1",
    icon: cbseb,
    title: "Government Co-Ed Sarvodaya Vidyalaya Sector-22, Rohini",
    degree: "Higher Secondary Education",
    duration: "2020-2022",
    content1: "PCM + Computer Science",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      // {
      //   id: "pl-2",
      //   icon: SiPython,
      //   name: "Python",
      // },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },

      // {
      //   id: "pl-6",
      //   icon: DiJava,
      //   name: "Java",
      // },
      // {
      //   id: "pl-7",
      //   icon: SiC,
      //   name: "C",
      // },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript(ES5/ES6)",
      },
       {
        id: "pl-10",
        icon: SiTypescript,
        name: "TypeScript",
      },
    ],
  },
  {
    title: "Frontend Technologies",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "React.js",
      },
      // {
      //   id: "f-4",
      //   icon: SiBootstrap,
      //   name: "Bootstrap",
      // },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },

      {
        id: "f-7",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      
       {
        id: "f-11",
        icon: SiTailwindcss,
        name: "Shadcn/ui",
      },
   
      
     
    ],
  },
   {
    title: "Backend Technologies",
    items: [
      
      {
        id: "f-8",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "f-9",
        icon: SiNodedotjs,
        name: "Node.js",
      },
       {
        id: "f-10",
        icon:  SiJsonwebtokens,
        name: " Jsonwebtokens",
      },
      
       {
        id: "f-12",
        icon: SiPostman,
        name: "RESTful API",
      },
      {
        id: "f-13",
        icon: SiWebauthn,
        name: "NextAuth.js",
      },
      
     
    ],
  },
  {
    title: "Database",
    items: [
      {
        id: "t-1",
        icon: SiMongodb,
        name: "MongoDB",
      },
   
    
     
      {
        id: "t-2",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      
      {
        id: "t-3",
        icon: SiPrisma,
        name: "Prisma",
      },
   
    ],
  },
   {
    title: "Tools",
    items: [
    
   
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: SiVercel,
        name: "Vercel",
      },
     
      // {
      //   id: "t-9",
      //   icon: SiDocker,
      //   name: "Docker",
      // },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  // {
  //   organisation: "Qubinets Technologies, India",
  //   logo: Logo_Qubinets,
  //   link: "https://qubinets.com/",
  //   positions: [
  //     {
  //       title: "Full Stack Developer",
  //       duration: "Jul 2024 - Jan 2025",
  //       content: [
  //         {
  //           text: "Working as a Full Stack Developer on a Mern-based project for a US-based client.",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   organisation: "Qspiders, India",
  //   logo: q,
  //   link: "https://qspiders.com/",
  //   positions: [
  //     {
  //       title: "ReactJS Intern",
  //       duration: "JAN 2025 - Present",
  //       content: [
  //         {
  //           text: "Working as a Frontend Developer on a React-based project for a US-based client.",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "AI-Finance Platform",
    github: "https://github.com/iaman011/AI-Finance-Platform",
    link: "https://ai-finance-platform-iaman011s-projects.vercel.app/",
    image: '/Qlogo.png',
    content:
      "QuantEdge is an AI-powered personal finance platform that helps you manage your income and expenses with ease. It features an interactive dashboard, AI-based receipt scanning using the Gemini API, and regular Gmail updates about your expenses — keeping you informed and in control of your finances.",
    stack: [
      {
        id: "icon-1",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiPostgresql,
        name: "Postgresql",
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-5",
        icon:  SiPrisma,
        name: "Prisma",
      },
       {
        id: "icon-6",
        icon:  SiGoogle,
        name: "Google Gemini",
      },
    ],
  },
  {
    id: "project-2",
    title: "E-Commerce Web Application",
    github: "https://github.com/iaman011/e-commerce",
    link: "https://e-commerce-nextjs-iaman011s-projects.vercel.app/",
    image: '/download (1).png',
    content:
      " E-Commerce platform with Next.js 15, Tailwind CSS v4, and Stripe. Featuring a dynamic product carousel, responsive product pages, real-time cart updates with Zustand, and a seamless Stripe-powered checkout — all wrapped in a sleek, modern UI.",
    stack: [
      {
        id: "icon-1",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon:  SiStripe,
        name: "Stripe",
      },
      {
        id: "icon-4",
        icon: SiTypescript,
        name: "Typescript",
      },
    
    ],
  },
  {
    id: "project-3",
    title: "AI-Powered Code Reviewer",
    github: "https://github.com/iaman011/AI-Powered-Code-Reviewer",
    // link: "",
    image: '/codereview.jpeg',
    content:
      "Built an intelligent code review platform that streamlines the code review process using AI-driven insights and a user-friendly interface.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-4",
       icon: SiNodedotjs,
        name: "Node.js",
      },
       {
        id: "icon-5",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "icon-6",
        icon: SiGoogle,
        name: "Google Gemini",
      },
    ],
  },
  {
    id: "project-4",
    title: "Uber Backend",
    github: "https://github.com/iaman011/Uber-Clone-App",

    image: '/uber-logo.jpg',
    content:
      "Built a secure, scalable backend for an Uber Clone with Node.js, Express, MongoDB, and JWT-based authentication, optimizing APIs for high-traffic performance.",
    stack: [
      {
        id: "icon-1",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "Mongodb",
      },
      {
        id: "icon-4",
        icon: SiJsonwebtokens,
        name: "Jsonwebtokens",
      },
    ],
  },
  {
    id: "project-5",
    title: "Paste-React App (Text Editor)",
    github: "https://github.com/iaman011/pasteApp",
    link: "https://paste-app-di7v-iaman011s-projects.vercel.app/",
    image: '/texteditor.png',
    content:
      "Built a rich-text editor with local data persistence, optimized Redux state management, and a fully responsive, mobile-friendly UI.",
    stack: [
      {
        id: "icon-5",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-4",
        icon: SiTailwindcss,
        name: "Tailwindcss",
      },
      
    ],
  },
  /*
  {
    id: "project-6",
    title: "Job Portal",
    github: "https://github.com/pankaj1132/jobportal-backend",

    image: cdc,
    content:
      "A job portal with a custom built CMS. It has a custom built CMS with a job posting, application and a like/dislike button.",
    stack: [
      {
        id: "icon-1",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "Express",
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MondoDB",
      },
    ],
  },
  */
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  // {
  //   id: "stats-1",
  //   title: "Organisations",
  //   value: "2+",
  // },
  // {
  //   id: "stats-2",
  //   title: "Issues Opened",
  //   value: "6+",
  // },
  // {
  //   id: "stats-3",
  //   title: "Pull Requests",
  //   value: "6+",
  // },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "PW Skills",
    title: "DevOps & Cloud Computing",
    duration: "May 2025 - Oct 2025",
    content: [
      {
        text: "I’m actively upskilling in DevOps and Cloud Computing, focusing on CI/CD pipelines with Docker, Kubernetes, Jenkins, and AWS. I’m gaining hands-on experience in infrastructure as code using Terraform, configuration management with Ansible, and system monitoring through Prometheus and Grafana.",
        // link: "https://drive.google.com/file/d/1BtPAnZ_S9cu8Rq_McF66QDLhz7crfS0L/view",
      },
    ],
    logo: '/pws.png',
  },
  {
    id: 2,
    organisation: "CODING BLOCKS",
    title: "Data Structures and Algorithms",
    duration: "Jan 2024 - June 2024",
    content: [
      {
        text: "This comprehensive 6-month offline program, guided by expert mentor Abhishek Srivastava at Coding Blocks, is meticulously designed to build strong foundational and advanced skills in Data Structures and Algorithms (DSA) using C++.",
        link: "https://drive.google.com/file/d/1yjMLZcNOD0a_gqejsSmfgjCfsfnf3cn4/view?usp=sharing",
      },
    ],

    logo: cb,
  },
  {
    id: 3,
    organisation: "Coursera",
    title: "Python for Data Science, AI & Development",
    duration: "September 9, 2023",
    content: [
      {
        text: "The course covers Python libraries like NumPy and Pandas for data manipulation and analysis, APIs and web scraping, teaching you how to interact with REST APIs using libraries like requests and extract data from websites using BeautifulSoup",
        link: "https://www.coursera.org/account/accomplishments/certificate/SK4JV7BU6VEN",
      },
    ],

    logo: '/Coursera-Logo_600x600.svg.png',
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "http://www.linkedin.com/in/iaman011",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/iaman011",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:iaman.singh011@gmail.com",
  },
  {
    id: "social-media-4",
    icon: SiWhatsapp,
    link: "https://wa.me/919310063238?text=Hello%20Aman!%20I%20came%20across%20your%20portfolio.",
  },
  {
    id: "social-media-5",
    icon: SiX,
    link: "https://x.com/iaman011",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Aman Singh",
  githubUsername: "iaman011",
  // tagLine: "Full Stack Developer at Qubinets Technologies",
  tagLine: "Full Stack Developer",
  intro:
    "Fullstack MERN Developer skilled in building dynamic, scalable web applications with MongoDB, Express.js, React, and Node.js.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
