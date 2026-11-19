import { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { testimonials } from '../data';

// A simple slider: all the cards sit in a row, and we slide the row left or right.
function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Go to the next testimonial every 6 seconds (unless the mouse is on it)
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [current, paused]);

  return (
    <section className="testimonials">
      <div className="container">
        <SectionTitle bigWord="Testimonials" small="See what says our happy clients" title="Our happy customers" center />

        <div className="slider fade" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* --slide is a CSS variable the stylesheet uses to know how far to move the row */}
          <div className="slider-row" style={{ '--slide': current }}>
            {testimonials.map((item, index) => (
              <div className={index === current ? 'testimonial active' : 'testimonial'} key={item.name}>
                <div className="avatar">{item.name.charAt(0)}</div>
                <p className="testimonial-text">“{item.text}”</p>
                <p className="testimonial-name">- {item.name}</p>
                <FaQuoteRight className="quote-mark" />
              </div>
            ))}
          </div>

          <div className="slider-dots">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                className={index === current ? 'active' : ''}
                onClick={() => setCurrent(index)}
                aria-label={'Show testimonial ' + (index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
