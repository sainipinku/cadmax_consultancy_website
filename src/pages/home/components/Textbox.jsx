import React, { useEffect, useState } from "react";

const Textbox = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // run only on page load
  }, []);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] text-center overflow-x-hidden">

      {/* TOP TEXT */}
      <div
        className={`
          bg-[#171717] 
          px-5 py-[60px] w-full
          transition-all duration-[1200ms] ease-out
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"}
        `}
      >
        <h2 className="
          text-white uppercase font-extrabold
          text-[22px] leading-[1.5]
        ">
          From your ideas to smart designs—Architech listens.
        </h2>

        <p className="
          text-white uppercase font-extrabold mt-3
          text-[16px] leading-[1.5]
        ">
         At Architech, every detail counts. From innovative interiors that inspire to engineering solutions that endure, we’re committed to shaping spaces where design meets precision. Take our survey and help us craft environments that reflect your vision.
        </p>
      </div>

    </div>
  );
};

export default Textbox;