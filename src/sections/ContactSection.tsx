import { useState } from "react"
import ContactScreen from "../components/ContactScreen"
import SectionHeading from "../components/SectionHeading"
import ContactForm from "../components/ContactForm"


const ContactSection = () => {
  const [formInput, setFormInput] = useState<FormInput>({
    who: "",
    what: "",
    how: ""
  })

  return(
    <section id="contact">
      <SectionHeading>Get in touch!</SectionHeading>
      <ContactScreen formInput={formInput}/>
      <ContactForm formInput={formInput} setFormInput={setFormInput}/>
    </section>
  )
}

export default ContactSection