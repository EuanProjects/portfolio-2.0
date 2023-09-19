import { useState } from "react"
import { Link } from "react-scroll"
import { Menu } from "react-feather";
import NavMenu from "./navMenu";
import './styles/navbar.css';


function Navbar({ handleClick, displayMenu }) {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <>
            {!displayMenu &&
                <div className="w-[100vw] fixed bg-gray z-30">
                    <nav className="flex justify-between p-6 ">
                        <div>
                            <a className="text-xl">EC</a>
                        </div>
                        <div className="space-x-5 lg:block sm:hidden xs:hidden">
                            <button className={`w-[100px] parent ${activeSection === 'hero' ? 'active' : ''}`}>
                                <Link to="hero" spy={true} smooth={true} offset={-50} duration={500} onSetActive={() => setActiveSection('hero')} activeClass=""><span className="text-green text-xs font-mono">01. </span>Home</Link>
                            </button>
                            <button className={`w-[100px] parent ${activeSection === 'about' ? 'active' : ''}`}>
                                <Link to="about" spy={true} smooth={true} offset={25} duration={500} onSetActive={() => setActiveSection('about')} activeClass=""><span className="text-green text-xs font-mono">01. </span>About</Link>
                            </button>
                            <button className={`w-[100px] parent ${activeSection === 'projects' ? 'active' : ''}`}>
                                <Link to="projects" spy={true} smooth={true} offset={-75} duration={500} onSetActive={() => setActiveSection('projects')} activeClass=""><span className="text-green text-xs font-mono">01. </span>Projects</Link>
                            </button>
                            <button className={`w-[100px] parent ${activeSection === 'contact' ? 'active' : ''}`}>
                                <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onSetActive={() => setActiveSection('contact')} activeClass=""><span className="text-green text-xs font-mono">01. </span>Contact</Link>
                            </button>
                        </div>
                        <div className="lg:hidden sm:block">
                            <Menu className="stroke-blue" onClick={handleClick} />
                        </div>
                    </nav>
                </div>

            }
            {displayMenu && <NavMenu handleClick={handleClick} displayMenu={displayMenu} />
            }
        </>
    )
}

export default Navbar;
