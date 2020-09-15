import React from "react";
import "../css/Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__amazon">
      <a href="https://clone-e0cbf.web.app" className="portfolio__nameA" id="1">
      Amazon Clone
          </a>
        <img
          src="https://i.imgur.com/Jp5edpX.png"
          alt=""
          className="portfolio__amazon2"
        ></img>
        <img
          src="https://i.imgur.com/9hapZw1.png"
          alt=""
          className="portfolio__amazon2"
        ></img>
      </div>
      <div className="portfolio__facebook">
          <h1 className="portfolio__nameF">Facebook Clone</h1>
        <img
          src="https://i.imgur.com/vf5UfLT.png"
          alt=""
          className="portfolio__facebook2"
        ></img>
        <img
          src="https://i.imgur.com/0uewwqm.png"
          alt=""
          className="portfolio__facebook2"
        ></img>
      </div>
    </div>
  );
};

export default Portfolio;
