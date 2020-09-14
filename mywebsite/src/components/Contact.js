import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <ul className="contact__list">
        <li>
          <a href="https://www.linkedin.com/in/paul-prokopy" className="contact__links" id="1">
            LinkedIn - linkedin.com/in/paul-prokopy
          </a>
        </li>
        <li>
          <a href="https://www.github.com/proko8" className="contact__links" id="3">
            Github - github.com/proko8
          </a>
        </li>
        <li> Email - pprokopy@gmail.com</li>
      </ul>
    </div>
  );
};

export default Contact;
