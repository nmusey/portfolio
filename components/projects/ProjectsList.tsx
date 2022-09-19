import projects from "../../projects/projects.json";
import {Project} from "../../types/project";
import {ProjectSummary} from "./ProjectSummary";

export const ProjectsList = () => {
    return projects.map((project: Project) => <ProjectSummary project={project}/>);   
};
