import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import '../styles/Footer.css';

function Footer() {
  const { pathname } = useLocation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Yellow client-logo strip (the Contact page doesn't have it) */}
      {pathname !== '/contact' && (
        <div className="logo-strip-area">
          <div className="container">
            <div className="logo-strip">
              <img src="/images/client-1.png" alt="Construction" />
              <img src="/images/client-2.png" alt="Construction" />
              <img src="/images/client-3.png" alt="Giant Construction" />
              <img src="/images/client-4.png" alt="Solutions" />
              <img src="/images/client-5.png" alt="Construction Company" />
            </div>
          </div>
        </div>
      )}

      <div className="footer-dark">
        <img className="footer-logo" src="/images/logo-light.png" alt="XTRA Construction" />
        <p>
          A company is any entity that engages in business.<br />
          Companies can be structured in different ways.<br />
          For example, your company can be a sole proprietorship,<br />
          a partnership, or a corporation.
        </p>
        <div className="footer-social">
          <a href="https://www.facebook.com/" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://x.com/" aria-label="X"><FaXTwitter /></a>
          <a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.youtube.com/" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} XTRA, Powered by WordPress</p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
