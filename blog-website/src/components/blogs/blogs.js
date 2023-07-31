import { useDispatch, useSelector } from "react-redux";
import BlogCard from "./blogCard";
import { useEffect } from "react";
import { fetchBlogs } from "../../features/blogsSlice/blogSlice";
import Message from "../../utils/message";

const Blogs = () => {
  const dispatch = useDispatch();
  const { isLoading, blogs, isError, error } = useSelector(
    (state) => state.blogs
  );

  const { sorts, filter } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchBlogs({ sorts, filter }));
  }, [dispatch, sorts, filter]);

  let content = [];

  if (isLoading) {
    content = <Message message={"Loading..."} />;
  } else if (!isLoading && isError && error) {
    content = <Message message={error} />;
  } else if (blogs?.length > 0) {
    content = blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default Blogs;
