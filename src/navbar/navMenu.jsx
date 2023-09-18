import { X } from 'react-feather';
import { Link } from "react-scroll"
import { useEffect, useState } from 'react';

function NavMenu({ handleClick, displayMenu }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    function handleLinkClick() {
        if (displayMenu) {
            handleClick();
        }
    }

    return (
        <div className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-gray-dark h-full">
                <div className="flex justify-end p-6">
                    <X className="stroke-blue" onClick={handleClick} />
                </div>
                <div className="grid place-items-center h-5/6 font-mono">
                    <Link to="hero" className='link' spy={true} smooth={true} offset={-50} duration={500} onClick={handleLinkClick}>HOME</Link>
                    <Link to="about" className='link' spy={true} smooth={true} offset={25} duration={500} onClick={handleLinkClick}>ABOUT</Link>
                    <Link to="projects" className='link' spy={true} smooth={true} offset={-75} duration={500} onClick={handleLinkClick}>PROJECTS</Link>
                    <Link to="contact" className='link' spy={true} smooth={true} offset={-50} duration={500} onClick={handleLinkClick}>CONTACT</Link>
                </div>
            </div>
        </div>
    );
}

export default NavMenu;

