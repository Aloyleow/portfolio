import { useState } from "react"
import ContactScreen from "../components/ContactScreen"
import SectionHeading from "../components/SectionHeading"
import ContactForm from "../components/ContactForm"
import ContactFormSuccess from "../components/ContactFormSucess"


const ContactSection = () => {
  const [showInput, setShowInput] = useState<number>(0)
  const [formInput, setFormInput] = useState<FormInput>({
    who: "",
    what: "",
    how: ""
  })
  const [success, setSuccess] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(true);

  return(
    <section id="contact">
      <SectionHeading>Get in touch!</SectionHeading>
      <ContactScreen formInput={formInput} showInput={showInput}/>
      {success ?
      <ContactFormSuccess submitting={submitting}/>
      :
      <ContactForm 
        formInput={formInput} 
        setFormInput={setFormInput} 
        showInput={showInput} 
        setShowInput={setShowInput}
        setSuccess={setSuccess}
        setSubmitting={setSubmitting}
      />
      }
    </section>
  )
}

export default ContactSection