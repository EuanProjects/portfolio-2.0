import { useEffect, useState } from 'react';
import './styles/cursor.css';

function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const [linksHovered, setLinksHovered] = useState(false);

  useEffect(() => {
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
    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener('mouseenter', handleLinksHover);
      link.addEventListener('mouseleave', handleLinksLeave);
    });

    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('mouseenter', handleLinksHover);
        button.addEventListener('mouseleave', handleLinksLeave);
    });


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a').forEach((link) => {
        link.removeEventListener('mouseenter', handleLinksHover);
        link.removeEventListener('mouseleave', handleLinksLeave);
      });

      document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('mouseenter', handleLinksHover);
        button.addEventListener('mouseleave', handleLinksLeave);
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
