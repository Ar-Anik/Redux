import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, title, image, tags, likes, isSaved, createdAt } = blog;

  let saved = isSaved ? <span className="lws-badge">saved</span> : "";

  let allTag = [];
  if (tags?.length > 0) {
    allTag = tags.map(
      (tag, index) => `#${tag}${index === tags.length - 1 ? "" : ","} `
    );
  }

  return (
    <div className="lws-card">
      <Link to={`blogs/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`blogs/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">{allTag}</div>
        <div className="flex gap-2 mt-4">{saved}</div>
      </div>
    </div>
  );
};

export default BlogCard;
