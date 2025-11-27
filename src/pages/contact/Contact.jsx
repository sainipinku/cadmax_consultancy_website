import React from 'react'
import './Contact.css'
import Navbar from '../../components/Layout/Header/Navbar'
import Footer from '../../components/Layout/Footer/Footer'
import heroBG from '../../assets/Images/contact/Rectangle_40.png'


const Contact = () => {
  return (
    <>
<Navbar/> 

      {/* HERO */}
      <div className="contact-hero" style={{ backgroundImage: `url(${heroBG})` }}></div>

{/* CONTACT SECTION */}
<div className="contact-section">

  {/* LEFT BOX */}
  <div className="contact-left">
    <h3>CONTACT CADMAX WITHOUT INTERMEDIARIES</h3>
    <p>
      Communication enters directly into engineering, surveying and planning teams.
      No layers, no filtering, no delay. This structure keeps decisions fast,
      instructions accurate and project cycles predictable.
    </p>

    <h4>ADDRESS</h4>
    <p>
      301–302, Prism Tower, Lalkothi Scheme, Opp. Police Headquarters,  
      Nehru Place, Tonk Road, Jaipur 302015
    </p>

    <h4>PHONE</h4>
    <p>0141-411-3111</p>

    <h4>EMAIL</h4>
    <p>CONSULTANCY@CADMAX.CO.IN</p>
  </div>

  {/* RIGHT BOX */}
  <div className="contact-right">
    <h3>GET IN TOUCH WITH US</h3>

    <input type="text" placeholder="FULL NAME" />
    <input type="email" placeholder="EMAIL" />
    <input type="text" placeholder="PHONE" />
    <textarea placeholder="MESSAGE"></textarea>

    <button className="submit-btn">SUBMIT</button>
  </div>

</div>

{/* MAP SECTION */}
<div className="contact-map">
  <iframe
    title="office-location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.325029709002!2d75.79034407519299!3d26.89320787665808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db51ffc35283f%3A0xca00e02cd8cbbd51!2sPrism%20Tower%2C%20Lalkothi%2C%20Jaipur%2C%20Rajasthan%20302015!5e0!3m2!1sen!2sin!4v1702887345678"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


    
    
    <Footer/>
    </>
  )
}

export default Contact ;