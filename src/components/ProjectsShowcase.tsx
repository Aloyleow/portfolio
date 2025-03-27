import { useState } from "react"
import { motion } from "motion/react";
import { projectsData } from "../services/content"
import ProjectCardTopSection from "./ProjectCardTopSection";
import ProjectCardBottomSection from "./ProjectCardBottomSection";

const ProjectsShowcase = () => {
  const [showLess, setShowLess] = useState<boolean>(true)

  const showProjectsData = showLess ? projectsData.slice(0, 4) : projectsData;

  const handleClickShow = () => {
    setShowLess(prev => !prev)
  }

  return (
    <div className="projects-div1">
      {showProjectsData.map((obj, index) => (
        <div key={index} className="projects-card-div" style={{ flexDirection: index % 2 !== 0 ? "row" : "row-reverse" }}>
          <h3>{obj.name}</h3>
          <ProjectCardTopSection obj={obj} />
          <ProjectCardBottomSection obj={obj} />
        </div>
      ))}
      <div className="buttons-div">
        <motion.button
          onClick={() => handleClickShow()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          {showLess ? "More Projects" : "Show Less"}
        </motion.button>
      </div>
    </div>
  )
}

export default ProjectsShowcase