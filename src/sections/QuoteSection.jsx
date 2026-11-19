import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { departments } from '../data';

function QuoteForm() {
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
    <form className="contact-form yellow" onSubmit={handleSubmit} noValidate>
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
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;
