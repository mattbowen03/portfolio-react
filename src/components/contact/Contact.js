import React from "react";

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <div>
        <h1>Contact</h1>
        <div className='row'>
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
        </div>
      </div>
    </section>
  );
}
