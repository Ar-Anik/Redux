import axios from "../../utils/axios";

const getRealtedBlog = (id = 0, tags = []) => {
  let search_param = "";
  let blog_limit = 2;

  if (tags?.length > 0)
    search_param =
      tags.map((tag) => `tags_like=${tag}`).join("&") +
      `&id_ne=${id}&_limit=${blog_limit}`;

  const response = axios.get(`blogs/?${search_param}`);

  return response;
};

export default getRealtedBlog;
