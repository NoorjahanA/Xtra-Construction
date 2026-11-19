import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { homeServices } from '../data';

function ServiceCards() {
  return (
    <section className="services">
      <div className="container">
        <SectionTitle bigWord="Services" small="What we can do for you" title="Our construction services" center />
      </div>

      {/* The grey strip starts halfway down the cards, so the cards sit on a special background */}
      <div className="services-area">
        <div className="container service-cards">
          {homeServices.map((service) => (
            <div className="service-card fade" key={service.title}>
              <div className="service-icon-wrap">
                <img src={service.image} alt={service.title} className="service-img-icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link to="/services" className="btn btn-service">Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
