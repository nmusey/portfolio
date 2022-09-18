import postMetadataList from "../../posts/posts.json";
import {BlogSummary} from "../../components/BlogSummary";

interface PostMetadata {
    title: string;
    summary: string;
    filename: string;
};

export const BlogListPage = () => {
    const metadata = postMetadataList as PostMetadata[]; 
    return metadata.map(({title, summary, filename}) => <BlogSummary title={title} summary={summary} filename={filename} />);
};

export default BlogListPage;
