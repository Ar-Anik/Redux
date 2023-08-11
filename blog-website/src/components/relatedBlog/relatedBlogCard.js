import { Link } from "react-router-dom";

const RelatedBlogCard = ({ blog }) => {
  const { id, title, image, tags, createdAt } = blog;

  let allTag = [];
  if (tags?.length > 0) {
    allTag = tags.map(
      (tag, index) => `#${tag}${index === tags.length - 1 ? "" : ","} `
    );
  }

  return (
    <div className="card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blogs/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">{allTag}</div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedBlogCard;
