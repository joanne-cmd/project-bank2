import React, { useState, useContext} from "react";
import { ProjectBankContext } from "../Projectbankcont";
import "./admincontact.css";
import AdminSidebar from "./adminsidebar";
import { Link } from "react-router-dom";
function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const {apiUrl}=useContext(ProjectBankContext)

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to server or API
  };
  return (
    <>
      <AdminSidebar />

      <h1 className="title">Contact us</h1>

      <div className="contacts">
        <div className="sidecontact">
          <h1>GET IN TOUCH</h1>
          <p>
            We believe that quality education should be accessible to all who
            want to learn regardless of their financial circumstances.
          </p>
        </div>

        <div className="contact__form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">Full Name:</label>
              <input
                className="input__space"
                type="text"
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                className="input__space"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                className="input__space"
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                className="input__space"
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
              />
            </div>
            <button className="submit submit-button" type="submit">
              Submit
            </button>
            <Link to="/">
              <div className="redirect">
                <button className="submit goback-button" type="submit">
                  Go Back
                </button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
