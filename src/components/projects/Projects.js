import React from "react";
import placeholder from "../../images/370-150.jpg";
import { useState } from "react";

export default function Projects() {
  const [visibility, setVisibility] = useState("HIDDEN");

  return (
    <section className='projects' id='projects'>
      <div className='projectsTitle'>
        <h1>Projects</h1>
      </div>
      <div className='row row1'>
        <div className='projContainer proj1'>
          <h2>Favorite Records</h2>
          <img src={placeholder} alt='' />
          <p>
            This application was built with React. It accesses the discogs.com
            API of a user and displays their record library in a carousel.{" "}
          </p>
        </div>
        <div className='projContainer proj2'>
          <h2>Spotify Playlist</h2>
          <img src={placeholder} alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
            dolore eos iusto.
          </p>
        </div>
        <div className='projContainer proj3'>
          <h2>Cuppett Psychology</h2>
          <img src={placeholder} alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
            dolore eos iusto.
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
