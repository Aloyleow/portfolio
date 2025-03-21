import React, { useState } from "react"
import ContactFormButtons from "./ContactFormButtons";

type ContactFormProps = {
  setFormInput: React.Dispatch<React.SetStateAction<FormInput>>;
  formInput: FormInput;
  showInput: number;
  setShowInput: React.Dispatch<React.SetStateAction<number>>;
}

const ContactForm: React.FC<ContactFormProps> = ({ formInput, setFormInput, showInput, setShowInput }) => {
  const [errorAnimate, setErrorAnimate] = useState<boolean>(false)
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, inputId: string) => {
    event.preventDefault()
    setFormInput({ ...formInput, [inputId]: event.target.value })
  }

  return (
    <div>
      <form>
        {showInput === 0 &&
          <input 
            type="text" 
            id="who" 
            placeholder="Name / Company: " 
            onChange={(event) => handleChange(event, event.target.id)}
            maxLength={50}
            className={errorAnimate ? "inputError" : ""} 
          />
        }
        {showInput === 1 &&
          <input 
            type="text" 
            id="what"
            placeholder="Message: "
            onChange={(event) => handleChange(event, event.target.id)}
            maxLength={120}
            className={errorAnimate ? "inputError" : ""}   
          />
        }
        {showInput === 2 &&
          <input 
            type="text" 
            id="how" 
            placeholder="Contact Info: "
            onChange={(event) => handleChange(event, event.target.id)}
            maxLength={50}
            minLength={8}
            className={errorAnimate ? "inputError" : ""}  
          />
        }
      </form>
      <ContactFormButtons 
        formInput={formInput} 
        setFormInput={setFormInput} 
        showInput={showInput} 
        setShowInput={setShowInput}
        setErrorAnimate={setErrorAnimate}
      />
    </div>
  )
}

export default ContactForm