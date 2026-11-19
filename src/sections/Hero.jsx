// import { useState, useEffect } from 'react';
// import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import VideoPopup from '../components/VideoPopup';
// import { heroSlides, VIDEO_ID } from '../data';

// function Hero() {
//   const [current, setCurrent] = useState(0);        // which slide we are on
//   const [videoOpen, setVideoOpen] = useState(false);

//   const slide = heroSlides[current];

//   function nextSlide() {
//     setCurrent((current + 1) % heroSlides.length);
//   }
//   function previousSlide() {
//     setCurrent((current - 1 + heroSlides.length) % heroSlides.length);
//   }

//   // Change slide automatically every 7 seconds (but not while the video is open)
//   useEffect(() => {
//     if (videoOpen) return;
//     const timer = setTimeout(nextSlide, 7000);
//     return () => clearTimeout(timer);
//   }, [current, videoOpen]);

//   return (
//     <section className="hero">
//       {/* Three slanted yellow shapes in the background */}
//       <div className="stripe stripe-1"></div>
//       <div className="stripe stripe-2"></div>
//       <div className="stripe stripe-3"></div>

//       <img className="hero-image" src="/images/hero-worker.png" alt="Smiling worker giving a thumbs up" />

//       {/* key={current} makes React redraw this block, so the text animation plays again on every slide */}
//       <div className="container">
//         <div className="hero-text" key={current}>
//           <h1 className="hero-title">
//             {slide.lines.map((line, index) => (
//               <span key={line} className={index === slide.lines.length - 1 ? 'yellow-text' : ''} style={{ '--delay': index * 0.15 + 's' }}>
//                 {line}
//               </span>
//             ))}
//           </h1>
//           <p className="hero-paragraph">{slide.text}</p>

//           <button className="play-button" onClick={() => setVideoOpen(true)}>
//             <span className="play-circle"><FaPlay /></span>
//             <span className="play-label">
//               <small>Watch video</small>
//               <strong>Why choose us?</strong>
//             </span>
//           </button>
//         </div>
//       </div>

//       <div className="hero-arrows">
//         <button onClick={previousSlide} aria-label="Previous slide"><FaChevronLeft /></button>
//         <button onClick={nextSlide} aria-label="Next slide"><FaChevronRight /></button>
//       </div>

//       {videoOpen && <VideoPopup videoId={VIDEO_ID} onClose={() => setVideoOpen(false)} />}
//     </section>
//   );
// }

// export default Hero;

import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import VideoPopup from "../components/VideoPopup";
import { VIDEO_ID } from "../data";

// The two hero slides. They look different, so each one has a "type".
//  - 'worker' = slide 1 (big title, worker photo, yellow stripes)
//  - 'photo'  = slide 2 (blurred background photo with two coloured text boxes)
const slides = [
  {
    type: "worker",
    lines: ["Start", "New", "Projects"],
    text: "Don’t get framed by the competition, trust our solid reputation.",
  },
  {
    type: "photo",
    image: "/images/slide-2.jpg", // put your photo in public/images/slide-2.jpg
    bigText: "Committed to superior quality and results",
    smallText: "We'll get it done, like us there are none",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0); // which slide we are on (0 or 1)
  const [videoOpen, setVideoOpen] = useState(false);

  const slide = slides[current];

  function nextSlide() {
    setCurrent((current + 1) % slides.length);
  }
  function previousSlide() {
    setCurrent((current - 1 + slides.length) % slides.length);
  }

  // Change slide automatically every 7 seconds (but not while the video is open)
  useEffect(() => {
    if (videoOpen) return;
    const timer = setTimeout(nextSlide, 7000);
    return () => clearTimeout(timer);
  }, [current, videoOpen]);

  return (
    <section className="hero">
      {/* key={current} makes React draw a fresh slide each time, so the fade-in animation plays again */}
      {slide.type === "worker" ? (
        /* ===== Slide 1 ===== */
        <div className="slide" key={current}>
          {/* Three slanted yellow shapes in the background */}
          <div className="stripe stripe-1"></div>
          <div className="stripe stripe-2"></div>
          <div className="stripe stripe-3"></div>

          <img
            className="hero-image"
            src="/images/hero-worker.png"
            alt="Smiling worker giving a thumbs up"
          />

          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                {slide.lines.map((line, index) => (
                  <span
                    key={line}
                    className={
                      index === slide.lines.length - 1 ? "yellow-text" : ""
                    }
                    style={{ "--delay": index * 0.15 + "s" }}
                  >
                    {line}
                  </span>
                ))}
              </h1>
              <p className="hero-paragraph">{slide.text}</p>

              <button
                className="play-button"
                onClick={() => setVideoOpen(true)}
              >
                <span className="play-circle">
                  <FaPlay />
                </span>
                <span className="play-label">
                  <small>Watch video</small>
                  <strong>Why choose us?</strong>
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* ===== Slide 2 ===== */
        <div className="slide slide-photo" key={current}>
          {/* The photo is sharp in the file. The blur is added by CSS (.slide-bg in home.css) */}
          <img className="slide-bg" src={slide.image} alt="" />

          <div className="boxes">
            <h1 className="box-navy">{slide.bigText}</h1>
            <p className="box-yellow">{slide.smallText}</p>
          </div>
        </div>
      )}

      <div className="hero-arrows">
        <button onClick={previousSlide} aria-label="Previous slide">
          <FiChevronLeft />
        </button>
        <button onClick={nextSlide} aria-label="Next slide">
          <FiChevronRight />
        </button>
      </div>

      {videoOpen && (
        <VideoPopup videoId={VIDEO_ID} onClose={() => setVideoOpen(false)} />
      )}
    </section>
  );
}

export default Hero;
