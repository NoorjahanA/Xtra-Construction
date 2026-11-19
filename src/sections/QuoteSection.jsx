import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

// Navy block on the left, yellow form card on the right (the card overlaps the navy block).
function QuoteSection() {
  return (
    <section className="quote">
      <div className="container quote-grid">
        <div className="quote-text fade">
          <SectionTitle bigWord="Quote" small="Interested in construction?" title="Request a free and fair quote" light />
          <p>
            Slogan creation for your construction company is crucial for the overall branding. And branding in
            today’s world can’t be ignored, We hope that the above Construction Slogans. Don’t forget to share it
            on social media.
          </p>
        </div>
        <div className="fade">
          <ContactForm look="yellow" buttonText="Send" messageLabel="Your Message" />
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;
