import React, { useEffect, useRef, useState } from 'react';
import './Accuracy.css';
import image from "../../../assets/Images/Other/Accuracy.jpg";

const Accuracy = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Read More State
  const [expanded, setExpanded] = useState(false);

  // Full Text
  const fullText = `
     Architech Company’s CADMAX Accuracy represents a new benchmark in precision-driven design technology, engineered specifically for industries where even the smallest deviation can have large-scale consequences. Built on advanced computational geometry and next-generation CAD algorithms, CADMAX Accuracy enables architects, engineers, and construction specialists to produce highly detailed models with micron-level fidelity. Its intelligent error-correction engine continuously analyzes geometric relationships, detecting inconsistencies before they impact downstream planning or fabrication. The platform integrates seamlessly into digital project pipelines, supporting real-time collaboration, version control, and automated compliance checks with global building standards. By combining computational speed, data integrity, and ultra-fine measurement precision, Architech Company ensures that CADMAX Accuracy not only enhances design reliability but also significantly reduces rework, improves construction efficiency, and elevates overall project quality—making it a cornerstone solution for any organization committed to uncompromising accuracy in the built environment.
  `;

  const previewLength = 783;      // content show part
  const isLongText = fullText.length > previewLength;
  const shownText = expanded ? fullText : fullText.slice(0, previewLength) ;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          } else {
            entry.target.classList.remove("animate-show");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mb-4 accuracy-section">
      <div className="row align-items-center g-5">

        {/* LEFT TEXT */}
        <div className="col-md-6 accuracy-text" ref={textRef}>
          <h2>How CADMAX Maintains Accuracy</h2>
          <p>{shownText}</p>

          {isLongText && (
            <button
              className="read-more-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
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
