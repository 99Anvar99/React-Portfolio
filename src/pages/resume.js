import React from 'react';
import '../styles/resume.css';

function Resume() {
  return (
    <div className="resume">
      <h1>
      Download My
        <a
          id="resume-link"
          href="/path-to-resume.pdf" // will be replaced with actual link resume soon
          download="my-resume.pdf"
        >
           ‎ Resume
        </a>
      </h1>
      <br></br>
      <ol className="list">
        <li className="item">
          <h2>Front-End</h2>
          <span>
            Javascript, HTML, CSS, React, Bootstrap, Material-UI, jQuery
          </span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>
            Node, Express, MongoDB, MySQL, Sequelize, Mongoose, Handlebars
          </span>
        </li>
        <li className="item">
          <h2>Languages And Tools</h2>
          <span>
            C++, C#, C, HTML, CSS, Express, .Net, Java, Javascript, MongoDB, MySQL, Node, React
          </span>
        </li>
      </ol>
    </div>
  );
}

export default Resume;
