import { Link } from 'react-router-dom';
import { FaChevronUp } from 'react-icons/fa';
import { featureCards } from '../data';

// Three photo cards. Hover a card and the dark bar grows into a yellow box with text.
// The hover effect is done in CSS only (see .feature-card in home.css).
function FeatureCards() {
  return (
    <div className="feature-cards">
      {featureCards.map((card) => (
        <div className="feature-card fade" key={card.title} tabIndex="0">
          <img src={card.image} alt={card.title} />
          <div className="feature-info">
            <div className="feature-heading">
              <h3>{card.title}</h3>
              <FaChevronUp />
            </div>
            <p>{card.text}</p>
            <Link className="btn btn-white small-button" to="/services">Learn More ...</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
