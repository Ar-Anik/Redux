import axios from "../../utils/axios";

const getBlog = async (blogId) => {
  const response = await axios.get(`blogs/${blogId}`);
  console.log("getBlog Response : ", response);
  return response;
};

export default getBlog;
