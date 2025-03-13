import { projectsData } from "../services/content"

const ProjectsShowcase = () => {

  return (
    <div className="projects-div1">
      {projectsData.map((obj, index) => (
        <div key={index} className="projects-card-div" style={{flexDirection: index % 2 !== 0 ? "row" : "row-reverse"}}>
          <div className="projects-card-top-div" >
            <img src={obj.image} alt={`project${obj.index}`} className="imageTest" />
            <div className="projects-links-div">
              {obj.links.Weblink !== "" && <a href={obj.links.Weblink} target="_blank">Web</a>}
              {obj.links.Github.length === 1 && <a href={obj.links.Github[0]} target="_blank">Github</a>}
              {obj.links.Github.length !== 1 && <a href={obj.links.Github[0]} target="_blank">Github-Frontend</a>}
              {obj.links.Github.length !== 1 && <a href={obj.links.Github[1]} target="_blank">Github-Backend</a>}
            </div>
          </div>
          <div>
            <div>
              <h3>{obj.name}</h3>
            </div>
            <div>
              <p>{obj.about}</p>
            </div>
            <div>
              {obj.techStack.map((item, tsIndex) => (
                <p key={tsIndex}>{item}</p>
              ))}
            </div>
            
          </div>
        </div>
      ))}

    </div>
  )
}

export default ProjectsShowcase