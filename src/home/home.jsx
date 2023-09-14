import AboutMe from "../aboutme/aboutMe";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import ProjectsSection from "../projectsSection/projectsSection";


function Home() {

    return (
        <>
            <Navbar/>
            <Hero/>
            <AboutMe />
            <ProjectsSection />
        </>
    )
}

export default Home;