import React from "react";
import headShot from "../../images/headShot-Square.jpg";
import gitHubIcon from "../../images/bxl-github.svg";
import linkedInIcon from "../../images/bxl-linkedin-square.svg";

export default function Hero() {
  return (
    <section className='hero' id='hero'>
      <div className='row'>
        <div className='heroLeft'>
          <h1>About Me</h1>
          <h2 className='fadeinUp'>
            I'm Matt, your friendly neighborhood web developer. I'm experienced
            in JavaScript, React, Redux, HTML, and CSS. How can I help you?
          </h2>
          <a
            href='https://github.com/mattbowen03'
            target='_blank'
            rel='noreferrer'>
            <img src={gitHubIcon} alt='Link to github' />
          </a>
          <a
            href='https://www.linkedin.com/in/matt-bowen-b12a7764/'
            target='_blank'
            rel='noreferrer'>
            <img src={linkedInIcon} alt='Link to LinkedIn' />
          </a>
          <p>
            817-899-2696 |{" "}
            <a href='mailto:mattbowen03@gmail.com'>mattbowen03@gmail.com</a>
          </p>
          {/* <button
            className='resume'
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1ZJc8TW2dQdNmhPa_u29QMrYx_g0ovroty1eUvdT5AUQ/edit?usp=sharing"
              )
            }>
            VIEW MY RESUME
          </button> */}
          {/* <button className='resume'>
            <a className='view-projects' href='#projects'>
              VIEW MY PROJECTS
            </a>
          </button> */}
        </div>
        <div className='heroRight'>
          <img
            className='headShot'
            src={headShot}
            alt='Matt Bowen'
            rel='noreferrer'
          />
        </div>
      </div>
    </section>
  );
}
