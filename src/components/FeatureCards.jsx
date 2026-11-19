import { Link } from 'react-router-dom';
import { FaChevronUp } from 'react-icons/fa';
import { featureCards } from '../data';

// Three photo cards with 3D flip transition revealing text and button on the back
function FeatureCards() {
  return (
    <div className="feature-cards">
      {featureCards.map((card) => (
        <div className="feature-card fade" key={card.title} tabIndex="0">
          <div className="feature-card-inner">
            {/* Front face: Photo with bottom title bar */}
            <div className="feature-card-front">
              <img src={card.image} alt={card.title} />
              <div className="feature-front-bar">
                <h3>{card.title}</h3>
                <FaChevronUp />
              </div>
            </div>

            {/* Back face: Yellow flipped side with title, text and button */}
            <div className="feature-card-back">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <Link className="btn btn-white feature-btn" to="/services">
                Learn More ...
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
