import { useState } from "react";
import AboutMe from "../aboutme/aboutMe";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import ProjectsSection from "../projectsSection/projectsSection";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

function Home() {
    const [displayMenu, setDisplayMenu] = useState(false);

    function handleClick() {
        console.log("here");
        setDisplayMenu(!displayMenu);
    }

    return (
        <>
            <Navbar handleClick={handleClick} displayMenu={displayMenu} />
            <Hero />
            <AboutMe />
            <ProjectsSection />
            <Contact />
            <Footer />

        </>
    );
}

export default Home;
