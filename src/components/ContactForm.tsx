import React, { useState } from "react"

type ContactFormProps = {
  setFormInput: React.Dispatch<React.SetStateAction<FormInput>>;
  formInput: FormInput;
}

const ContactForm: React.FC<ContactFormProps> = ({ formInput, setFormInput }) => {
  const [showInput, setShowInput] = useState<number>(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, inputId: string) => {
    event.preventDefault()
    setFormInput({ ...formInput, [inputId]: event.target.value })
  }

  const handleButtons = (item: string) => {
    if (item === "negative"){
      setShowInput(showInput - 1)
    } else if (item == "positive"){
      setShowInput(showInput + 1)
    } 
  }

  return (
    <div>
      <form>
        {showInput === 0 &&
          <input type="text" id="who" onChange={(event) => handleChange(event, event.target.id)} />
        }
        {showInput === 1 &&
          <input type="text" id="what" onChange={(event) => handleChange(event, event.target.id)} />
        }
        {showInput === 2 &&
          <input type="text" id="how" onChange={(event) => handleChange(event, event.target.id)} />
        }
      </form>
      <div>
        {showInput !== 0 &&
          <button onClick={() => handleButtons("negative")}>Previous</button>
        }
        {showInput !== 2 &&
          <button onClick={() => handleButtons("positive")}>Next</button>
        }
        {showInput === 2 &&
          <button>Submit</button>
        }
      </div>
    </div>
  )
}

export default ContactForm