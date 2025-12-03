import React, { useEffect, useRef, useState } from "react";
import "./rating.css";
import star from "../../../assets/icons/Rating_icon/Star 1.png";



const RatingPage = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % 6);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + 6) % 6);
  };

  function activateCenterCard() {
  const cards = document.querySelectorAll(".rating-card");
  cards.forEach((c) => c.classList.remove("active"));

  // center card = index + 1
  if (cards[index + 1]) {
    cards[index + 1].classList.add("active");
  }
}

useEffect(() => {
  activateCenterCard();
}, [index]);



  // ★★★★★ HEADINGS + CARD ANIMATION FIX
  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) headingObserver.observe(headingRef.current);

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("card-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

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

      {/* CARDS */}
      <div
        className="rating-container"
        style={{ transform: `translateX(-${index * 33.33}%)` }}
      >
        {[0, 1, 2, 3, 4, 5].map((v, i) => (
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

              {i === 3 &&
                "“Reliable, fast and accurate. CADMAX resolves field issues without delay and maintains tight control over survey accuracy.”"}
              {i === 4 &&
                "“The dedication and professionalism exhibited by CADMAX is unmatched. Their insights streamline projects and improve efficiency.”"}
              {i === 5 &&
                "“With CADMAX's innovative solutions, we've reduced turnaround time significantly. Their expertise is a game-changer.”"}
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
