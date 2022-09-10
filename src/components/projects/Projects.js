import React from "react";
import favRecords from "../../images/fav-records.jpg";
import redditClient from "../../images/reddit-client.jpg";
import mathHelper from "../../images/math-helper.jpg";
import cuppettPsychology from "../../images/cuppettpsychology.png";
import { useState } from "react";

export default function Projects() {
  const [visibility, setVisibility] = useState("HIDDEN");

  return (
    <section className='projects' id='projects'>
      <div className='projectsTitle'>
        <h1>Projects</h1>
      </div>
      <div className='row row1'>
        <div
          onClick={() => {
            window.open(
              "https://wondrous-stardust-104b6a.netlify.app/",
              "_blank"
            );
          }}
          className='projContainer proj1'>
          <h2>Favorite Records</h2>
          <img src={favRecords} alt='' />
          <p>
            I built this application with React. It accesses the discogs.com API
            of a user and displays their record library in a carousel.{" "}
          </p>
        </div>
        <div
          onClick={() => {
            window.open(
              "https://joyful-monstera-95cb34.netlify.app/",
              "_blank"
            );
          }}
          className='projContainer proj2'>
          <h2>Ryan's Reddits</h2>
          <img src={redditClient} alt='' />
          <p>
            I built this application with React-Redux. It accesses the Reddit
            API to display my friend Ryan's favorite sub-reddits.
          </p>
        </div>
        <div
          className='projContainer proj3'
          onClick={() => {
            window.open(
              "https://fantastic-sawine-1d84d5.netlify.app/",
              "_blank"
            );
          }}>
          <h2>Cuppett Psychology</h2>
          <img src={cuppettPsychology} alt='' />
          <p>
            I designed and developed this static site for Cuppett Psychology
            Group. I used React and utilized react-router to handle rendering
            components from the url. I am waiting on the client to submit some
            copy before I deploy to their domain.
          </p>
        </div>
      </div>

      <div
        className={visibility === "HIDDEN" ? "showRow2 row row1" : "row row1"}
        onClick={() => {
          window.open(
            "https://heartfelt-dieffenbachia-84ec7c.netlify.app/",
            "_blank"
          );
        }}>
        <div className='projContainer proj4'>
          <h2>Math Helper!</h2>
          <img src={mathHelper} alt='math helper logo' />
          <p>
            I created this little app for my 9yr old daughter to help her
            practice multiplication. I used React.
          </p>
        </div>
      </div>

      <div className='projDropDn'>
        <button
          id='projDropBtn'
          onClick={() => {
            if (visibility === "SHOW") {
              setVisibility("HIDDEN");
            } else {
              setVisibility("SHOW");
            }
          }}>
          {visibility === "SHOW" ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
}
