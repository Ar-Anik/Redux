import axios from "../../utils/axios";

const getVideos = async () => {
  const response = await axios.get("videos");

  return response;
};

export default getVideos;
