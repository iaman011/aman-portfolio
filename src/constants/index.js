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
} from "react-icons/si";

import { DiCss3, DiJava } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/1xdEWelNwa5nn2UVeHiTGcQu1suAoSRfr/view?usp=drivesdk";
export const repoLink = "https://github.com/pankaj1132";

export const callToAction = "https://www.linkedin.com/in/pankaj-saini1132";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
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
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },

      {
        id: "f-7",
        icon: SiNextdotjs,
        name: "NODEJS",
      },
      {
        id: "f-8",
        icon: SiExpress,
        name: "EXPRESSJS",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
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
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiPostgresql,
        name: "POSTGRESQL",
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
  {
    organisation: "Qubinets Technologies, India",
    logo: Logo_Qubinets,
    link: "https://qubinets.com/",
    positions: [
      {
        title: "Full Stack Developer",
        duration: "Jul 2024 - Jan 2025",
        content: [
          {
            text: "Working as a Full Stack Developer on a Mern-based project for a US-based client.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Qspiders, India",
    logo: q,
    link: "https://qspiders.com/",
    positions: [
      {
        title: "ReactJS Intern",
        duration: "JAN 2025 - Present",
        content: [
          {
            text: "Working as a Frontend Developer on a React-based project for a US-based client.",
            link: "",
          },
        ],
      },
    ],
  },
];
// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "CraveBite",
    github: "https://github.com/pankaj1132/Cravebite",
    link: "https://cravebite-kappa.vercel.app/",
    image: crave,
    content:
      "A food recommendation system that uses OpenAI's GPT-3.5 to suggest recipes based on the ingredients you have at home. It also provides a shopping list for the missing ingredients.",
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
        icon: SiOpenai,
        name: "OpenAI",
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-5",
        icon: SiMongodb,
        name: "mongodb",
      },
    ],
  },
  {
    id: "project-2",
    title: "MovieFlix",
    github: "https://github.com/pankaj1132/MovieFlix",
    link: "https://movieflixpankaj.netlify.app/",
    image: movie,
    content:
      " A movie recommendation system that uses a collaborative filtering algorithm to suggest movies based on the user's ratings.",
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
        icon: SiOpenai,
        name: "OpenAI",
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-5",
        icon: SiMongodb,
        name: "mongodb",
      },
    ],
  },
  {
    id: "project-3",
    title: "Periodic Table",
    github: "https://github.com/pankaj1132/periodic_table",
    link: "https://periodic-table-psi.vercel.app/",
    image: chargeswap,
    content:
      "A periodic table of elements with detailed information about each element, including its atomic number, symbol, and atomic weight.",
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
        icon: SiMongodb,
        name: "mongodb",
      },
    ],
  },
  {
    id: "project-4",
    title: "Uber Backend",
    github: "https://github.com/pankaj1132/uber_clone_",

    image: uber,
    content:
      "A Uber clone with a custom built CMS. It has a custom built CMS with a ride booking, payment and a like/dislike button.",
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
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "icon-4",
        icon: SiWebauthn,
        name: "WebAuthn",
      },
    ],
  },
  {
    id: "project-5",
    title: "Youtube Videos",
    github: "https://github.com/pankaj1132/youtube_lite",
    link: "https://youtube-lite-self.vercel.app/",
    image: yt,
    content:
      " A Youtube clone with a custom built CMS. It has a custom built CMS with a video player, comments section and a like/dislike button.",
    stack: [
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-5",
        icon: SiReact,
        name: "React",
      },
    ],
  },
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
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: " SQL Essentail Traning (LinkedIn) Program",
    title: "SQL Essential Training",
    duration: "May 2024 - May 2024",
    content: [
      {
        text: "Completed SQL Essential Training course on LinkedIn Learning.",
        link: "https://drive.google.com/file/d/1BtPAnZ_S9cu8Rq_McF66QDLhz7crfS0L/view",
      },
    ],
    logo: LLlearing,
  },
  {
    id: 2,
    organisation: "CODING BLOCKS",
    title: "Data Structures and Algorithms",
    duration: "june 2023 - Dec 2023",
    content: [
      {
        text: "Completed Data Structures and Algorithms course on Coding Blocks.",
        link: "https://drive.google.com/file/d/1CWGOdvhPYriAbj0lc8k5enCTws0fzBPn/view",
      },
    ],

    logo: cb,
  },
  {
    id: 3,
    organisation: "Coincent.Ai ArIES IIT ROORKEE",
    title: "Python Bootcamp",
    duration: "Jan 2023 - Mar 2023",
    content: [
      {
        text: "Completed Python Bootcamp course on Coincent.Ai ArIES IIT Roorkee.",
        link: "https://drive.google.com/file/d/1e4mrnkg9VkS4ATw_e8cqfpfhMu6bh3Kt/view",
      },
    ],

    logo: pyyy,
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
    link: "https://github.com/pankaj1132",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:pankaj17469@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://x.com/pankaj17469",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/pankaj._saini11/?hl=en",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Aman Singh",
  githubUsername: "iaman011",
  tagLine: "Full Stack Developer at Qubinets Technologies",
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
