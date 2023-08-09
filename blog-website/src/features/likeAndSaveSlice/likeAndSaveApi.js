import axios from "../../utils/axios";

const patchLike = async (id = 0, blogLike = 0) => {
  const response = await axios.patch(`blogs/${id}`, {
    likes: blogLike + 1,
  });

  return response;
};

const patchSaved = async (id = 0, blogSaved = false) => {
  const response = await axios.patch(`blogs/${id}`, {
    isSaved: blogSaved ? false : true,
  });

  return response;
};

export { patchLike, patchSaved };
