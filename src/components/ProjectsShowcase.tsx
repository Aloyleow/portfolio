import { useState } from "react"
import { projectsData } from "../services/content"

const favProjectsData = [
  projectsData[0],
  projectsData[1],
  projectsData[2]
]

const ProjectsShowcase = () => {
  const [showProjectsData, setShowProjectData] = useState<ProjectsData>(favProjectsData)
  const [showLess, setShowLess] = useState(true)

  const handleClickShow = () => {

    if (showLess) {
      setShowProjectData(projectsData);
      setShowLess(false);
    } else if (!showLess) {
      setShowProjectData(favProjectsData);
      setShowLess(true);
    }

  }


  return (
    <div className="projects-div1">
      {showProjectsData.map((obj, index) => (
        <div key={index} className="projects-card-div" style={{ flexDirection: index % 2 !== 0 ? "row" : "row-reverse" }}>
          <div className="projects-card-top-div" >
            <img src={obj.image} alt={`project${obj.index}`} className="imageTest" />
            <div className="projects-links-div">
              {obj.links.Weblink !== "" && <a href={obj.links.Weblink} target="_blank">Web</a>}
              {obj.links.Github.length === 1 && <a href={obj.links.Github[0]} target="_blank">Github</a>}
              {obj.links.Github.length !== 1 && <a href={obj.links.Github[0]} target="_blank">Github-Frontend</a>}
              {obj.links.Github.length !== 1 && <a href={obj.links.Github[1]} target="_blank">Github-Backend</a>}
            </div>
          </div>
          <div className="projects-card-bottom-div">
            <h3 style={{textAlign: index % 2 !== 0 ? "start" : "end"}}>{obj.name}</h3>
            <span>
              <p>{obj.about}</p>
            </span>       
            <span style={{fontSize: "small"}}>
              {obj.techStack.map((item, tsIndex) => (
                <p key={tsIndex}>{item}</p>
              ))}
            </span>
          </div>
        </div>
      ))}
      <button onClick={() => handleClickShow()}>{showLess ? "Show more" : "Show less"}</button>
    </div>
  )
}

export default ProjectsShowcase