function Contact() {
    return (
        <>
            <div className="2xl:grid 2xl:place-items-center 2xl:h-[75vh] xl:h-[50vh] lg:h-[35vh] md:h-[25vh] sm:h-[50vh] xs:h[75vh] xs:mb-[250px]" id="contact">
                <div>
                    <div className="flex justify-center">
                        <h2 className="md:text-5xl sm:text-3xl xs:text-3xl">
                            <span className="text-green text-xl font-mono">04. </span>
                            Connect with Me!
                        </h2>
                    </div>
                    <div className="grid h-full w-full justify-items-center my-12">
                        <div className="lg:w-3/12 md:w-1/3 xs:w-8/12">
                            <p className="text-gray-light 2xl:text-lg lg:text-lg sm:text-xs xs:text-sm">
                                My inbox is open for new opportunities! Also feel free to reach out
                                through the links displayed to talk about anything
                                software development, bowling, basketball, or
                                baseball!
                            </p>
                            <a href="mailto:canoye05@gmail.com?subject=Hello!%20&body=Hi%20Euan!%20">
                                <button className="border-2 border-blue rounded-md
                                                    absolute bg-gray w-32
                                                    h-12 transform hover:-translate-y-1 hover:-translate-x-1 transition-transform
                                                    ease-in-out delay-150 my-6 z-10">
                                    <span>Say Hello!</span>
                                </button>
                                <div className="bg-gray-light border-blue hover:border-gray-light w-32 h-12 z-0 my-6 absolute rounded-md"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact