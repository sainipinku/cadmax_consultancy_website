import React, { useEffect, useRef, useState } from 'react';
import './Accuracy.css';
import image from "../../../assets/Images/Other/Accuracy-min.jpg";

const Accuracy = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Read More State
  const [expanded, setExpanded] = useState(false);

  // Full Text
  const fullText = `
    We build trust before we build structures. That’s the CadMax difference.Customers choose CadMax because we turn complex ideas into precise, buildable designs—on time, every time.CadMax: Where accuracy meets creativity. Trusted by clients who value quality, innovation, and flawless execution.We don’t just design spaces—CadMax designs solutions. That’s why clients trust us to deliver excellence from concept to completion.CadMax stands out for our attention to detail, advanced CAD technology, and commitment to client satisfaction.From 2D to 3D perfection—customers choose CadMax for designs that are accurate, clear, and construction-ready.Because CadMax delivers plans that save time, reduce errors, and cut construction costs.Smart designs, smooth construction—CadMax makes building easier.CadMax combines industry expertise with cutting-edge technology to bring your vision to life.Clients choose CadMax for our fast turnaround, top-tier accuracy, and designs engineered for real-world success.
  `;

  const previewLength = 736;      // content show part
  const isLongText = fullText.length > previewLength;
  const shownText = expanded ? fullText : fullText.slice(0, previewLength);

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
