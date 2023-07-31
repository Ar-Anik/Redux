import BlogDetail from "../components/blogDetail";
import HomeIcon from "../components/homeIcon";
import Navbar from "../components/navbar";
import RelatedBlog from "../components/relatedBlog/relatedBlog";

const Blog = () => {
  return (
    <>
      <Navbar />

      <HomeIcon />

      <section className="post-page-container">
        <BlogDetail />
        <RelatedBlog />
      </section>
    </>
  );
};

export default Blog;
