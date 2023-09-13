import AboutMe from "../aboutme/aboutMe";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";


function Home() {

    return (
        <>
            <Navbar/>
            <Hero/>
            <AboutMe />
        </>
    )
}

export default Home;