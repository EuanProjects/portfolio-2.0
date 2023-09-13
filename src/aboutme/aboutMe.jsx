function AboutMe() {
    return (
        <>
            <div className="h-screen mx-32">
                <div className="flex items-center">
                    <h2 className="text-2xl">
                        <span className="text-green text-xl font-mono">02. </span> About Me
                    </h2>
                    <hr className="w-7/12 border-t border-green h-1 ml-4 mt-2" />
                </div>
                <div className="grid grid-cols-2 gap-8 my-8 w-3/4">
                    <p className="text-gray-light">
                        Hello, my name is Euan Canoy! I am a <span className="text-blue">Full-Stack Developer</span> based out of Seattle, Washington.
                        I graduated from The University of Washington Bothell in August of 2022. Since then, I have had experience working
                        with the EYE Research Group and have continued developing my skills through the Odin Project. Check out my projects below,
                        download my resume, or visit my links to learn more!

                        <br />
                        <br />

                        Outside of software development, I enjoy playing basketball, bowling,
                        and going to Mariners games.
                    </p>

                    <div className="relative">
                        <img src="/profile.JPG" alt="My Image" className="object-cover"/>
                    </div>               
                </div>
            </div>
        </>
    )
}

export default AboutMe;