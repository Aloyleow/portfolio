import React from "react"

type SectionHeadingProps = {
  children: React.ReactNode
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return(
    <div className="heading-div">
      <h2>{ children }</h2>
    </div>
  )
}
export default SectionHeading