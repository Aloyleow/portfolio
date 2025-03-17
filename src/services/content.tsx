const skillsImage1: SkillsImage = [
  {
    link: "skills/js.svg",
    alt: "jsLogo",
    info: "JavaScript"
  },
  {
    link: "skills/ts.svg",
    alt: "tsLogo",
    info: "TypeScript"
  },
  {
    link: "skills/java.svg",
    alt: "javaLogo",
    info: "Java"
  },
  {
    link: "skills/react.svg",
    alt: "reactLogo",
    info: "React"
  },
  {
    link: "skills/html.svg",
    alt: "htmlLogo",
    info: "HTML"
  },
  {
    link: "skills/css.svg",
    alt: "cssLogo",
    info: "CSS"
  },
]

const skillsImage2: SkillsImage = [
  {
    link: "skills/bun.svg",
    alt: "bunLogo",
    info: "Bun"
  },
  {
    link: "skills/node.svg",
    alt: "nodeLogo",
    info: "Node JS"
  },
  {
    link: "skills/express.svg",
    alt: "expressLogo",
    info: "Express"
  },
  {
    link: "skills/mdb.svg",
    alt: "mdbLogo",
    info: "MongoDB"
  },
  {
    link: "skills/pgsql.svg",
    alt: "pgsqlLogo",
    info: "PostgreSQL"
  },
  {
    link: "skills/aws.svg",
    alt: "awsLogo",
    info: "AWS S3"
  },
  {
    link: "skills/git.svg",
    alt: "gitLogo",
    info: "Git & GitHub"
  },
]

const projectsData: ProjectsData = [
  {
    index: "A",
    name: "ThreeEndventure Game",
    techStack: ["React.ts", "Bun", "PostgreSQL", "Vercel", "Render"],
    links: {
      Github: ["https://github.com/Aloyleow/ThreeEndventureGame-frontend", "https://github.com/Aloyleow/ThreeEndventureGame-backend"],
      Weblink: "https://threeendventuregame.vercel.app/"
    },
    image: "/projects/threeend.png",
    about: `
      A Full-Stack gaming application that includes database managment and backend user authentication. 
       `,
  },
  {
    index: "B",
    name: "FigureLab.com",
    techStack: ["React.ts"],
    links: {
      Github: [],
      Weblink: "https://www.figurelabmy.com/"
    },
    image: "/projects/figurelab.png",
    about: `
      A Web-app that I developed for FigureLab.com
       `,
  },
  {
    index: "C",
    name: "Shoes-Tracker",
    techStack: ["React.ts", "Bootstrap", "Bun", "PostgreSQL", "AWS S3", "Vercel", "Render"],
    links: {
      Github: ["https://github.com/Aloyleow/Shoe-Frontend", "https://github.com/Aloyleow/Shoes-Backend"],
      Weblink: ""
    },
    image: "/projects/shoes.png",
    about: `
      A Web-app completed under a tight timeframe as a challenge, full CRUD functionalities with RESTful APIs
       `,
  },
  {
    index: "D",
    name: "Lets*Help (Project Eleos)",
    techStack: ["React.js", "MUI", "Node.js", "PostgreSQL", "Render"],
    links: {
      Github: ["https://github.com/Aloyleow/Eleos"],
      Weblink: "https://letshelp.onrender.com/"
    },
    image: "/projects/eleos.png",
    about: `
       A volunteer event platform application that I developed and designed for my capston project.
       Key features include user authentication and authorization, email notifications, 
       and full CRUD functionality.
       `,
  },
  {
    index: "E",
    name: "Wally",
    techStack: ["React.js", "MUI", "Node.js", "MongoDB", "Render"],
    links: {
      Github: ["https://github.com/Zeffun/wally"],
      Weblink: ""
    },
    image: "/projects/wally.png",
    about: `
        A wallet web application that simulates a banking experience. 
        A collaborated Full-Stack project while learning. 
        `,

  },
  {
    index: "F",
    name: "covid19-casedetails",
    techStack: ["React.js", "Pico", "AirTable", "Netlify"],
    links: {
      Github: ["https://github.com/Aloyleow/covid19-casedetails"],
      Weblink: "https://covid19casedetails.netlify.app/"
    },
    image: "/projects/covid.png",
    about: `
        An app to retrieve Covid-19 Cases from an external API with full CRUD functions. 
        Front-end project done while learning. 
        `,

  },
]

export {
  skillsImage1,
  skillsImage2,
  projectsData
}