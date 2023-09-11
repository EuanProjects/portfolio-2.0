import React, { useEffect, useState } from 'react';
import './styles/cursor.css';

function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const [linksHovered, setLinksHovered] = useState(false);

  useEffect(() => {
    const cursorElement = document.querySelector('.cursor');

    const handleMouseMove = (e) => {
      setCursorPosition({ top: e.pageY, left: e.pageX });
    };

    const handleLinksHover = () => {
      setLinksHovered(true);
    };

    const handleLinksLeave = () => {
      setLinksHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('h1').forEach((h1) => {
      h1.addEventListener('mouseenter', handleLinksHover);
      h1.addEventListener('mouseleave', handleLinksLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('h1').forEach((h1) => {
        h1.removeEventListener('mouseenter', handleLinksHover);
        h1.removeEventListener('mouseleave', handleLinksLeave);
      });
    };
  }, []);

  return (
    <>
      <div className={`cursor ${linksHovered ? 'hovered-link' : ''}`} style={cursorPosition}></div>
    </>
  );
}

export default Cursor;
