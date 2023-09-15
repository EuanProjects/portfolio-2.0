import { GitHub, Linkedin, Mail, FileText } from 'react-feather';

function Hero() {

    return (
        <>
            <div className="h-screen">
                <div className="fixed left-0 top-36 mx-4 flex items-center origin-center rotate-90">
                    <div className="origin-center rotate-90">
                        <a href="/8-2023.pdf" target="_blank" rel="noreferrer">
                            <FileText className="stroke-gray-light hover:stroke-white hover:translate-y-1 transition ease-in-out delay-150 rotate-180 my-3" />
                        </a>
                        <a href="mailto:canoye05@gmail.com?subject=Hello!%20&body=Hi%20Euan!%20" target="_blank" rel="noreferrer">
                            <Mail className="stroke-gray-light hover:stroke-white hover:translate-y-1 transition ease-in-out delay-150 rotate-180 my-3" />
                        </a>
                        <a href="https://github.com/ejcanoy" target="_blank" rel="noreferrer">
                            <GitHub className="stroke-gray-light hover:stroke-white hover:translate-y-1 transition ease-in-out delay-150 rotate-180 my-3" />
                        </a>
                        <a href="https://www.linkedin.com/in/euan-canoy-8b3530180/" target="_blank" rel="noreferrer">
                            <Linkedin className="stroke-gray-light hover:stroke-white hover:translate-y-1 transition ease-in-out delay-150 rotate-180 my-3" />
                        </a>
                    </div>
                </div>
                <div className="grid place-items-center h-[75vh]">
                    <div>
                        <p className="animate-slideinFast font-mono text-green">Hi, my name is</p>
                        <h1 className="animate-slideinRegular text-7xl py-3 font-bold">Euan Canoy</h1>
                        <h1 className="animate-slideinSlow text-5xl py-3 text-gray-light font-semibold">I build cool things for the web</h1>
                        <div className="animate-slideinExtraSlow max-w-2xl">
                            <p className="py-6 text-gray-light">
                                I am a Full-Stack Developer whose focus is on building websites that are both
                                accessible and user-centric, providing outstanding
                                experiences for all visitors
                            </p>
                        </div>
                        <a href="mailto:canoye05@gmail.com?subject=Hello!%20&body=Hi%20Euan!%20">
                            <button className="border-2 border-blue rounded-md
                                                    absolute bg-gray w-36
                                                    h-12 transform hover:-translate-y-1 hover:-translate-x-1 transition-transform
                                                    ease-in-out delay-150 my-6 z-10">
                                <span>See More Below!</span>
                            </button>
                            <div className="bg-gray-light border-blue hover:border-gray-light w-36 h-12 z-0 my-6 absolute rounded-md"></div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
