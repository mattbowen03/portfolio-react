import React from "react";
import headShot from "../../images/headShot-Square.jpg";
import gitHubIcon from "../../images/bxl-github.svg";
import linkedInIcon from "../../images/bxl-linkedin-square.svg";
import twitterIcon from "../../images/bxl-twitter.svg";

export default function Hero() {
  return (
    <section className='hero' id='hero'>
      <div className='row'>
        <div className='heroLeft'>
          <h1>About Me</h1>
          <h2 className='fadeinUp'>
            I'm Matt! Father, Musician, and now a Web Developer! In Spring 2022
            I got excited by Web Development and jumped in head first. I've
            spent the last 6 months taking courses, building projects, and
            teaching myself to code. Now I'm ready for new challenges and
            seeking a full time development role! I have experience in
            JavaScript, React, Redux, HTML, and CSS.
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
          <a
            href='https://twitter.com/mattbowen03'
            target='_blank'
            rel='noreferrer'>
            <img src={twitterIcon} alt='Link to Twitter' />
          </a>
          <p>
            817.899.2696 <br />
            <a href='mailto:mattbowen03@gmail.com'>mattbowen03@gmail.com</a>
          </p>
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
