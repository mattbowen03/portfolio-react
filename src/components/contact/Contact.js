import React from "react";

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <div>
        <h1>Contact</h1>
        <form name='portfolio-contact-form' netlify method='POST'>
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
        <form name='contact' method='post'>
          <input type='hidden' name='form-name' value='contact' />
          <p>
            <label>
              Your Name: <input type='text' name='name' />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type='email' name='email' />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name='message'></textarea>
            </label>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </form>
        ,
      </div>
    </section>
  );
}
