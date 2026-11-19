import { FaCheck } from 'react-icons/fa';
import { aboutChecks } from '../data';
import { useTilt } from '../hooks/useTilt';
import '../styles/About.css';

function AboutSection({ className = '' }) {
  const tilt = useTilt(12);

  return (
    <section className={`about-section ${className}`}>
      <div className="about-inner">
        {/* Left column: Photo with yellow frame extending top and bottom */}
        <div className="about-image-col">
          <div className="about-yellow-bg" />
          <div
            ref={tilt.ref}
            style={tilt.style}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            className="about-image"
          >
            <img
              src="/images/about.jpg"
              alt="Two engineers reviewing architectural plans on site"
            />
          </div>
        </div>

        {/* Right column: Content */}
        <div className="about-content">
          <div className="about-header">
            <span className="about-watermark">ABOUT</span>
            <p className="about-subtitle">ABOUT OUR COMPANY</p>
            <h2 className="about-title">
              Always dedicated<br />and devoted
            </h2>
          </div>

          <p className="about-desc">
            Slogan creation for your construction company is crucial for the
            overall branding. And branding in today’s world can’t be ignored,
            We hope that the above Construction Slogans. Don’t forget to
            share it on social media and related building communities.
          </p>

          <ul className="about-features">
            {aboutChecks.map((item) => (
              <li key={item} className="about-feature-item">
                <FaCheck className="about-feature-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

