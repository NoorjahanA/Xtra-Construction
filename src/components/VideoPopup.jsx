import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

/** Build a playable YouTube embed URL from either a full YouTube share link or a raw video ID. */
function getYouTubeEmbedUrl(videoId) {
  if (!videoId) return '';
  try {
    if (videoId.includes('youtu.be/') || videoId.includes('youtube.com/')) {
      const url = new URL(videoId);
      const id = videoId.includes('youtu.be/')
        ? url.pathname.replace('/', '')
        : url.searchParams.get('v') || url.pathname.split('/').pop();
      const si = url.searchParams.get('si');
      const params = new URLSearchParams();
      if (si) params.set('si', si);
      params.set('autoplay', '1');
      return `https://www.youtube.com/embed/${id}?${params.toString()}`;
    }
  } catch {
    // Fall back to treating the string as a plain YouTube video ID
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

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
          src={getYouTubeEmbedUrl(videoId)}
          title="Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default VideoPopup;
