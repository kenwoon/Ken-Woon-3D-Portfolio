import * as exports from "../assets";

Object.entries(exports).forEach(([name, exported]) => window[name] = exported);
  
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
  }
];
  
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  }
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  // },
  // {
  //   name: "PHP",
  //   icon: php,
  // },
  // {
  //   name: "PostgreSQL",
  //   icon: postgresql,
  // },
  // {
  //   name: "Python",
  //   icon: python,
  // },
  // {
  //   name: "Blender",
  //   icon: blender,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "SOLIDWORKS",
  //   icon: solidworks,
  // },
  // {
  //   name: "Unity",
  //   icon: unity,
  // }
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Bitnine Global Inc.",
    icon: bitnine,
    link: "https://bitnine.net/company/",
    iconBg: "#E6DEDD",
    date: "February 2023 - August 2023",
    points: [
      "Participating in an (open-source) Apache Top-Level Project \"Apache AGE\" as one of its contributors.",
      "Collaborating with Bitnine's Apache AGE open-source community managers and technical project managers.",
      "Debugging and testing Apache AGE source code.",
      "Proactively learn about open-source DBMS software such as PostgreSQL including its internal mechanisms and how Graph queries work.",
      "Developing Graph database management system software technologies and related applications using various programming languages including C, Python, and JavaScript.",
      "Creating and updating technical writings about Apache AGE."
    ]
  },
  {
    title: "Full-Time Student",
    company_name: "University of British Columbia Okanagan",
    icon: ubc,
    link: "https://ok.ubc.ca/about/",
    iconBg: "#E6DEDD",
    date: "September 2018 - December 2022",
    points: [
      "Bachelor of Applied Science.",
      "Major in Electrical Engineering, Mechatronics Option.",
      "Minor in Computer Science.",
      "Designated \"with Distinction\" graduation standing.",
      "Deputy Vice-Chancellor Scholarship for International Students (2021).",
      "Outstanding International Student Award (2018)."
    ]
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
  }
];

const projects = [
  {
    company: "Bitnine Global Inc.",
    name: "Developing AgeSQL - A CLI Tool for Apache AGE",
    description:
      "Developed a command-line interface (CLI) that incorporates Cypher queries into PostgreSQL with the AGE extension. Engineered the framework for the software parser with additional improvements to ensure the handling of specific commands. Conducted recording, testing, and debugging of over 500 commands to guarantee optimal software functionality and performance. Delivered a presentation to stakeholders exceeding 20 individuals, providing an in-depth introduction to the project's scope, its diverse functionalities, and a detailed exposition of the development process.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Lex / Yacc",
        color: "green-text-gradient",
      },
      {
        name: "Cypher",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "Command Line",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      }
    ],
    image: agesql,
    source_code_link: "https://github.com/AGEDB-INC/AgeSQL",
  },
  {
    company: "UBCO",
    name: "Inventory Management System Software",
    description:
      "Constructed an inventory management system from the ground up using Java, with the integration of public APIs for additional features. Created the cloud backup, system pop-up-notifications, and the visualization functionalities. Formulated a systematic developemnt approach that encompassed pivotal procedures such as SDLC selection, WBS creation, Gantt Chart planning, and Data Flow Diagram design.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "green-text-gradient",
      }
    ],
    image: inventorysystem,
    source_code_link: "https://github.com/kenwoon/Inventory-Management-System-Software",
  }
];

export { services, technologies, experiences, testimonials, projects };