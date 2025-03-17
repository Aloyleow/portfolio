import { useState } from "react"
import { projectsData } from "../services/content"
import ProjectCardTopSection from "./ProjectCardTopSection";
import ProjectCardBottomSection from "./ProjectCardBottomSection";

const ProjectsShowcase = () => {
  const [showLess, setShowLess] = useState(true)

  const showProjectsData = showLess ? projectsData.slice(0, 3) : projectsData;

  const handleClickShow = () => {
    setShowLess(prev => !prev)
  }

  return (
    <div className="projects-div1">
      {showProjectsData.map((obj, index) => (
        <div key={index} className="projects-card-div" style={{ flexDirection: index % 2 !== 0 ? "row" : "row-reverse" }}>  
          <ProjectCardTopSection obj={obj} />
          <ProjectCardBottomSection obj={obj} index={index}/>
        </div> 
      ))}
      <button onClick={() => handleClickShow()}>{showLess ? "Show more" : "Show less"}</button>
    </div>
  )
}

export default ProjectsShowcase