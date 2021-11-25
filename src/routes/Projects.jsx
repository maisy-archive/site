import ProjectsIcon from "@material-design-icons/svg/round/code.svg";
import ProjectCard from "../components/ProjectCard";
import { routesArray } from "../Routes";

export default {
    type: "page",
    name: "Projects",
    description: "Home page for projects",
    icon: ProjectsIcon,
    path: "/projects",
    component: () => {
        return (
        <>
            <h1 class="text-4xl mb-2">Projects</h1>
            <h2 class="mb-6">Here are some of my projects.</h2>

            <div class="flex-col w-full">
                {routesArray.map((project) => function() {
                    if (project.type !== "project") return;
                    return (
                        <ProjectCard name={project.name} description={project.description} href={project.path}/>
                    )
                })}
            </div>
        </>
    )}
}