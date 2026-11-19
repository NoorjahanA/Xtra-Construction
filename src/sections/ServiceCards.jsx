import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import icons from '../components/icons';
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
          {homeServices.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div className="service-card fade" key={service.title}>
                <Icon className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link to="/services" className="btn btn-navy">Read More</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
