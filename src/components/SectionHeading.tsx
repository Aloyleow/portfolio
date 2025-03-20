import React from "react"

type SectionHeadingProps = {
  children: React.ReactNode
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return(
    <div className="heading-div">
      <p>{ children }</p>
    </div>
  )
}
export default SectionHeading