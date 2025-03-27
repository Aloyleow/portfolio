import React from "react";

type ContactScreenProps = {
  formInput: FormInput;
  showInput: number;
}

const ContactScreen: React.FC<ContactScreenProps> = ({ formInput, showInput }) => {
  return (
    <div className="contact-screen-div1">
      <div>
        <h4>To: aloyleow91@gmail.com</h4>
        <h4>Copy to (CC):</h4>
        <h4>Subject: Hi!</h4>
      </div>
      <div className="contact-showInput-div">
        <p className={showInput === 0 ? "custom-cursor" : ""}>Hi I am, {formInput.who}</p>
        <p className={showInput === 1 ? "custom-cursor" : ""}>{formInput.what}</p>
        {showInput === 2 && <p className={showInput === 2 ? "custom-cursor" : ""}>You can contact me at, {formInput.how}</p>}
      </div>
    </div>
  )
}

export default ContactScreen