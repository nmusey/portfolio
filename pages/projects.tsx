import projects from "../projects/projects.json";
import {ProjectSummary} from "../components/projects/ProjectSummary";
import {Project} from "../types/project";

export const ProjectsPage = () => {
    return projects.map((project: Project) => <ProjectSummary project={project}/>); 
};

export default ProjectsPage;
