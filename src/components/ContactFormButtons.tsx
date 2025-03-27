import React from "react";
import emailjs from '@emailjs/browser';
import { motion } from "motion/react";

type ContactFormButtonsProps = {
  formInput: FormInput;
  showInput: number;
  setShowInput: React.Dispatch<React.SetStateAction<number>>;
  setErrorAnimate: React.Dispatch<React.SetStateAction<boolean>>;
  hpInput: string;
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setOtherError: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactFormButtons: React.FC<ContactFormButtonsProps> = ({
  formInput,
  showInput,
  setShowInput,
  setErrorAnimate,
  hpInput,
  setSubmitting,
  setSuccess,
  setOtherError
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
      //Handle last form error
      if (formInput.how === "") {

        setErrorAnimate(true);
        //Handle honeypot
      } else if (hpInput !== "") {

        setSuccess(true);
        //Handle true submit
      } else if (formInput.who !== "" && formInput.what !== "" && formInput.how !== "" && hpInput === "") {

        setSubmitting(true);

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
        setSuccess(true);

      } else {

        setOtherError(true);

      }

    } catch (error) {

      if (error) {
        console.error("Please contact me at aloyleow91@gmail.com")
      }
      setSubmitting(false);
      setOtherError(true);

    }

  };

  return (
    <div className="buttons-div">
      {showInput !== 0 &&
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleButtons("negative")}
        >
          Previous
        </motion.button>
      }
      {showInput !== 2 &&
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleButtons("positive")}
        >
          Next
        </motion.button>
      }
      {showInput === 2 &&
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSubmit()}
        >
          Submit
        </motion.button>
      }
    </div>
  )
}
export default ContactFormButtons