const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const fetchVideo = createAsyncThunk("fetchVideo", async () => {
  const response = await fetch("http://localhost:9000/videos");
  const videos = await response.json();

  return videos;
});

const fetchSortVideos = createAsyncThunk("fetchSortVideos", async (url) => {
  const response = await fetch(url);
  const sortVideos = await response.json();

  return sortVideos;
});

module.exports.fetchVideo = fetchVideo;
module.exports.fetchSortVideos = fetchSortVideos;
