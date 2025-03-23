import React from "react";

type ContactFormSuccessProps = {
  submitting: boolean;
}

const ContactFormSuccess: React.FC<ContactFormSuccessProps> = ({ submitting }) => {
  return (
    <div>
      {submitting ?
        <div className="submit-loader">
        </div>
        :
        <div>
          <h3>I have recieved your email and will get back to you shortly!</h3>
        </div>
      }
    </div>
  )
}

export default ContactFormSuccess