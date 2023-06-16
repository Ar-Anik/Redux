import axios from "../../utils/axios";

// ?tags_like=css&tags_like=javascript&id_ne=4&_limit=2
const getRelatedVideos = async (id = 0, tags = []) => {
  let queryParameter = "";
  let limit = 5;

  queryParameter =
    tags
      .map((tag) => {
        return `tags_like=${tag}`;
      })
      .join("&") + `&id_ne=${id}&_limit=${limit}`;

  const response = await axios.get(`videos/?${queryParameter}`);

  return response;
};

export default getRelatedVideos;
