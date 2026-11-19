import { Link } from 'react-router-dom';

// "Building a dream shouldn't be a nightmare!" banner.
// Home page = light grey version, About page = dark navy version (dark prop).
function CtaBanner({ dark }) {
  return (
    <section className={dark ? 'cta dark' : 'cta'}>
      <div className="container">
        <div className="cta-box fade">
          <img className="cta-icon" src="/images/hat-icon.png" alt="" />
          <div className="cta-text">
            <h2>Building a dream <span>shouldn’t be a nightmare!</span></h2>
            <p>We have transforming the ideas and visions into winning projects.</p>
          </div>
          <Link to="/contact" className="btn btn-white">Free Consultation</Link>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
