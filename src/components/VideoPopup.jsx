import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

// A dark overlay with a YouTube video inside. Click outside or press Escape to close.
function VideoPopup({ videoId, onClose }) {
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return (
    <div className="video-popup" onClick={onClose}>
      <div className="video-box" onClick={(e) => e.stopPropagation()}>
        <button className="video-close" onClick={onClose} aria-label="Close video">
          <FaTimes />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default VideoPopup;
