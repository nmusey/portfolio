import fs from "fs";
import {postFilePath} from "../../utils/files";
import postList from "../../posts/posts.json";
import {Post} from "../../posts/Post";
import {BlogPost} from "../../components/BlogPost";
import {GetStaticPropsContext} from "next";

interface Props {
    contents: string;    
};

export const getStaticPaths = async () => {
    const paths = postList.map((post: Post) => ({
        params: { slug: post.slug }         
    })); 

    return {
        paths,
        fallback: false
    };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const post = postList.find((post: Post) => post.slug == context.params.slug);
    const contents = await fs.promises.readFile(postFilePath(post.filename));
    return { props: { contents: contents.toString() }};
}

export const SlugPage = (props: Props) => {
    console.log(props);
    return <BlogPost contents={props.contents} />;
}

export default SlugPage;
