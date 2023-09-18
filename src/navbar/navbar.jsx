import { Link } from "react-scroll"
import { Menu } from "react-feather";
import NavMenu from "./navMenu";

function Navbar({ handleClick, displayMenu }) {

    return (
        <>
            {!displayMenu &&
                <div className="w-[100vw] fixed bg-gray">
                    <nav className="flex justify-between p-6 z-30">
                        <div>
                            <a className="text-xl">EC</a>
                        </div>
                        <div className="space-x-5 lg:block sm:hidden xs:hidden z-50">
                            <Link to="hero" spy={true} smooth={true} offset={-50} duration={500} ><span className="text-green text-xs font-mono">01. </span>Home</Link>
                            <Link to="about" spy={true} smooth={true} offset={25} duration={500} ><span className="text-green text-xs font-mono">01. </span>About</Link>
                            <Link to="projects" spy={true} smooth={true} offset={-75} duration={500} ><span className="text-green text-xs font-mono">01. </span>Projects</Link>
                            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} ><span className="text-green text-xs font-mono">01. </span>Contact</Link>
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
