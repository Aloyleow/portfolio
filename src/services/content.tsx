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

export const projectsData: ProjectsData = [
  {
    index: "A",
    name: "ThreeEndventure Game",
    techStack:
    {
      FrontEnd: ["React.ts"],
      BackEnd: ["Bun"],
      DataBase: ["PostgreSQL"],
      DevOps: ["Git", "Vercel", "Render"],
      APIs: ["RESTful API with JWTauth"],
    },
    links: {
      Github: ["https://github.com/Aloyleow/ThreeEndventureGame-frontend", "https://github.com/Aloyleow/ThreeEndventureGame-backend"],
      Weblink: "https://threeendventuregame.vercel.app/"
    },
    image: "/projects/threeend.png",
    about: `
     is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
     it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
     remaining essentially unchanged.
       `,
  },
  {
    index: "B",
    name: "Shoes-Tracker",
    techStack:
    {
      FrontEnd: ["React.ts", "Bootstrap"],
      BackEnd: ["Bun"],
      DataBase: ["PostgreSQL, AWS S3"],
      DevOps: ["Git", "Vercel", "Render"],
      APIs: ["RESTful API"],
    },
    links: {
      Github: ["https://github.com/Aloyleow/Shoe-Frontend", "https://github.com/Aloyleow/Shoes-Backend"],
      Weblink: ""
    },
    image: "/projects/shoes.png",
    about: `
      Upgraded my portfolio with improved user experience and interface, 
      applied efficient React state management and CSS for styling with responsive designs. 
      Implemented form validation using Formik and Yup.
       `,
  },
  {
    index: "C",
    name: "Lets*Help (Project Eleos)",
    techStack:
    {
      FrontEnd: ["React.js", "MUI"],
      BackEnd: ["Node.js"],
      DataBase: ["PostgreSQL"],
      DevOps: ["Git", "Render"],
      APIs: ["RESTful APIs with JWTauth"],
    },
    links: {
      Github: ["https://github.com/Aloyleow/Eleos"],
      Weblink: "https://letshelp.onrender.com/"
    },
    image: "/projects/eleos.png",
    about: `
       LETSHELP is a volunteer event platform that I developed and designed to enable organizations to host events. 
       The public can sign up to attend these events while earning stars. 
       Key features include user authentication and authorization, email notifications, 
       and full CRUD functionality.
       `,
  },
  {
    index: "D",
    name: "Wally",
    techStack:
    {
      FrontEnd: ["React.js", "MUI"],
      BackEnd: ["Node.js", "Express"],
      DataBase: ["MongoDB"],
      DevOps: ["Git", "Render"],
      APIs: ["RESTful APIs with JWTauth"],
    },
    links: {
      Github: ["https://github.com/Zeffun/wally"],
      Weblink: ""
    },
    image: "/projects/wally.png",
    about: `
        Collaborated with two teammates to develop a wallet web application that simulates a banking experience. 
        Users can log in, create accounts, and conduct transactions, including depositing and withdrawing money.  
        `,

  },
  {
    index: "E",
    name: "covid19-casedetails",
    techStack:
    {
      FrontEnd: ["React.js", "Pico"],
      BackEnd: ["N/A"],
      DataBase: ["External data referencing, Airtable"],
      DevOps: ["Git", "Netlify"],
      APIs: ["RESTful APIs"],
    },
    links: {
      Github: ["https://github.com/Aloyleow/covid19-casedetails"],
      Weblink: "https://covid19casedetails.netlify.app/"
    },
    image: "/projects/covid.png",
    about: `
        An application to retrieve Covid-19 Cases from an external API, users
        are able to view and do simple analysis while saving data for tracking. 
        `,

  },
]

export {
  skillsImage1,
  skillsImage2,
}