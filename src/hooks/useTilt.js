import { useState, useRef, useCallback } from 'react';

/**
 * Slanting 3D diagonal tilt hook (left-top & right-bottom tracking - "the other side").
 * Restricts the 3D tilt specifically along the top-left to bottom-right slanting diagonal axis.
 */
export function useTilt(maxTilt = 15) {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease',
  });

  const onMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = Math.max(-1, Math.min(1, (x - centerX) / centerX));
    const percentY = Math.max(-1, Math.min(1, (y - centerY) / centerY));

    // Diagonal slanting factor for the other side (top-left & bottom-right):
    // -1 at top-left (percentX = -1, percentY = -1)
    // +1 at bottom-right (percentX = 1, percentY = 1)
    // 0 at top-right, bottom-left, and center (tilt isolated to top-left & bottom-right)
    const diagonal = (percentX + percentY) / 2;

    // Slanting 3D tilt angles specifically along left-top & right-bottom
    const rotateX = -diagonal * maxTilt;
    const rotateY = diagonal * maxTilt;
    const rotateZ = -diagonal * 2.5; // Slanting twist angle

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) rotateZ(${rotateZ.toFixed(2)}deg) scale3d(1.035, 1.035, 1.035)`,
      transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
      boxShadow: `${(-diagonal * 25).toFixed(1)}px ${(20 + diagonal * 15).toFixed(1)}px 50px rgba(0, 0, 0, 0.22)`,
      willChange: 'transform',
    });
  }, [maxTilt]);

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease',
      boxShadow: '0 18px 50px rgba(0, 0, 0, 0.14)',
      willChange: 'transform',
    });
  }, []);

  return { ref, style, onMouseMove, onMouseLeave };
}

export default useTilt;
