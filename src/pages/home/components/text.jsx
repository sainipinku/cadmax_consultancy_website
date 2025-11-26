import React, { useEffect } from 'react'
import './text.css'

const Textbox = () => {

  // ⭐ Scroll Repeat Animation
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".scroll-up, .scroll-left, .scroll-right"
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("scroll-active");  // Reset
            void entry.target.offsetWidth; // Reflow trick to restart animation
            entry.target.classList.add("scroll-active");     // Start animation
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="main">

      {/* 🔹 Top Big Text */}
      <div className="text-box scroll-up">
        <p>
          End-to-end engineering, surveying and planning workflows for construction,<br />
          infrastructure, industrial and township projects. All processes run on electronic <br />
          data collection, CAD drafting and modern positioning technology
        </p>
      </div>

      {/* 🔹 Bottom Text Row */}
      <div className='small-text'>

        <div className="first scroll-left">
          <p className="line1">
            Technical Services With Operational Depth
          </p>
        </div>

        <div className="second scroll-right">
          <p className="line2">
            Each discipline is handled by teams trained to convert field conditions into design-ready data.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Textbox
