import { useState } from "react"

const HomeLinks = () => {

  const [links] = useState(["Skills", "Projects", "Experience", "Education", "Contact"])
   
  return (
    <div className="homeL-div">
      {links.map((item, index) => (
        <a key={index} href={`#${item.toLowerCase()}`}>
          {item}
        </a>
      ))}
    </div>
  )
}

export default HomeLinks