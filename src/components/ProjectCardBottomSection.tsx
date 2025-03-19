import React from "react"

type ProjectCardBottomSectionProps = {
  obj: ProjectData;
}

const ProjectCardBottomSection: React.FC<ProjectCardBottomSectionProps> = ({ obj }) => {

  return (
    <div className="projects-card-bottomSection">
      <div className="projects-about-div">
        <p>{obj.about}</p>
      </div>
      <div className="projects-tech-div">
        {obj.techStack.map((item, tsIndex) => (
          <p key={tsIndex}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default ProjectCardBottomSection