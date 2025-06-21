import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //emailjs details
    const serviceId = "service_3n1yfxy";
    const templateId = "template_1jgoaom";
    const publicKey = "C7UF6NF4NaYk2ueZn";

    //create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    //send email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error while sending email:", error);
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
        <br />
        <p className="contact--heading">Let's get connected!</p>
        <br />
        <div className="mt-5 contact--heading">
          <h5 className="mb-3">
            {" "}
            <PhoneIcon />{" "}
            <span className="phone-number" style={{ marginLeft: "0.5rem" }}>
              +45 52 52 88 33
            </span>
          </h5>
          <h5 className="mb-3">
            {" "}
            <EmailIcon />{" "}
            <span className="phone-number" style={{ marginLeft: "0.5rem" }}>
              elgante.ce@gmail.com
            </span>
          </h5>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md"> Name</span>
            <input
              type="text"
              className="contact--input text-md"
              value={name}
              id="first-name"
              // placeholder="Type your name here"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              value={email}
              id="email"
              // placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            // placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
          {/*type="submit" is not needed while using js and emailJs or similar to emailjs*/}
        </div>
      </form>
    </section>
  );
}
