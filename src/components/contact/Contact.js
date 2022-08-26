import React from "react";

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <div>
        <h1>Contact</h1>
        <form name='portfolio-contact-form' data-netlify='true' method='POST'>
          <input type='text' name='name' placeholder='Name' />
          <input type='email' name='email' placeholder='Email' />
          <textarea
            name='message'
            type='text'
            id=''
            cols='30'
            rows='10'
            placeholder='Enter your message...'
          />
          <input type='submit' value='Send' id='submitBtn' />
        </form>
      </div>
    </section>
  );
}
