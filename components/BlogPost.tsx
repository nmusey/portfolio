import ReactMarkdown from "react-markdown";

export interface Props {
    contents: string; 
}

export const BlogPost = (props: Props) => {
    console.log(props);
    return (
        <ReactMarkdown>{props.contents}</ReactMarkdown>
    )
}
