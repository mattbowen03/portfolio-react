import React from "react";
import placeholder from "../../images/370-150.jpg";
import favRecords from "../../images/fav-records.jpg";
import redditClient from "../../images/reddit-client.jpg";
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
        <div className='projContainer proj3'>
          <h2>Cuppett Psychology</h2>
          <img src={cuppettPsychology} alt='' />
          <p>
            I designed and developed this static site for Cuppett Psychology
            Group. I used React and utilized react-router to handle rendering
            components from the url.
          </p>
        </div>
      </div>

      <div
        className={visibility === "HIDDEN" ? "showRow2 row row1" : "row row1"}>
        <div className='projContainer proj4'>
          <h2>Project 4</h2>
          <img src={placeholder} alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
            dolore eos iusto.
          </p>
        </div>
        <div className='projContainer proj5'>
          <h2>Project 5</h2>
          <img src={placeholder} alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
            dolore eos iusto.
          </p>
        </div>
        <div className='projContainer proj6'>
          <h2>Project 6</h2>
          <img src={placeholder} alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
            dolore eos iusto.
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
