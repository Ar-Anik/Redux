import { useDispatch, useSelector } from "react-redux";
import RelatedBlogCard from "./relatedBlogCard";
import { useEffect } from "react";
import { fetchRelatedBlogs } from "../../features/relatedBlog/relatedBlogSlice";
import Message from "../../utils/message";

const RelatedBlog = ({ id = 0, tags = [] }) => {
  const dispatch = useDispatch();
  const { isLoading, blogs, isError, error } = useSelector(
    (state) => state.relatedBlog
  );

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ id, tags }));
  }, [dispatch, id, tags]);

  let content;

  if (isLoading) content = <Message message={"...Loading"} />;
  else if (!isLoading && isError && error)
    content = <Message message={error} />;
  else if (!isLoading && !isError && !error && blogs.length === 0)
    content = <Message message={"No Data Found."} />;
  else if (blogs?.length > 0) {
    content = blogs.map((blog, index) => (
      <RelatedBlogCard key={index} blog={blog} />
    ));
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
};

export default RelatedBlog;
