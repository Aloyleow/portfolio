declare global {

  type SkillsImage = {
    link: string,
    alt: string,
    info: string
  }[]; 

  type ProjectsData = {
    index: string;
    name: string;
    techStack: {
      FrontEnd: string[];
      BackEnd: string[];
      DataBase: string[];
      DevOps: string[];
      APIs: string[];
    };
    links: {
      Github: string[];
      Weblink: string; 
    };
    image: string;
    about: string;
  }[];

}

export { };