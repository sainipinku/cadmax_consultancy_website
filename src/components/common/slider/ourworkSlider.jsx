import React, { useState, useEffect, useRef } from "react";

const WorkSlider = ({ slides, prefix }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = () => setIndex(i => (i + 1) % slides.length);
  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length);

  const start = () => {
    stop();
    intervalRef.current = setInterval(next, 1500);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    start();
    return () => stop();
  }, [start,stop]);

  return (
    <section
      className={`${prefix}-bg w-full h-[600px] bg-cover bg-center relative flex items-center justify-center brightness-90`}
      style={{ backgroundImage: `url(${slides[index].url})` }}
    >
      {/* TITLE */}
      <h2
        className={`${prefix}-title absolute top-10 text-white text-[18px] tracking-widest font-bold`}
      >
        OUR WORK
      </h2>

      {/* CARD */}
      <div
        className={`${prefix}-card w-1/2 max-w-[900px] bg-white border-[10px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden`}
      >
        <img
          src={slides[index].url}
          alt=""
          className={`${prefix}-img w-full h-[320px] object-cover`}
        />
        <p
          className={`${prefix}-text text-center py-4 text-[14px] font-semibold tracking-wide text-gray-700`}
        >
          {slides[index].title}
        </p>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        onMouseEnter={stop}
        onMouseLeave={start}
        className={`${prefix}-left absolute left-10 top-1/2 -translate-y-1/2
        w-[55px] h-[55px] rounded-full text-white text-[32px]
        bg-white/20 backdrop-blur border border-white/40
        hover:bg-white/50 transition`}
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        onMouseEnter={stop}
        onMouseLeave={start}
        className={`${prefix}-right absolute right-10 top-1/2 -translate-y-1/2
        w-[55px] h-[55px] rounded-full text-white text-[32px]
        bg-white/20 backdrop-blur border border-white/40
        hover:bg-white/50 transition`}
      >
        ❯
      </button>
    </section>
  );
};

export default WorkSlider;
