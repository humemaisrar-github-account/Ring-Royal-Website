import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='conf'  data-aos="fade-down">
        <h2 className='headf'>
          Contact us
        </h2>
        <form  >
          <input type="text" placeholder='Enter your Name' required />
          <input type="email" placeholder='Enter your Email' required/>
          <input type="text" placeholder='Enter your Phone No' />
      <textarea  placeholder='Your Message'rows={4} required></textarea>
       <button type='submit' data-aos="fade-up">Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact