import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <>
      <PageTitle title="Contact" />

      <section className="contact-page">
        <div className="container contact-grid">
          <div className="fade">
            <SectionTitle bigWord="Contact" small="Get in touch with us" title="Contact us now" />
            <div className="contact-item">
              <span className="icon-square yellow"><FaPhoneAlt /></span>
              <p><strong>Phone:</strong> +1 (818) 23 45 679</p>
            </div>
            <div className="contact-item">
              <span className="icon-square yellow"><FaEnvelope /></span>
              <p><strong>Email:</strong> Support@construction.com</p>
            </div>
            <div className="contact-item">
              <span className="icon-square yellow"><FaMapMarkerAlt /></span>
              <p><strong>Address:</strong> 2346 Johnson St, New York, USA</p>
            </div>
          </div>
          <div className="fade">
            <ContactForm look="navy" buttonText="Send" messageLabel="Your Message" />
          </div>
        </div>

        {/* A free OpenStreetMap map (no API key needed). The CSS turns it grey like the original. */}
        <iframe
          className="map"
          title="Our location on the map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-74.03%2C40.69%2C-73.93%2C40.76&layer=mapnik&marker=40.7143%2C-74.006"
        ></iframe>
      </section>
    </>
  );
}

export default Contact;
