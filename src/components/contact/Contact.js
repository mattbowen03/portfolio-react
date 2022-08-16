import React from "react";

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <div>
        <h1>Contact</h1>
        <form
          action='https://formsubmit.co/04cab4112ae61785173536b99e068c73'
          method='POST'>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
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
