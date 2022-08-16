import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className='logo'>
        <a href='/'>
          <h1>
            Matt Bowen | <span className='logo2'>Portfolio</span>
          </h1>
        </a>
      </div>
      <ul className='menu'>
        <li>
          <a className='menuItem' href='#hero'>
            About
          </a>
        </li>
        <li>
          <a className='menuItem' href='#projects'>
            Projects
          </a>
        </li>
        <li>
          <a className='menuItem' href='#contact'>
            Contact
          </a>
        </li>
      </ul>
      <button className='hamburger'>
        <i className='menuIcon material-icons'>menu</i>
        <i className='closeIcon material-icons'>close</i>
      </button>
    </nav>
  );
}
