import { useState } from "react"
import ContactScreen from "../components/ContactScreen"
import SectionHeading from "../components/SectionHeading"
import ContactForm from "../components/ContactForm"
import ContactFormSuccess from "../components/ContactFormSucess"
import ContactFormError from "../components/ContactFormError"


const ContactSection = () => {
  const [showInput, setShowInput] = useState<number>(0)
  const [formInput, setFormInput] = useState<FormInput>({
    who: "",
    what: "",
    how: ""
  })
  const [success, setSuccess] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [otherError, setOtherError] = useState<boolean>(false);

  return (
    <section id="contact">
      <SectionHeading>Get in touch!</SectionHeading>
      <ContactScreen formInput={formInput} showInput={showInput} />
      {!success && !submitting && !otherError &&
        <ContactForm
          formInput={formInput}
          setFormInput={setFormInput}
          showInput={showInput}
          setShowInput={setShowInput}
          setSuccess={setSuccess}
          setSubmitting={setSubmitting}
          setOtherError={setOtherError}
        />
      }
      {success && !otherError &&
        <ContactFormSuccess
          submitting={submitting}
        />
      }
      {otherError && <ContactFormError />}
    </section>
  )
}

export default ContactSection