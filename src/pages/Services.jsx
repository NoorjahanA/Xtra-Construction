import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle';
import FeatureCards from '../components/FeatureCards';
import icons from '../components/icons';
import { servicePageCards } from '../data';

function Services() {
  return (
    <>
      <PageTitle title="Services" />

      <section className="services-page">
        <div className="container">
          <SectionTitle bigWord="Services" small="What we can do for you" title="Our construction services" center />
          <div className="big-service-cards">
            {servicePageCards.map((card) => {
              const Icon = icons[card.icon];
              return (
                <div className="big-service fade" key={card.title}>
                  <span className="icon-square"><Icon /></span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <Link to="/contact" className="btn btn-navy">Contact us</Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tips">
        <div className="container">
          <div className="tips-top fade">
            <div>
              <p className="small-label">Construction tips</p>
              <h2>We know what your needs are</h2>
            </div>
            <p>
              Slogan creation for your construction company is crucial for the overall branding. And branding in
              today’s world can’t be ignored. We hope that the above Construction Slogans. Don’t forget to share it
              on social media and related building communities.
            </p>
          </div>
          <FeatureCards />
        </div>
      </section>
    </>
  );
}

export default Services;
