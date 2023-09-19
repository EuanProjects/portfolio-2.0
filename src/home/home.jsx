import { useState, useEffect } from "react";
import AboutMe from "../aboutme/aboutMe";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import ProjectsSection from "../projectsSection/projectsSection";
import Contact from "../contact/contact";
import Footer from "../footer/footer";
import Preloader from "../preloader/preloader";

function Home() {
    const [displayMenu, setDisplayMenu] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);

    function handleClick() {
        console.log("here");
        setDisplayMenu(!displayMenu);
    }

    return (
        <>
            {loading ? 
            <Preloader /> :
            <>
            <Navbar handleClick={handleClick} displayMenu={displayMenu} />
            <Hero />
            <AboutMe />
            <ProjectsSection />
            <Contact />
            <Footer />
            </>
            }

        </>
    );
}

export default Home;
