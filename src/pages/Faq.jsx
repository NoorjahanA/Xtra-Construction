import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaQuestion } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';
import ContactForm from '../components/ContactForm';
import { faqs } from '../data';

function Faq() {
  // Remember which question is open (-1 means none). The first one starts open.
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(index) {
    setOpenIndex(openIndex === index ? -1 : index);
  }

  return (
    <>
      <PageTitle title="FAQ" />

      <section className="faq-page">
        <div className="container">
          <div className="faq-top fade">
            <div>
              <p className="small-label">Feel free to contact us</p>
              <h2>Do you have <span className="yellow-text">Questions?</span></h2>
              <p>Please read questions below and if you can not find your question, please send us your question, and we will answer you as soon as possible.</p>
            </div>
            <img src="/images/about.jpg" alt="Two engineers talking" />
          </div>

          <div className="faq-grid">
            <div className="fade">
              <div className="faq-heading">
                <span className="diamond"><FaQuestion /></span>
                <div>
                  <h3>F.A.Qs</h3>
                  <p>Frequently asked questions</p>
                </div>
              </div>

              {faqs.map((item, index) => (
                <div className={openIndex === index ? 'faq-item open' : 'faq-item'} key={item.question}>
                  <button className="faq-question" onClick={() => toggle(index)}>
                    {item.question}
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="fade">
              <div className="faq-heading">
                <span className="diamond"><FaQuestion /></span>
                <div>
                  <h3>Ask Us</h3>
                  <p>Quick contact form</p>
                </div>
              </div>
              <ContactForm look="white" buttonText="Ask" messageLabel="Your Question" />
            </div>
          </div>

          <div className="still-banner fade">
            <div>
              <h3>Still have some questions?</h3>
              <p>Do not hesitate to send us an email and we will get back to you.</p>
            </div>
            <Link to="/contact" className="btn btn-navy">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
