import React, { useEffect, useRef, useState } from "react";
import "./rating.css";
import star from "../../../assets/icons/Rating_icon/Star 1.png";

const TOTAL = 6;
const VISIBLE = 3;

const RatingPage = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const [start, setStart] = useState(0); // <- starting index of visible group

  const nextSlide = () => {
    setStart((prev) => (prev + 1) % TOTAL);
  };

  const prevSlide = () => {
    setStart((prev) => (prev - 1 + TOTAL) % TOTAL);
  };

  // prepare 3 visible cards
  const getVisibleCards = () => {
    return [
      start,
      (start + 1) % TOTAL,
      (start + 2) % TOTAL,
    ];
  };

  const visibleCards = getVisibleCards();

  /* ⭐ Center card highlight */
  function activateCenterCard() {
    const cards = document.querySelectorAll(".rating-card");
    cards.forEach((c) => c.classList.remove("active"));

    if (cards[1]) cards[1].classList.add("active"); 
  }

  useEffect(() => {
    activateCenterCard();
  }, [start]);

  /* ⭐ Animations observer */
  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.4 }
    );

    if (headingRef.current) headingObserver.observe(headingRef.current);

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("card-show");
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => card && cardObserver.observe(card));

    return () => {
      headingObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <div className="rating-fluid">

      {/* BUTTONS */}
      <button className="nav-btn prev" onClick={prevSlide}>❮</button>
      <button className="nav-btn next" onClick={nextSlide}>❯</button>

      {/* HEADINGS */}
      <div className="rating-heading-row" ref={headingRef}>
        <h2 className="left-h slide-left">Proof of Performance</h2>
        <h3 className="right-h slide-right">
          Each discipline is handled by teams trained to convert field conditions into design-ready data.
        </h3>
      </div>

      {/* ⭐ FINAL FIXED CAROUSEL */}
      <div className="rating-container-fixed">
        {visibleCards.map((i, idx) => (
          <div
            key={idx}
            className="rating-card"
            ref={(el) => (cardsRef.current[idx] = el)}
          >
            <div className="stars-row">
              {[1, 2, 3, 4, 5].map((s) => (
                <img key={s} src={star} alt="" />
              ))}
            </div>

            <p className="review-text">
              {i === 0 && "“Reliable, fast and accurate. CADMAX resolves field issues without delay and maintains tight control over survey accuracy.”"}
              {i === 1 && "“The dedication and professionalism exhibited by CADMAX is unmatched. Their insights streamline projects and improve efficiency.”"}
              {i === 2 && "“With CADMAX's innovative solutions, we've reduced turnaround time significantly. Their expertise is a game-changer.”"}

              {i === 3 && "“Reliable, fast and accurate. CADMAX resolves field issues without delay and maintains tight control over survey accuracy.”"}
              {i === 4 && "“The dedication and professionalism exhibited by CADMAX is unmatched. Their insights streamline projects and improve efficiency.”"}
              {i === 5 && "“With CADMAX's innovative solutions, we've reduced turnaround time significantly. Their expertise is a game-changer.”"}
            </p>

            <p className="reviewer-name">
              {i === 0 && "— N. Ganpathy Subramaniam, CEO"}
              {i === 1 && "— A. Stevens, Project Manager"}
              {i === 2 && "— L. Johnson, Operations Director"}
              {i === 3 && "— N. Ganpathy Subramaniam, CEO"}
              {i === 4 && "— A. Stevens, Project Manager"}
              {i === 5 && "— L. Johnson, Operations Director"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingPage;
