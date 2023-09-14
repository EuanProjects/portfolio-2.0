import AboutMe from "../aboutme/aboutMe";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import ProjectsSection from "../projectsSection/projectsSection";
import Contact from "../contact/contact";


function Home() {

    return (
        <>
            <Navbar/>
            <Hero/>
            <AboutMe />
            <ProjectsSection />
            <Contact />
        </>
    )
}

export default Home;