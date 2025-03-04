import { useState } from "react"

const HomeButtons = () => {

  const [links] = useState(["Skills", "Projects", "Work Experience", "Education", "Contact"])
  
  const handleClick = () => {

    
  }

  return (
    <div className="hp-hb-div">
      {links.map((item, index) => (
        <button key={index}>
          {item}
        </button>
      ))}
    </div>
  )
}

export default HomeButtons