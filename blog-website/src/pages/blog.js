import { useDispatch, useSelector } from "react-redux";
import BlogDetail from "../components/blogDetail";
import HomeIcon from "../components/homeIcon";
import RelatedBlog from "../components/relatedBlog/relatedBlog";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchBlog } from "../features/blogSlice/blogSlice";
import Message from "../utils/message";

const Blog = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();

  const { isLoading, blog, isError, error } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  let content = "";
  const { id, tags } = blog || "";

  if (isLoading) {
    content = <Message message={"Loading..."} />;
  } else if (!isLoading && isError && error) {
    content = <Message message={error} />;
  } else if (!isLoading && !isError && !blog?.id) {
    content = <Message message={"Blog Not Found"} />;
  } else if (!isLoading && !isError && blog?.id) {
    content = (
      <section className="post-page-container">
        <BlogDetail blog={blog} />
        <RelatedBlog id={id} tags={tags} />
      </section>
    );
  }

  return (
    <>
      <HomeIcon />
      {content}
    </>
  );
};

export default Blog;
