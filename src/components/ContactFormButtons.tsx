import React, { useState } from "react";
import emailjs from '@emailjs/browser';

type ContactFormButtonsProps = {
  setFormInput: React.Dispatch<React.SetStateAction<FormInput>>;
  formInput: FormInput;
  showInput: number;
  setShowInput: React.Dispatch<React.SetStateAction<number>>;
  setErrorAnimate: React.Dispatch<React.SetStateAction<boolean>>;
  hpInput: string;
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactFormButtons: React.FC<ContactFormButtonsProps> = ({ 
  formInput, 
  setFormInput, 
  showInput, 
  setShowInput, 
  setErrorAnimate,
  hpInput,
  setSubmitting,
  setSuccess 
}) => {
  
  const handleButtons = (item: string) => {

    setErrorAnimate(false)

    if (item === "negative") {
      setShowInput(showInput - 1)
    } else if (item == "positive") {

      if (showInput === 0 && formInput.who === "") {
        setErrorAnimate(true)
      } else if (showInput === 1 && formInput.what === "") {
        setErrorAnimate(true)
      } else {
        setShowInput(showInput + 1)
      }
    }
  }

  const handleSubmit = async () => {

    setErrorAnimate(false)

    try {

      if (formInput.how === "") {

        setErrorAnimate(true);

      } else if (hpInput !== "") {

        setSuccess(true);

      } else if (formInput.who !== "" && formInput.what !== "" && formInput.how !== "" && hpInput === "") {

        setSubmitting(true);
        setSuccess(true);

        const emailJsData = {
          user_name: formInput.who,
          message: formInput.what,
          contactemail: formInput.how
        }

        await emailjs.send(
          import.meta.env.VITE_EJS_SERVICE_ID,
          import.meta.env.VITE_EJS_TEMPLATE_IDFP,
          emailJsData,
          import.meta.env.VITE_EJS_PUBLIC_KEY,
        );

        setSubmitting(false);

      }

    } catch (error) {
      console.error(error)
    }

  };

  return (
    <div className="buttons-div">
      {showInput !== 0 &&
        <button onClick={() => handleButtons("negative")}>Previous</button>
      }
      {showInput !== 2 &&
        <button onClick={() => handleButtons("positive")}>Next</button>
      }
      {showInput === 2 &&
        <button onClick={() => handleSubmit()}>Submit</button>
      }
    </div>
  )
}
export default ContactFormButtons