import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle';
import { departments } from '../data';
import '../styles/Contact.css';

function ContactForm() {
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
    <form className="contact-form navy" onSubmit={handleSubmit} noValidate>
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
        Your Message
        <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>

      <button className="btn form-button" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>

      {status === 'sent' && <p className="form-message good">Thank you! We got your message and will reply soon.</p>}
      {status === 'failed' && <p className="form-message bad">Sorry, something went wrong. Please try again.</p>}
    </form>
  );
}

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
            <ContactForm />
          </div>
        </div>

        {/* Free OpenStreetMap map embed styled grayscale */}
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
