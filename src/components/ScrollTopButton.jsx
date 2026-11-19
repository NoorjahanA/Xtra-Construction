import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

// Small navy square at the bottom-right. It shows up after you scroll down a bit.
function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <button
      className={visible ? 'scroll-top show' : 'scroll-top'}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollTopButton;
