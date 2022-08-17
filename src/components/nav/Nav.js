import React from "react";
import { useState } from "react";
import menuIcon from "../../images/bx-menu.svg";
import closeIcon from "../../images/bx-x.svg";

export default function Nav() {
  const [menuVisibility, setMenuVisibility] = useState("HIDDEN");

  return (
    <nav>
      <div className='logo'>
        <a href='/'>
          <h1>
            Matt Bowen | <span className='logo2'>Portfolio</span>
          </h1>
        </a>
      </div>
      <ul className={menuVisibility === "HIDDEN" ? "menu" : "menu showMenu"}>
        <li
          onClick={() => {
            if (menuVisibility === "SHOW") {
              setMenuVisibility("HIDDEN");
            }
          }}>
          <a className='menuItem' href='#hero'>
            About
          </a>
        </li>
        <li
          onClick={() => {
            if (menuVisibility === "SHOW") {
              setMenuVisibility("HIDDEN");
            }
          }}>
          <a className='menuItem' href='#projects'>
            Projects
          </a>
        </li>
        <li
          onClick={() => {
            if (menuVisibility === "SHOW") {
              setMenuVisibility("HIDDEN");
            }
          }}>
          <a className='menuItem' href='#contact'>
            Contact
          </a>
        </li>
      </ul>
      <button
        onClick={() => {
          if (menuVisibility === "HIDDEN") {
            setMenuVisibility("SHOW");
          } else {
            setMenuVisibility("HIDDEN");
          }
        }}
        className='hamburger'>
        <img
          src={menuVisibility === "HIDDEN" ? menuIcon : closeIcon}
          className='menuIcon material-icons'
          alt=''
        />
      </button>
    </nav>
  );
}
