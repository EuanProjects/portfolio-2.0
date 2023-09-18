import { ExternalLink, GitHub } from 'react-feather'

function Project({ title, description, tools, links, index }) {
    const isEven = index % 2 === 0;
    return (
        <>
            <div className="xl:h-[55vh] lg:h-[50vh] md:h-[500px] sm:h-[800px] xs:h-[650px] md:my-12 sm:my-12 xs:my-24">
                <div>
                    <div>
                        <h4 className={`font-mono text-xs text-gray-light flex ${isEven ? "justify-start" : "justify-end"}`}>
                            Featured Project
                        </h4>
                        <h3 className={`font-mono md:text-2xl sm:text-xl flex ${isEven ? "justify-start" : "md:justify-end sm:justify-end xs:justify-end"}`}>{title}</h3>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-8 my-8 w-full">
                    <div className={`h-[25vh] md:w-[160%] lg:w-[140%] xl:w-[140%] 2xl:w-[120%] my-5 col-span-1 ${isEven ? "md:order-1 sm:order-1 xs:order-1" : "order-1 2xl:-translate-x-[17%] xl:-translate-x-[28%] lg:-translate-x-[29%] md:-translate-x-[39%]"}`}>
                        <div className="bg-gray-dark shadow-xl">
                            <p className={`py-2 px-2 text-gray-light ${isEven ? "" : "text-right"}`} >
                                {description}
                            </p>
                        </div>
                        <ul className={`${isEven ? "justify-start" : "justify-end"} flex space-x-4 z-10 mx-2 py-2 flex-wrap`}>
                            {tools.map((tool) => (
                                <li className="list-none font-mono text-gray-light text-xs" key={tool}>
                                    {tool}
                                </li>
                            ))}
                        </ul>
                        <div className={`flex ${isEven ? "justify-start" : "justify-end"} mx-2 space-x-2`}>
                            {
                                links &&
                                links.link &&
                                <a href={links.link} target="_blank" rel="noreferrer">
                                    <ExternalLink className="stroke-gray-light hover:stroke-white hover:-translate-y-1 transition ease-in-out delay-150" size={21} />
                                </a>}
                            {
                                links &&
                                links.github &&
                                <a href={links.github} target="_blank" rel="noreferrer">
                                    <GitHub className="stroke-gray-light hover:stroke-white hover:-translate-y-1 transition ease-in-out delay-150" size={21} />
                                </a>
                            }
                        </div>
                    </div>
                    <div className={`flex md:col-span-2 -z-30 ${isEven ? "lg:col-span-2 md:col-span-2 lg:order-1 md:order-1 sm:order-0" : "justify-end"}`}>
                        <img src="/erg.gif" alt="EYE Research Group" className="object-contain md:h-[45vh] sm:h-[35vh] xs:h-[25vh]" />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Project;

