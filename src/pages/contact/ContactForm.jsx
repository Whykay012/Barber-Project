import React from "react";
import { useContextFunc } from "../../functionalities/Context";

const ContactForm = () => {
  const {
    contactsubmitted,
    contactname,
    contactemail,
    contactsubject,
    contactcomment,
    contacterror,
    handleSubmitContact,
    handleChangeContact,
  } = useContextFunc();
  return (
    <div>
      {contactsubmitted ? (
        <p className="successful">Thank you! Your message has been sent.</p>
      ) : (
        <div className="inputs">
          <form onSubmit={handleSubmitContact}>
            <div>
              <textarea
                name="contactcomment"
                value={contactcomment}
                onChange={handleChangeContact}
                className="form-control"
                placeholder="Write Your Comment"
                required
              />
            </div>

            <div className="name-email">
              <div>
                <input
                  type="text"
                  name="contactname"
                  value={contactname}
                  onChange={handleChangeContact}
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  type="email"
                  name="contactemail"
                  value={contactemail}
                  onChange={handleChangeContact}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div>
              <select
                name="contactsubject"
                value={contactsubject}
                onChange={handleChangeContact}
                className="form-control"
                required
              >
                <option value="">Select a subject</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Business Inquiry">Business Inquiry</option>
              </select>
            </div>

            {contacterror && <p style={{ color: "red" }}>{contacterror}</p>}
            <button type="submit" className="form-btn">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
