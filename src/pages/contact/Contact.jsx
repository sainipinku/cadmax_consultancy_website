import React, { useState } from 'react'
import './Contact.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Navbar from '../../components/Layout/Header/Navbar'
import Footer from '../../components/Layout/Footer/Footer'
import heroBG from '../../assets/Images/contact/contact-hero.png'
import API from '../../api/axios'   // 👈 axios instance

const Contact = () => {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await API.post("/inquiries", form);

      setSuccess("Your inquiry has been sent successfully!");

      // 🔹 2 seconds baad success message hata do
      setTimeout(() => {
        setSuccess("");
      }, 2500);

      setForm({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
      setError("Failed to send inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${heroBG})` }}
      >
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <h2>Where vision takes shape and structures stand strong —</h2>
          <p>
            delivering architecture built for beauty, function, and longevity.
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="contact-section">

        {/* LEFT BOX */}
        <div className="contact-left">
          <h3>BUILD YOUR DREAMS, WITH US</h3>
          <p>
            Contact CADMAX directly—no delays. Get clear communication,
            expert guidance, and personalized solutions straight from our
            team to bring your project to life with confidence.
          </p>

          <div className="follow-header">
            <h4>REACH US</h4>
            <span className="follow-line"></span>
          </div>

          {/* ADDRESS */}
          <div className="contact-info">
            <span className="icon">
              <FaMapMarkerAlt />
            </span>
            <div>
              <p>
                GROUND FLOOR-1,2,3 AND 302-3RD FLOOR, PRISM TOWER,
                OPP. RAJASTHAN POLICE HEADQUARTER, LAL KOTHI SCHEME,
                TONK ROAD, JAIPUR (RAJ.)
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="contact-info">
            <span className="icon">
              <FaPhoneAlt />
            </span>
            <div>
              <p>0141-411-3111</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="contact-info">
            <span className="icon">
              <FaEnvelope />
            </span>
            <div>
              <p>cadmaxconsultancy@gmail.com</p>
            </div>
          </div>

          {/* FOLLOW US */}
          <div className="contact-follow">
            <div className="follow-header">
              <h4>Follow Us</h4>
              <span className="follow-line"></span>
            </div>

            <div className="follow-icons">
              <a
                href="https://www.facebook.com/CadMaxProjectsJPR"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/cadmaxconsultancy/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/cadmax-projects-pvt-ltd/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT BOX – FORM */}
        <div className="contact-right">
          <h3>GET IN TOUCH WITH US</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="FULL NAME"
              value={form.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="PHONE"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="MESSAGE"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            {success && <p className="form-success text-white">{success}</p>}
            {error && <p className="form-error">{error}</p>}

            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? "SENDING..." : "SUBMIT"}
            </button>
          </form>
        </div>

      </div>

      {/* MAP SECTION */}
      <div className="contact-map w-full">
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.XXXXXX!2d75.7984772!3d26.8862782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUzJzEwLjYiTiA3NcKwNDcnNTQuNSJF!5e0!3m2!1sen!2sin!4v0000000000000"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  )
}

export default Contact
