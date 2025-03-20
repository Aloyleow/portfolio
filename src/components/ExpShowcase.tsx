import { exp } from "../services/content"

const ExpShowcase = () => {
  return (
    <div className="exp-div1">
      {exp.map((obj, index) => (
        <div key={index} className="exp-card-div">
          <div>
            <h3>{obj.name}</h3>
          </div>
          <div className="exp-card-role">
            <p>{obj.role}</p>
            <p>{obj.date}</p>
          </div>
          <div className="exp-card-about">
            <p>{obj.about}</p>
          </div>   
        </div>
      ))}

    </div>
  )
}

export default ExpShowcase