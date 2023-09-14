import Project from "./project/project";
import projectData from "./project/projectData";

function ProjectsSection() {
    const viewHeight = projectData.length * 50 + "vh";
    return (
        <>
            <div className={`h-[${viewHeight}] mx-32 mb-48`}>
                <div className="flex items-center">
                    <h2 className="text-4xl">
                        <span className="text-green text-xl font-mono">03. </span> Projects
                    </h2>
                    <hr className="w-7/12 border-t border-green h-1 ml-4 mt-2" />
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
        </>
    );
}

export default ProjectsSection;
