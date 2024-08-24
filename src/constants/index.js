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
    icon: web
  },
  {
    title: "React Native Developer",
    icon: mobile
  },
  {
    title: "Backend Developer",
    icon: backend
  },
  {
    title: "Content Creator",
    icon: creator
  }
];

const technologies = [
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Three JS",
    icon: threejs
  },
  {
    name: "C",
    icon: c
  },
  {
    name: "C#",
    icon: csharp
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "Java",
    icon: java
  },
  {
    name: "MySQL",
    icon: mysql
  },
  {
    name: "PHP",
    icon: php
  },
  {
    name: "PostgreSQL",
    icon: postgresql
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "Blender",
    icon: blender
  },
  {
    name: "docker",
    icon: docker
  },
  {
    name: "SOLIDWORKS",
    icon: solidworks
  },
  {
    name: "Unity",
    icon: unity
  }
];

const experiences = [
  {
    title: "Junior Data Analyst Trainee",
    company_name: "NPower Canada",
    icon: npower,
    link: "https://npowercanda.ca/about/",
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Performed data wrangling and mining using Excel and Python (Pandas, Numpy)",
      "Completed capstone projects involving data collection, analysis, and visualization using Python libraries",
      "Created visualizations and interactive dashboards with Python (Matplotlib, Seaborn, Plotly) and IBM Cognos Analytics",
      "Composed SQL queries to access cloud databases using Jupyter Notebook",
      "Utilized core Azure services for AI applications, cost control, and billing management",
      "Successfully completed Agile projects using Scrum, Kanban, and Gantt Charts"
    ]
  },
  {
    title: "Software Engineer Intern",
    company_name: "Bitnine Global Inc.",
    icon: bitnine,
    link: "https://bitnine.net/company/",
    iconBg: "#E6DEDD",
    date: "February 2023 - August 2023",
    points: [
      "Emerged as the primary contributor in the assigned project (Developing AgeSQL), responsible for constructing the main structure of the software by modifying more than 68,000 lines of code",
      "Assisted over 5,000 users with PostgreSQL and Apache AGE-related issues, enhancing technical support skills and improving user satisfaction through effective problem-resolution",
      "Contributed extensively to the community through documentation, articles, and participation in forum discussions, ultimately achieving the top 2% reputation growth on Stack Overflow for the quarter",
      "Proactively learned about open-source DBMS software such as PostgreSQL including its internal mechanisms and how Graph queries work",
      "Attained recognition as one of the highest-performing interns within the organization by consistently exceeding KPI quota points monthly with an average of 217% and achieving a maximum of 483%",
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
      "Bachelor of Applied Science",
      "Major in Electrical Engineering, Mechatronics Option",
      "Minor in Computer Science",
      "Graduated with distinction standing",
      "Received Deputy Vice-Chancellor Scholarship for International Students (2021)",
      "Received Outstanding International Student Award (2018)"
    ]
  },
];

const testimonials = [
  {
    testimonial:
      "From the moment you joined my team, it was evident that you possessed a remarkable level of enthusiasm and eagerness to learn. Your commitment to your tasks and projects was truly commendable, and your proactive approach to seeking out new challenges and responsibilities was inspiring to both your peers and Project Leader.",
    name: "Udaya Ganesh",
    designation: "Operations Manager",
    company: "Bitnine Global Inc.",
    image: "https://cdn.discordapp.com/avatars/1060274633368162407/d6ff962598830cce1ad506b3fc783556.webp?size=128"
  }
];

const projects = [
  {
    name: "Data Analytics - Shifting Technology Trends",
    company: "Npower Canda",
    company_link: "https://npowercanda.ca/about/",
    description:
      "Leveraged libraries such as Pandas, NumPy, Matplotlib, and Seaborn to perform in-depth data analysis and create insightful visualizations through IBM Cognos Analytics that supported data-driven decision-making. Applied advanced Python and SQL techniques to gather, clean, and transform data from multiple sources, ensuring high-quality, reliable datasets for analysis.",
    tags: [
      {
        name: "Python",
        color: "brown-text-gradient"
      },
      {
        name: "SQL",
        color: "brown-text-gradient"
      },
      {
        name: "IBM Cognos Analytics",
        color: "brown-text-gradient"
      },
      {
        name: "Microsoft Excel",
        color: "brown-text-gradient"
      },
      {
        name: "Microsoft Powerpoint",
        color: "brown-text-gradient"
      }
    ],
    image: shiftintech,
    source_code_link: "https://github.com/kenwoon/Data-Analysis-of-Shifting-Tech-Trends"
  },
  {
    name: "3D Web Design and Development",
    company: "Personal",
    company_link: "https://kenwoon.github.io/portfolio",
    description:
      "Created a personalized portfolio website that showcases my skills, projects, and achievements as a developer. Leveraging a combination of CSS, HTML, JavaScript, and various frontend techniques, I designed a visually appealing and interactive online platform to highlight my professional journey. The portfolio website serves as a testament to my dedication to development and my continuous journey in expanding my skillset.",
    tags: [
      {
        name: "CSS",
        color: "brown-text-gradient"
      },
      {
        name: "HTML",
        color: "brown-text-gradient"
      },
      {
        name: "JavaScript",
        color: "brown-text-gradient"
      },
      {
        name: "Node JS",
        color: "brown-text-gradient"
      },
      {
        name: "React JS",
        color: "brown-text-gradient"
      },
      {
        name: "Tailwind CSS",
        color: "brown-text-gradient"
      },
      {
        name: "Three JS",
        color: "brown-text-gradient"
      },
      {
        name: "Git",
        color: "brown-text-gradient"
      },
      {
        name: "Blender",
        color: "brown-text-gradient"
      },
    ],
    image: portfoliocreation,
    source_code_link: "https://github.com/kenwoon/portfolio"
  },
  {
    name: "Developing AgeSQL - A CLI Tool for Apache AGE",
    company: "Bitnine Global Inc.",
    company_link: "https://bitnine.net/company/",
    description:
      "Developed a command-line interface (CLI) that incorporates Cypher queries into PostgreSQL with the AGE extension. Engineered the framework for the software parser with additional improvements to ensure the handling of specific commands. Conducted recording, testing, and debugging of over 500 commands to guarantee optimal software functionality and performance. Delivered a presentation to stakeholders exceeding 20 individuals, providing an in-depth introduction to the project's scope, its diverse functionalities, and a detailed exposition of the development process.",
    tags: [
      {
        name: "C",
        color: "brown-text-gradient"
      },
      {
        name: "Cypher",
        color: "brown-text-gradient"
      },
      {
        name: "Git",
        color: "brown-text-gradient"
      },
      {
        name: "Lex / Yacc",
        color: "brown-text-gradient"
      },
      {
        name: "SQL",
        color: "brown-text-gradient"
      },
      {
        name: "Command Line / Bash",
        color: "brown-text-gradient"
      },
    ],
    image: agesql,
    source_code_link: "https://github.com/AGEDB-INC/AgeSQL"
  },
  {
    name: "Inventory Management System Software",
    company: "UBCO",
    company_link: "https://ok.ubc.ca/about/",
    description:
      "Constructed an inventory management system from the ground up using Java, with the integration of public APIs for additional features. Created the cloud backup, system pop-up-notifications, and the visualization functionalities. Formulated a systematic developemnt approach that encompassed pivotal procedures such as SDLC selection, WBS creation, Gantt Chart planning, and Data Flow Diagram design.",
    tags: [
      {
        name: "Java",
        color: "brown-text-gradient"
      },
      {
        name: "Git",
        color: "brown-text-gradient"
      }
    ],
    image: inventorysystem,
    source_code_link: "https://github.com/kenwoon/Inventory-Management-System-Software"
  },
  {
    name: "Data Analytics - Vancouver Historical Crime",
    company: "UBCO",
    company_link: "https://ok.ubc.ca/about/",
    description:
      "Established a research focused on determining the total crime committed during the holiday season, the times and years when crimes occur the most, and the most targeted areas, based on Vancouver's historical crime data from 2003 to 2021. Processed and cleaned the dataset, conducted exploratory data analysis (EDA), created data visualizations, and worked with method chaining in Python. Presented the findings visually on a dashboard through Tableau as well.",
    tags: [
      {
        name: "Git",
        color: "brown-text-gradient"
      },
      {
        name: "Python",
        color: "brown-text-gradient"
      },
      {
        name: "Tableau",
        color: "brown-text-gradient"
      }
    ],
    image: dataanalytics,
    source_code_link: "https://github.com/kenwoon/Vancouver-Historical-Crime-Data-Analytics-Project"
  },
  {
    name: "VR Target Throwing Game",
    company: "Circuit Stream & UBCO",
    company_link: "https://ubcexl.xrcourse.com/xr-dev",
    description:
      "Used the advanced Unity physics engine to create a realistic skills-based game involving throwing food at moving targets. Utilised the animation system to animate VR hands and detect collisions, allowing the player to pick up projectiles and realistically throw them at randomly generated targets. Created the classic VR teleport with all the UX functions. Used layers and LayerMask, Raycast, line renderers, and coroutines to construct a VR locomotion system.",
    tags: [
      {
        name: "Unity",
        color: "brown-text-gradient"
      }
    ],
    image: xr4,
    source_code_link: "https://github.com/kenwoon/JULY22-XRD-Project04"
  },
  {
    name: "AR X-Ray Simulator with Vuforia",
    company: "Circuit Stream & UBCO",
    company_link: "https://ubcexl.xrcourse.com/xr-dev",
    description:
      "Constructed an Augmented Reality (AR) application using Vuforia. Used multiple Image Targets to build an X-Ray simulator, where the user can scan a 3D model of the human body to see what is inside.",
    tags: [
      {
        name: "C#",
        color: "brown-text-gradient"
      },
      {
        name: "Unity",
        color: "brown-text-gradient"
      }
    ],
    image: xr3,
    source_code_link: "https://github.com/kenwoon/JULY22-XRD-Project03"
  },
  {
    name: "Space Exploration Simulation",
    company: "Circuit Stream & UBCO",
    company_link: "https://ubcexl.xrcourse.com/xr-dev",
    description:
      "Created a simulation of a solar system; planets and moons that orbit a star. Animated celestial bodies with C# code, and created a physics controlled rocket to explore the space. Included functionalities such as firing laser bolts from the ship to make objects interact with the physics engine.",
    tags: [
      {
        name: "C#",
        color: "brown-text-gradient"
      },
      {
        name: "Unity",
        color: "brown-text-gradient"
      }
    ],
    image: xr2,
    source_code_link: "https://github.com/kenwoon/JULY22-XRD-Project02"
  },
  {
    name: "3D Unity Introductory Project",
    company: "Circuit Stream & UBCO",
    company_link: "https://ubcexl.xrcourse.com/xr-dev",
    description:
      "Learning the Unity interface, creating Prefabs, importing Assets, and using character controller. Practiced navigating the editor, manipulating objects in the scene, making them pretty with materials, saving them with prefabs, modifying them with ProBuilder, and importing them from the asset store.",
    tags: [
      {
        name: "C#",
        color: "brown-text-gradient"
      },
      {
        name: "Unity",
        color: "brown-text-gradient"
      }
    ],
    image: xr1,
    source_code_link: "https://github.com/kenwoon/JULY22-XRD-Project01"
  },
  {
    name: "Muffin Clicker Game in Unity",
    company: "Circuit Stream & UBCO",
    company_link: "https://ubcexl.xrcourse.com/xr-dev",
    description:
      "Coded basic C# scripts and created custom components in Unity for a Muffin Clicker game. Interpreted the code structure of a Unity script and deciphered using statements, produced GameObject components using scripts, animated objects with functions, and practiced best coding practices through understanding code smells and refactoring.",
    tags: [
      {
        name: "C#",
        color: "brown-text-gradient"
      },
      {
        name: "Unity",
        color: "brown-text-gradient"
      }
    ],
    image: muffin,
    source_code_link: "https://github.com/kenwoon/JULY22-C-SF-MuffinClicker"
  },
  // {
  //   name: "Amazons Chess AI Programming",
  //   company: "UBCO",
  //   company_link: "https://ok.ubc.ca/about/",
  //   description:
  //     "Created an AI that is able to play Amazons Chess by finding the best state-space possible for the current given state-space. Implemented Minimax algorithm using Iterative Deepening Depth First Search in order to stop finding best move at a given time but still have a good enough move while only use a reasonable computational power and memory.",
  //   tags: [
  //     {
  //       name: "Git",
  //       color: "brown-text-gradient"
  //     },
  //     {
  //       name: "Java",
  //       color: "brown-text-gradient"
  //     }
  //   ],
  //   image: "",
  //   source_code_link: "https://github.com/kenwoon/ChessAI"
  // },
  {
    name: "Cocoon - Occupant Safety Electric Vehicle Design",
    company: "UBCO",
    company_link: "https://ok.ubc.ca/about/",
    description:
      "Designed a low-cost, environmentally friendly electric vehicle focused on occupant safety. Crafted a detailed engineering model using SolidWorks. Fabricated a vehicle design that was not only energy efficient and environmentally friendly but also prioritized the safety of the occupants, considering various factors such as the materials used, the design of the vehicle, and the features and systems in cluded.",
    tags: [
      {
        name: "SOLIDWORKS",
        color: "brown-text-gradient"
      }
    ],
    image: cocoon,
    source_code_link: "https://docs.google.com/document/d/1LNknZeBnWWaPKUCtKlzPoIQlNHG1TlUgOwPzij1hmzk/edit?usp=sharing"
  },
  {
    name: "Nanomanipulator MEMS Design and Fabrication",
    company: "UBCO",
    company_link: "https://ok.ubc.ca/about/",
    description:
      "Designed, built, and tested a nanomanipulator using MEMS (microelectromechanical systems) microactuators to overcome the limitation of low output forces. Using the UBCO In-House fabrication process, a physical MEMS device was created based on customised Klayout designs. The device includes a linear amplification mechanism utilizing the combination of a nanomanipulator and a thermal actuator. This has been used to minimize input displacements to achieve high positioning resolution at the output probe tip and amplify output forces to manipulate nano-objects.",
    tags: [
      {
        name: "KLayout",
        color: "brown-text-gradient"
      }
    ],
    image: mems,
    source_code_link: "https://docs.google.com/document/d/1ZOSG_DvUoGTQsbXLrj3MO5d1V1GWEHNMKf-vge4gTJU/edit?usp=sharing"
  },
  {
    name: "GC Aries Warship Modelling",
    company: "UBCO",
    company_link: "https://ok.ubc.ca/about/",
    description:
      "Designed and modelled a warship inspired by the GC Aries using SOLIDWORKS. Utilised various SOLIDWORKS tools, such as 3D sketching, extrusion, and the software's assembly capabilities to create the different parts and pieces of the warship. Referenced images and videos from GrabCAD for other creative ideas and inspiration.",
    tags: [
      {
        name: "SOLIDWORKS",
        color: "brown-text-gradient"
      }
    ],
    image: warship,
    source_code_link: "https://drive.google.com/file/d/1-dFdbhImzr0TRDSPlhQkBDeS5D8TP-Ik/view"
  },
  {
    name: "Minesweeper Game with Java",
    company: "UBCO",
    company_link: "https://ok.ubc.ca/about/",
    description:
      "Created a replica of the classic Minesweeper game using object-oriented programming in Java. Set up the program GUI displaying the header and grid sections. Implemented complete functionalities by handling responses appropriately with each event occurrence.",
    tags: [
      {
        name: "Git",
        color: "brown-text-gradient"
      },
      {
        name: "Java",
        color: "brown-text-gradient"
      }
    ],
    image: minesweeper,
    source_code_link: "https://github.com/kenwoon/Minesweeper/"
  }
];

export { services, technologies, experiences, testimonials, projects };