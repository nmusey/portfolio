import {Project} from "../types/project";

export interface Props {
    project: Project;
}

export const ProjectSummary = ({project}: Props) => {
    return (
        <div>
            <h1>{project.title}</h1>
            <div>
                <p>{project.summary}</p>
                <div>
                    { project.postUrl ? <a href={project.postUrl}>Blog Post</a> : null }
                    { project.repoUrl ? <a href={project.repoUrl}>Source Code</a> : null }
                    { project.repoUrl ? <a href={project.liveUrl}>Live Site</a> : null }
                </div>
            </div>
        </div>   
    );
}
