import { motion, Variants } from "motion/react"
import React from "react"

type ProjectCardTopSectionProps = {
  obj: ProjectData;
}

const projectLinksAnimateVar: Variants = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const ProjectCardTopSection: React.FC<ProjectCardTopSectionProps> = ({ obj }) => {
  return (
    <div className="projects-card-topSection" >
      <div className="projects-img-div">
        <img src={obj.image} alt={`project${obj.index}`} />
      </div>
      <motion.div 
        className="projects-links-div"
        variants={projectLinksAnimateVar}
        initial="initial"
        whileHover="animate"
      >
        {obj.links.Weblink !== "" &&
          <span>
            <a href={obj.links.Weblink} target="_blank">
              <img src="/weblinkBlack.svg"  />
              <p>Web-Link</p>
            </a>
          </span>
        }
        {obj.links.Github.length === 1 &&
          <span>
            <a href={obj.links.Github[0]} target="_blank">
              <img src="/githubBlack.svg"  />
              <p>Github</p>
            </a>
          </span>
        }
        {obj.links.Github.length > 1 &&
          <span>
            <a href={obj.links.Github[0]} target="_blank">
              <img src="/githubBlack.svg"  />
              <p>Frontend</p>
            </a>
            <a href={obj.links.Github[1]} target="_blank">
              <img src="/githubBlack.svg"  />
              <p>Backend</p>
            </a>
          </span>
        }
      </motion.div>
    </div>
  )
}

export default ProjectCardTopSection