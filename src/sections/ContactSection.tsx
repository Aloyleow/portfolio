import { useState } from "react"
import ContactScreen from "../components/ContactScreen"
import SectionHeading from "../components/SectionHeading"
import ContactForm from "../components/ContactForm"


const ContactSection = () => {
  const [showInput, setShowInput] = useState<number>(0)
  const [formInput, setFormInput] = useState<FormInput>({
    who: "",
    what: "",
    how: ""
  })

  return(
    <section id="contact">
      <SectionHeading>Get in touch!</SectionHeading>
      <ContactScreen formInput={formInput} showInput={showInput}/>
      <ContactForm formInput={formInput} setFormInput={setFormInput} showInput={showInput} setShowInput={setShowInput}/>
    </section>
  )
}

export default ContactSection