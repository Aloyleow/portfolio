import React from "react";

type ContactScreenProps = {
  formInput: FormInput;
}

const ContactScreen: React.FC<ContactScreenProps> = ({ formInput }) => {
  return (
    <div className="contact-screen-div1">
      <div>
        <h4>To: Aloysious Leow</h4>
        <h4>Copy to (CC):</h4>
        <h4>Subject: Hi!</h4>
      </div>
      <div>
        <p className="custom-cursor">Hi I am, {formInput.who}</p>
        <p>{formInput.what}</p>
        {formInput.how !== "" && <p>You can contact me at, {formInput.how}</p>}
      </div>
    </div>
  )
}

export default ContactScreen