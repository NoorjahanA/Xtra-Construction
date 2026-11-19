import PageTitle from '../components/PageTitle';
import ServiceCards from '../sections/ServiceCards';
import FeatureCards from '../components/FeatureCards';
import '../styles/Services.css';

function Services() {
  return (
    <>
      <PageTitle title="Services" />

      {/* Main 3 Services Cards matching reference exactly */}
      <ServiceCards />

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
