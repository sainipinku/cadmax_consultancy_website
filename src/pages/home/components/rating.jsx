import React, { useEffect, useRef } from "react";
import "./rating.css";
import star from "../../../assets/icons/Rating_icon/Star 1.png";

const RatingPage = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // ⭐ HEADING ANIMATION (Repeat Every Time)
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-heading");
          } else {
            entry.target.classList.remove("animate-heading"); // RESET
          }
        });
      },
      { threshold: 0.3 }
    );
    if (headingRef.current) headingObserver.observe(headingRef.current);

    // ⭐ CARDS ANIMATION (One-by-one, repeatable)
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-card");
          } else {
            entry.target.classList.remove("animate-card"); // RESET
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => cardObserver.observe(card));

    return () => {
      headingObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <div className="rating-fluid">

      {/* HEADINGS */}
      <div className="rating-heading-row" ref={headingRef}>
        <h2 className="left-h slide-left">Proof of Performance</h2>
        <h3 className="right-h slide-right">
          Each discipline is handled by teams trained to convert field conditions into design-ready data.
        </h3>
      </div>

      {/* CARDS */}
      <div className="rating-container">
        {[0, 1, 2].map((v, i) => (
          <div
            key={i}
            className="rating-card"
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ "--delay": `${i * 0.25}s` }}
          >
            <div className="stars-row">
              {[1, 2, 3, 4, 5].map((s) => (
                <img key={s} src={star} alt="" />
              ))}
            </div>

            <p className="review-text">
              {i === 0 &&
                "“Reliable, fast and accurate. CADMAX resolves field issues without delay and maintains tight control over survey accuracy.”"}
              {i === 1 &&
                "“The dedication and professionalism exhibited by CADMAX is unmatched. Their insights streamline projects and improve efficiency.”"}
              {i === 2 &&
                "“With CADMAX's innovative solutions, we've reduced turnaround time significantly. Their expertise is a game-changer.”"}
            </p>

            <p className="reviewer-name">
              {i === 0 && "— N. Ganpathy Subramaniam, CEO"}
              {i === 1 && "— A. Stevens, Project Manager"}
              {i === 2 && "— L. Johnson, Operations Director"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingPage;
