import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  likeThunk,
  savedThunk,
} from "../features/likeAndSaveSlice/likeAndSaveThunk";

const BlogDetail = ({ blog }) => {
  const { id, title, description, image, tags, likes, isSaved } = blog;

  const dispatch = useDispatch();
  const [blogLike, setBlogLike] = useState(likes);
  const [blogSave, setBlogSave] = useState(isSaved);

  let all_tags = "";
  if (tags?.length > 0) {
    all_tags = tags.map(
      (tag, index) => `#${tag}${index === tags.length - 1 ? "" : ","} `
    );
  }

  const handlelike = () => {
    dispatch(likeThunk({ id, blogLike }));
    setBlogLike(blogLike + 1);
  };

  const handleSave = () => {
    dispatch(savedThunk({ id, blogSave }));
    if (blogSave) setBlogSave(false);
    else setBlogSave(true);
  };

  return (
    <main className="post">
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {all_tags}
        </div>
        <div className="btn-group">
          <button
            className="like-btn"
            id="lws-singleLinks"
            onClick={handlelike}
          >
            <i className="fa-regular fa-thumbs-up"></i> {blogLike}
          </button>

          <button
            className={`${blogSave ? "active" : ""} save-btn`}
            id="lws-singleSavedBtn"
            onClick={handleSave}
          >
            <i className="fa-regular fa-bookmark"></i> Saved
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
