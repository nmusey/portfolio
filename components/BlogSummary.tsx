export interface Props {
    title: string;
    summary: string;
    filename: string;
}

export const BlogSummary = (props: Props) => {
    return (
        <a href={`posts/${props.filename}`}>
            <div>
                <h4>{props.title}</h4>
                <p>{props.summary}</p>
            </div>
        </a>
    );
};
