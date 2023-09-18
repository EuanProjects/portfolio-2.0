import Project from "./project/project";
import projectData from "./project/projectData";

function ProjectsSection() {
    const viewHeight = projectData.length * 50 + "vh";
    return (
        <>
            <div className={`h-[${viewHeight}] mb-48 flex justify-center sm:px-6 xs:px-6 `} id="projects">
                <div className="md:w-[80vw] lg:w-[73vw] 2xl:w-1/2">
                    <div className="flex items-center">
                        <h2 className="sm:text-4xl xs:text-2xl">
                            <span className="text-green text-xl font-mono">03. </span> Projects
                        </h2>
                        <hr className="w-7/12 xs:w-6/12 border-t border-green h-1 ml-4 mt-2" />
                    </div>
                    {projectData.map((projectInfo, index) => (
                        <Project
                            title={projectInfo.title}
                            description={projectInfo.description}
                            tools={projectInfo.tools}
                            key={projectInfo.id}
                            links={projectInfo.links}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProjectsSection;
