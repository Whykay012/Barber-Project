import React from "react";
import LiveLocation from "./LiveLocation";
import blogImg from "../../assets/images/h1_hero1.jpg";
import ContactForm from "./ContactForm";
import { contactData } from "./contactData";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <div className="Element">
        <div className="hero-details">
          <h1>Contact</h1>
          <div className="hero-img">
            <img src={blogImg} alt="BLOG DETAILS HERO" />
          </div>
        </div>
      </div>

      <div className="map">
        <h1>Live Location Map</h1>
        <LiveLocation />
      </div>

      <div className="contact-form">
        <div className="contact-form-container">
          <h1>Get In Touch</h1>
          <ContactForm />
        </div>
        <div className="icon">
          {contactData.map((data, index) => {
            const { title, content } = data;
            return (
              <div key={index}>
                <div className="icon-display">
                  <div className="icons">
                    <data.icon />
                  </div>
                  <div className="text">
                    <h4>{content}</h4>
                    <p>{title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
