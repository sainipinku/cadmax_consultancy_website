import React, { useEffect, useRef } from 'react';
import './Accuracy.css';
import image from "../../../assets/Images/Other/Rectangle 48.png";

const Accuracy = () => {

  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          } else {
            entry.target.classList.remove("animate-show"); // repeat animation
          }
        });
      },
      { threshold: 0.1 } // better for mobile
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mb-5 accuracy-section">
      <div className="row align-items-center g-5">

        {/* LEFT TEXT */}
        <div className="col-md-6 accuracy-text" ref={textRef}>
          <h2>How CADMAX Maintains Accuracy</h2>
          <p>
            CADMAX operates on a workflow built to eliminate uncertainty at every stage.
            Field data is captured through automated electronic systems to remove variance
            and human-dependent inconsistencies. GPS and DGPS receivers lock positional
            accuracy to a consistent standard, ensuring every point collected reflects
            real-world conditions without drift. All processing moves through CAD-driven
            environments, preventing manual drafting errors and preserving fidelity from
            field to final drawing. The team’s experience across large-scale urban,
            industrial and infrastructure projects reinforces this accuracy, enabling
            decisions grounded in years of operational judgment.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-md-6 text-center accuracy-img-wrapper" ref={imageRef}>
          <img 
            src={image}
            className="img-fluid accuracy-image"
            alt="Accuracy"
          />
        </div>

      </div>
    </div>
  );
};

export default Accuracy;
