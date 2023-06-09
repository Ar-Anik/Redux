import axios from "../../utils/axios";

const getTag = async () => {
  const response = await axios.get("tags");

  return response;
};

export default getTag;
