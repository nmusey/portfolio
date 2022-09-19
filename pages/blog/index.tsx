import postMetadataList from "../../posts/posts.json";
import {BlogSummary} from "../../components/BlogSummary";
import {Post} from "../../types/post";

export const BlogListPage = () => {
    const metadata = postMetadataList as Post[]; 
    return metadata.map(({title, summary, filename}) => <BlogSummary title={title} summary={summary} filename={filename} />);
};

export default BlogListPage;
