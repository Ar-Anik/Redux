import axios from "../../utils/axios";

const getVideos = async (tags = [], search = "") => {
  let queryParameter = "";

  if (tags?.length > 0) {
    queryParameter = tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryParameter += `&q=${search}`;
  }

  const response = await axios.get(`videos/?${queryParameter}`);

  return response;
};

export default getVideos;
