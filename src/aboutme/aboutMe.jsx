function AboutMe() {
    return (
        <>
            <div className="h-screen w-[99vw] min-h-[1024px] flex flex-col justify-center items-center sm:px-6 xs:px-6" id="about">
                <div className="md:w-10/12 lg:w-3/4 2xl:w-1/2">
                    <div className="md:w-3/4 md:w-full flex justify-left items-center">
                        <h2 className="sm:text-4xl xs:text-2xl">
                            <span className="text-green text-xl font-mono">02. </span> About Me
                        </h2>
                        <hr className="w-5/12 border-t border-green h-1 ml-4 mt-2" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 w-full">
                        <div className="xs:order-2 sm:order-2">
                            <p className="text-gray-light">
                                Hello, my name is Euan Canoy! I am a <span className="text-blue">Full-Stack Developer</span> based out of Seattle, Washington.
                                I graduated from The University of Washington Bothell in August of 2022. Since then, I have had experience working
                                with the EYE Research Group and have continued developing my skills through the Odin Project. Check out my projects,
                                resume, or visit my links to learn more!
                                <br />
                                <br />
                                Outside of software development, I enjoy playing basketball, bowling,
                                and going to Mariners games.
                            </p>
                            <div className="my-10">
                                <h3 className="text-gray-light">Technologies I've worked with recently:</h3>
                                <div className="grid grid-cols-2 font-mono my-2">
                                    <ul>
                                        <li> &gt; React</li>
                                        <li> &gt; JavaScript</li>
                                        <li> &gt; Node.JS</li>
                                        <li> &gt; CSS Tailwind</li>
                                    </ul>
                                    <ul>
                                        <li> &gt; PHP</li>
                                        <li> &gt; AWS</li>
                                        <li> &gt; MySQL</li>
                                        <li> &gt; MongoDB</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xs:order-1 sm:order-1 md:order-2 -z-10 relative xs:max-h-[500px] flex justify-center">
                            <img src="/profile.JPG" alt="My Image" className="object-cover xs:h-full max-h-[500px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;