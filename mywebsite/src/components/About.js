import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div>
      <ul className="about">
        <li className="about__list">
          Hello, I am Paul Prokopy and I am a Full Stack Software Engineer.
        </li>
        <li className="about__list">
          A little about myself. I am an eight-year veteran of the United States
          Army, where I served as an Infantry Squad Leader, supervising eleven
          personnel, along with being responsible for and maintaining over
          $5,000,000 worth of equipment.
        </li>
        <li className="about__list">
          My interests in computers began in 2014 when I began PC gaming, from
          there my love of learning and tinkering got me to begin building
          them. I became very interested in how they work, both on a software
          and hardware level. This interest led me to attending Galvanize Inc’s
          Operation Level Up Web Development Immersive program. This course
          taught me from the ground up how to develop the full stack.
        </li>
        <li className="about__list">
          After graduating from the course, I was offered an Internship with
          Galvanize as a Software Engineering Intern. I completed the internship
          and learned a plethora of skills, and gained a lot of experience
          during the internship.
        </li>
        <li className="about__list">Proficiencies- </li>
        <li className="about__list">
          Frontend - Javascript, React.JS, JQuery, Bootstrap, HTML5, CSS3
          w/Flexbox & Grid
        </li>
        <li className="about__list">
          Backend – Node.JS w/Express.JS, MySQL, AWS Cognito, Google Firebase
        </li>
        <li className="about__list">GIT, AGILE Workflow, RESTful API</li>
      </ul>
    </div>
  );
};

export default About;
