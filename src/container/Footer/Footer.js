import React, { useState } from "react";

import { images } from "../../Constansts";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    StampDate:"",
    name: "",
    email: "",
    phone: "",
    date:"",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorFound, setErrorFound] = useState(false);
  

  const [loading, setLoading] = useState(false);

  const {  username, email,phone, date, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
   

    if(!username && !email && !phone && !date){
      setErrorFound(true);
      return;
    }
     setLoading(true);
    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => 
      console.log(err));
  };
return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:yaredyacob88@gmail.com" className="p-text">
            Send Email
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (403) 561-9596" className="p-text">
            +1 (403) 561-9596
          </a>
        </div>
      </div>
      {errorFound ? (
      <h3 className="error"> Please fill all mandatory field</h3>
      ):( 
        <h2 className="head-text">Contact</h2>
      )
      }
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          {/* <h4 className="head-text"> To make contact or Booking</h4> */}
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name*"
              name="username"
              value={username}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email*"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>

          <div className="app__flex">
            <input
              className="p-text"
              type="phone"
              placeholder="Your Phone Number"
              name="phone"
              value={phone}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="date"
              placeholder="Your Occasion Date"
              name="date"
              value={date}
              onChange={handleChangeInput}
              required
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primary"
);
