import { FaCheck } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import { aboutChecks } from '../data';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-image fade">
        <img src="/images/about.jpg" alt="Two engineers looking at a plan" />
      </div>

      <div className="about-content fade">
        <SectionTitle bigWord="About" small="About our company" title="Always dedicated and devoted" />
        <p>
          Slogan creation for your construction company is crucial for the overall branding. And branding in
          today’s world can’t be ignored, We hope that the above Construction Slogans. Don’t forget to share it
          on social media and related building communities.
        </p>
        <ul className="check-list">
          {aboutChecks.map((item) => (
            <li key={item}><FaCheck /> {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
