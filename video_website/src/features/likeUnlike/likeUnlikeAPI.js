import axios from "../../utils/axios";

const patchLike = async (id = 0, likes = 0) => {
  const response = await axios.patch(`videos/${id}`, {
    likes: likes,
  });

  return response;
};

const patchUnlike = async (id = 0, unlikes = 0) => {
  const response = await axios.patch(`videos/${id}`, {
    unlikes: unlikes,
  });

  return response;
};

export { patchLike, patchUnlike };
