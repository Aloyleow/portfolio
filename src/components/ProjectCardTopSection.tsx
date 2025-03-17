import React from "react"

type ProjectCardTopSectionProps = {
  obj: ProjectData
}

const ProjectCardTopSection: React.FC<ProjectCardTopSectionProps> = ({ obj }) => {
  return (
    <div className="projects-card-topSection" >
      <div className="projects-img-div">
        <img src={obj.image} alt={`project${obj.index}`} />
      </div>
      <div className="projects-links-div">
        {obj.links.Weblink !== "" && <a href={obj.links.Weblink} target="_blank"><img src="/weblinkWhite.svg" width={30}></img></a>}
        {obj.links.Github.length === 1 && <a href={obj.links.Github[0]} target="_blank">Github</a>}
        {obj.links.Github.length > 1 && <a href={obj.links.Github[0]} target="_blank">Github-Frontend</a>}
        {obj.links.Github.length > 1 && <a href={obj.links.Github[1]} target="_blank">Github-Backend</a>}
      </div>
    </div>
  )
}

export default ProjectCardTopSection