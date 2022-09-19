import {Project} from "../types/project";

export interface Props {
    project: Project;
}

export const ProjectSummary = (props: Props) => {
    return (
        <div>
            <h1>{props.project.title}</h1>
        </div>   
    );
}
