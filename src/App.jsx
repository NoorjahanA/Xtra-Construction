import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Placeholder from './pages/Placeholder';

// Menu links that don't have a real page yet. [path, title]
const placeholderPages = [
  ['/blog', 'Blog'],
  ['/shop', 'Shop'],
  ['/cart', 'Cart'],
  ['/wishlist', 'Wishlist'],
  ['/my-account', 'My account'],
  ['/submenu-example', 'Submenu example'],
  ['/dropdown-menu', 'Dropdown menu'],
  ['/submenu-1', 'Submenu 1'],
  ['/submenu-2', 'Submenu 2'],
  ['/privacy-policy', 'Privacy Policy'],
];

function App() {
  const { pathname } = useLocation();

  // Every time the page changes: go back to the top, then fade in anything with class "fade"
  // as soon as it scrolls into view.
  useEffect(() => {
    window.scrollTo(0, 0);

    const watcher = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            watcher.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.fade').forEach((item) => watcher.observe(item));

    return () => watcher.disconnect();
  }, [pathname]);

  return (
    <>
      <Header />
      {/* key={pathname} replays the fade-in animation on every page change */}
      <main className="page" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          {placeholderPages.map(([path, title]) => (
            <Route key={path} path={path} element={<Placeholder title={title} />} />
          ))}
          <Route path="*" element={<Placeholder title="Page not found" />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default App;
