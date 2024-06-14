'use client'
import React, { useEffect } from 'react';
import gsap from "gsap";

function Loader() {
  useEffect(() => {
    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", { delay: 1.5, y: -100, opacity: 0, });
    tl.to(svg, { duration: 0.5, attr: { d: curve }, ease: "power2.easeIn", }).to(svg, { duration: 0.5, attr: { d: flat }, ease: "power2.easeOut", });
    tl.to(".loader-wrap", { y: -1500, });
    tl.to(".loader-wrap", { zIndex: -1, display: "none", });
    tl.from("header", { y: 200 }, "-=1.5");
    tl.from("header .container", { y: 40, opacity: 0, delay: 0.3 }, "-=1.5");
  }, []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <span>
          <h2 className="load-text">
            <span>A</span>
            <span>u</span>
            <span>t</span>
            <span>o</span>
            <span>n</span>
            <span>i</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>a</span>
            <span>n</span>
            <span>t</span>
            <span>e</span>
          </h2>
        </span>
      </div>
    </div>
  )
}

export default Loader