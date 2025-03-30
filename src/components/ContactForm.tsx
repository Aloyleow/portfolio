import React, { useState } from "react"
import ContactFormButtons from "./ContactFormButtons";
import ContactFormSuccess from "../components/ContactFormSucess"
import ContactFormError from "../components/ContactFormError"
import ContactFormSubmitting from "../components/ContactFormSubmitting"

type ContactFormProps = {
  setFormInput: React.Dispatch<React.SetStateAction<FormInput>>;
  formInput: FormInput;
  showInput: number;
  setShowInput: React.Dispatch<React.SetStateAction<number>>;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formInput,
  setFormInput,
  showInput,
  setShowInput,
}) => {
  const [errorAnimate, setErrorAnimate] = useState<boolean>(false)
  const [hpInput, setHpInput] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [otherError, setOtherError] = useState<boolean>(false);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, inputId: string) => {
    setFormInput({ ...formInput, [inputId]: event.target.value })
  }

  return (
    <div className="contact-form-div1">
      {!success && !submitting && !otherError &&
      <div>
        <form id="contact-form" name="contact-form">
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
          <input
            className="hpInput"
            onChange={(event) => setHpInput(event.target.id)}
          />
        </form>
        <ContactFormButtons
          formInput={formInput}
          showInput={showInput}
          setShowInput={setShowInput}
          setErrorAnimate={setErrorAnimate}
          setSubmitting={setSubmitting}
          setSuccess={setSuccess}
          hpInput={hpInput}
          setOtherError={setOtherError}
        />
      </div>}
      {submitting && <ContactFormSubmitting/>}
      {success && <ContactFormSuccess/>}
      {otherError && <ContactFormError />}
    </div>
  )
}

export default ContactForm