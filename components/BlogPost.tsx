import ReactMarkdown from "react-markdown";

export interface Props {
    postContents: string; 
}

export const BlogPost = (props: Props) => {
    return (
        <ReactMarkdown>{props.postContents}</ReactMarkdown>
    )
}
