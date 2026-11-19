import SectionTitle from '../components/SectionTitle';
import FeatureCards from '../components/FeatureCards';

// Dark blue section under the hero. The cards at the bottom hang out over the next section.
function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-top fade">
          <img src="/images/hat-icon.png" alt="" />
          <SectionTitle bigWord="" small="Features at a glance" title="We know what your needs are" center light />
        </div>
        <FeatureCards />
      </div>
    </section>
  );
}

export default Features;
