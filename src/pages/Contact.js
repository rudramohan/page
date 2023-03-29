import React from 'react'
import Layout from '../component/Layout/Layout'
const Contact = () => {
  return (
    <div>
      <Layout/>
      <h2></h2>
      <div className='email'>
        <div><h2>Get News & Offers</h2></div>
        <div className='emailsub'><input type="email"></input>
        <button type="submit"></button></div>
      </div>
      <div className='contact'>
        <div>
          <h2>Location</h2>
          <p>12 Király Street</p>
          <p>1054, Budapest, Hungary</p>
        </div>
        <div>
          <h2>Hours</h2>
          <p>Tue – Thu, 8 am – 10 pm</p>
          <p>Fri – Sun, 8 am – 11 pm</p>
          <p>Closed Mondays</p>
        </div>
        <div>
          <h2>Contact</h2>
          <p>(512) 555-0110</p>
          <p>mohanrudra95155@gmail.com</p>
        </div>
      </div>
    </div>
    
  )
}

export default Contact
