import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaQuestion } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';
import { faqs, departments } from '../data';
import '../styles/Faq.css';

function AskForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [department, setDepartment] = useState(departments[0]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  function checkForm() {
    const newErrors = {};
    if (name.trim() === '') newErrors.name = 'Please enter your name.';
    if (email.trim() === '') newErrors.email = 'Please enter your email.';
    else if (!email.includes('@') || !email.includes('.')) newErrors.email = 'This email does not look right.';
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = checkForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus('sending');
    try {
      const url = import.meta.env.VITE_FORM_ENDPOINT;
      if (url) {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, department, message }),
        });
        if (!response.ok) throw new Error('Could not send');
      } else {
        await new Promise((done) => setTimeout(done, 700));
      }
      setStatus('sent');
      setName(''); setEmail(''); setSubject(''); setMessage('');
    } catch (error) {
      setStatus('failed');
    }
  }

  return (
    <form className="contact-form white" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          Your Name (required)
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Your Email (required)
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
      </div>

      <label>
        Subject
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>

      <label>
        Departement
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          {departments.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </label>

      <label>
        Your Question
        <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>

      <button className="btn form-button" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Ask'}
      </button>

      {status === 'sent' && <p className="form-message good">Thank you! We got your message and will reply soon.</p>}
      {status === 'failed' && <p className="form-message bad">Sorry, something went wrong. Please try again.</p>}
    </form>
  );
}

function Faq() {
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
              <AskForm />
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
