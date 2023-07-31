const BlogCard = ({ blog }) => {
  const { title, image, tags, likes, isSaved, createdAt } = blog;

  let saved = isSaved ? <span className="lws-badge">saved</span> : "";

  let allTag = [];
  if (tags?.length > 0) {
    allTag = tags.map(
      (tag, index) => `#${tag}${index === tags.length - 1 ? "" : ","} `
    );
  }

  return (
    <div className="lws-card">
      <a href="post.html">
        <img src={image} className="lws-card-image" alt="" />
      </a>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <a href="post.html" className="lws-postTitle">
          {title}
        </a>
        <div className="lws-tags">{allTag}</div>
        <div className="flex gap-2 mt-4">{saved}</div>
      </div>
    </div>
  );
};

export default BlogCard;
