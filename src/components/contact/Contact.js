import React from "react";

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className='contact-info-wrap'>
        <h1>Contact</h1>
        <h2>I'd love to see if I can help meet your needs. Let's chat!</h2>
        <div className='row'>
          <form name='contact' method='post'>
            <input type='hidden' name='form-name' value='contact' />

            <label>
              Your Name: <input type='text' name='name' />
            </label>

            <label>
              Your Email: <input type='email' name='email' />
            </label>

            <label>
              Message: <textarea name='message'></textarea>
            </label>

            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
