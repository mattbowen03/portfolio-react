import React from "react";
import headShot from "../../images/headShot-Square.jpg";
import gitHubIcon from "../../images/github-logo-48.png";
import linkedInIcon from "../../images/linkedin-square-logo-48.png";
import twitterIcon from "../../images/twitter-logo-48.png";

export default function Hero() {
  return (
    <section className='hero' id='hero'>
      <div className='row'>
        <div className='heroLeft'>
          <h1>About Me</h1>
          <h2 className='fadeinUp'>
            I need to tweak this... Hello, I'm Matt! I am a developer in Fort
            Worth, Texas. I create web applications for clients of all sizes. As
            a self-motivated serial-learner, I love to tackle new challenges and
            provide creative solutions for my clients. I am experienced in
            JavaScript, React, Redux, HTML, and CSS.{" "}
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
