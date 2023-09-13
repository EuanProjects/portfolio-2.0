import { GitHub, Linkedin, Mail } from 'react-feather';

function Hero() {
    const iconStyle = {
        transformOrigin: 'center',
        transform: 'rotate(180deg)',
        color: '#c5c6c7',
        margin: '16px 0px'
    };

    return (
        <div className="h-screen">
            <div className="fixed left-0 top-36 mx-4 flex items-center origin-center rotate-90">
                <div className="origin-center rotate-90">
                    <a href="https://www.linkedin.com/in/euan-canoy-8b3530180/" target="_blank" rel="noreferrer" className="hover:-translate-y-1">
                        <Mail style={iconStyle} />
                    </a>
                    <a href="https://github.com/ejcanoy" target="_blank" rel="noreferrer" className="hover:-translate-y-1">
                        <GitHub style={iconStyle} />
                    </a>
                    <a href="https://www.linkedin.com/in/euan-canoy-8b3530180/" target="_blank" rel="noreferrer" className="hover:-translate-y-1">
                        <Linkedin style={iconStyle} />
                    </a>
                </div>
            </div>
            <div className="animate-slidein flex-auto py-14 px-14 mx-14">
                <p className="font-mono text-green">Hi, my name is</p>
                <h1 className="text-7xl py-3 font-bold">Euan Canoy</h1>
                <h1 className="text-5xl py-3 text-gray-light font-semibold">I build cool things for the web</h1>
                <div className="max-w-2xl">
                    <p className="py-6 text-gray-light">
                        I am a Full-Stack Developer whose focus is on building websites that are both
                        accessible and user-centric, providing outstanding
                        experiences for all visitors
                    </p>
                </div>
                <button className="border-2 border-blue rounded-md hover:animate-bounce">
                    <span className="px-5 my-6">More Information Below!</span>
                </button>
            </div>
            <a href="mailto:canoye05@gmail.com" className="font-mono fixed bottom-15 right-0 h-28 origin-center rotate-90 text-gray-light text-sm">canoye05@gmail.com</a>
        </div>
    )
}

export default Hero;
