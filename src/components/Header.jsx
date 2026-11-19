import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  FaSearch, FaHome, FaPhoneAlt, FaBars, FaTimes, FaChevronDown, FaAngleRight,
  FaFacebookF, FaInstagram, FaLinkedinIn,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import '../styles/Header.css';

function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const [menuOpen, setMenuOpen] = useState(false);   // mobile slide-in menu
  const [pagesOpen, setPagesOpen] = useState(false); // "Pages" dropdown on mobile
  const [searchOpen, setSearchOpen] = useState(false);

  // Whenever we go to another page, close the mobile menu.
  useEffect(() => {
    setMenuOpen(false);
    setPagesOpen(false);
  }, [pathname]);

  // Escape closes the search box.
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="top">
      {/* Dark bar at the very top */}
      <div className="top-bar">
        <div className="container">
          <p>
            Have any questions? call us
            <a href="tel:+18182345678"><FaPhoneAlt /> +1 (818) 23 45 678</a>
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://x.com/" aria-label="X"><FaXTwitter /></a>
            <a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* On the home page the header floats over the hero, so it gets an extra class */}
      <header className={isHome ? 'header on-home' : 'header'}>
        <div className="container">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="XTRA Construction" />
          </Link>

          <nav className={menuOpen ? 'menu-wrap open' : 'menu-wrap'}>
            <ul className="menu">
              <li><NavLink to="/" end aria-label="Home"><FaHome /></NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/faq">FAQ</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>

              {/* "Pages" opens a dropdown (hover on desktop, tap on mobile) */}
              <li className={pagesOpen ? 'has-dropdown open' : 'has-dropdown'}>
                <a href="#pages" onClick={(e) => { e.preventDefault(); setPagesOpen(!pagesOpen); }}>
                  Pages <FaChevronDown className="small-icon" />
                </a>
                <ul className="dropdown">
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/cart">Cart</Link></li>
                  <li><Link to="/wishlist">Wishlist</Link></li>
                  <li><Link to="/my-account">My account</Link></li>
                  <li><Link to="/submenu-example">Submenu example</Link></li>
                  <li className="has-dropdown">
                    <Link to="/dropdown-menu">Dropdown menu <FaAngleRight /></Link>
                    <ul className="dropdown">
                      <li><Link to="/submenu-1">Submenu 1</Link></li>
                      <li><Link to="/submenu-2">Submenu 2</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          <div className="header-right">
            <button className="icon-button" onClick={() => setSearchOpen(true)} aria-label="Search">
              <FaSearch />
            </button>
            <Link to="/contact" className="btn btn-white consult-button">Free Consultation</Link>
            <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen search box */}
      <div className={searchOpen ? 'search-box open' : 'search-box'}>
        <button className="search-close" onClick={() => setSearchOpen(false)} aria-label="Close search">
          <FaTimes />
        </button>
        <form onSubmit={(e) => { e.preventDefault(); setSearchOpen(false); }}>
          <input type="search" placeholder="Type keyword to search ..." />
          <button type="submit" aria-label="Search"><FaSearch /></button>
        </form>
        <p>Trending searches: place, silence, create, logo, like</p>
      </div>
    </div>
  );
}

export default Header;
