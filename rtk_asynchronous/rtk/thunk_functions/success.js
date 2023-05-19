const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// thunk functions
const fetchPosts = createAsyncThunk("fetchPost", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/?_limit=6"
  );
  const posts = await response.json();

  return posts;
});

module.exports = fetchPosts;
