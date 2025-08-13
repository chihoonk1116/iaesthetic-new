import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './contactForm.scss'
import CrossStarParticles from "../particles/CrossStarParticles";

const ContactForm = () => {
  const formRef = useRef(null);
  const [btnText, setBtnText] = useState("Send Message");
  const [btnClass, setBtnClass] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fss9xj", // EmailJS service ID
        "template_nfziuj6", // EmailJS template ID
        formRef.current,
        {
          publicKey: "wkT920lmiKPDZklaF",
        }
      )
      .then(
        () => {
          setBtnText("Success!");
          setBtnClass("success-btn");
          setIsDisabled(true);
          resetInput();
        },
        () => {
          setBtnText("Sorry, Try Later..");
          setBtnClass("fail-btn");
          setIsDisabled(true);
        }
      );
  };

  const resetInput = () => {
    if (formRef.current) {
      formRef.current.reset();
      formRef.current.message.value =
        "We'll contact you back as soon as possible!";
    }
  };

  return (
    <section className="contactform-section">
      <div className="container">
        <div className="left">
          <img src="/assets/images/logo.png" alt="" />
        </div>
        <div className={`form-wrapper ${isDisabled && 'sent-email'}`}>
          <CrossStarParticles blinkProbability={0} count={70} />
          <h2>Let's chat skin</h2>
          <form
            ref={formRef}
            id="contact-form"
            onSubmit={handleSubmit}
          > 
            <div className="input-wrapper">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="title">Title:</label>
              <input type="text" name="title" placeholder="Title" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="message">Message</label>
              <textarea name="message" placeholder="Message" required />
            </div>
              <button
                id="submit-btn"
                type="submit"
                className={btnClass}
                disabled={isDisabled}
              >
                {btnText}
              </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
