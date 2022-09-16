import ReactMarkdown from "react-markdown";

export interface Props {
    contents: string; 
}

export const BlogPost = (props: Props) => {
    return (
        <ReactMarkdown>{props.contents}</ReactMarkdown>
    )
}
