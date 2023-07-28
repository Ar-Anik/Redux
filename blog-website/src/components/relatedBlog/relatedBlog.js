import RelatedBlogCard from "./relatedBlogCard";

const RelatedBlog = () => {
  return (
    <aside>
      <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div class="space-y-4 related-post-container">
        <RelatedBlogCard />
      </div>
    </aside>
  );
};

export default RelatedBlog;
