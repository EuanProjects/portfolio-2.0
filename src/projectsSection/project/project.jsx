import { ExternalLink, GitHub } from 'react-feather'

function Project({ title, description, tools, links, index }) {
    const isEven = index % 2 === 0;
    return (
        <>
            <div className="h-[50vh] my-24">
                <div>
                    <div className={isEven ? "" : "-translate-x-[13%]"}>
                        <h4 className={`font-mono text-xs text-gray-light flex ${isEven ? "justify-start" : "justify-end"}`}>
                            Featured Project
                        </h4>
                        <h3 className={`ont-mono text-3xl flex ${isEven ? "justify-start" : "justify-end"}`}>{title}</h3>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-8 my-8 w-full">
                    <div className={`h-[25vh] w-[120%] my-5 col-span-1 ${isEven ? "order-0" : "order-1 -translate-x-[50%]"}`}>
                        <div className="bg-gray-dark shadow-xl">
                            <p className={`py-2 px-2 text-gray-light ${isEven ? "" : "text-right"}`} >
                                {description}
                            </p>
                        </div>
                        <ul className={`${isEven ? "justify-start" : "justify-end"} flex space-x-4 z-10 mx-2 py-2`}>
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
                    <div className="col-span-2 -z-30">
                        <img src="/erg.gif" alt="EYE Research Group" className="object-cover h-[45vh]" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Project;

