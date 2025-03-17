import React from "react"

type ProjectCardBottomSectionProps = {
  obj: ProjectData;
  index: number;
}

const ProjectCardBottomSection: React.FC<ProjectCardBottomSectionProps> = ({ obj, index }) => {
  return (
    <div className="projects-card-bottomSection">
      <h3 style={{ textAlign: index % 2 !== 0 ? "start" : "end" }}>{obj.name}</h3>
      <span>
        <p>{obj.about}</p>
      </span>
      <span>
        {obj.techStack.map((item, tsIndex) => (
          <p key={tsIndex}>{item}</p>
        ))}
      </span>
    </div> 
  )
}

export default ProjectCardBottomSection