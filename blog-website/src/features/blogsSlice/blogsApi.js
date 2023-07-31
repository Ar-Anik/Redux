import axios from "../../utils/axios";

const getBlogs = async (sorts, filter) => {
  let queryParameter = "";
  if (sorts === "newest") {
    queryParameter = "_sort=createdAt&_order=desc";
  } else if (sorts === "most_liked") {
    queryParameter = "_sort=likes&_order=desc";
  }

  if (filter === "saved") {
    queryParameter += "&isSaved=true";
  }

  const response = await axios.get(`blogs/?${queryParameter}`);

  return response;
};

export default getBlogs;
