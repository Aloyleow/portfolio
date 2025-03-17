declare global {

  type SkillsImage = {
    link: string,
    alt: string,
    info: string
  }[]; 

  type ProjectsData = {
    index: string;
    name: string;
    techStack: string[];
    links: {
      Github: string[];
      Weblink: string; 
    };
    image: string;
    about: string;
  }[];

  type ProjectData = {
    index: string;
    name: string;
    techStack: string[];
    links: {
      Github: string[];
      Weblink: string; 
    };
    image: string;
    about: string;
  };

}

export { };