const store = require("./app/store");
const { fetchVideo, fetchSortVideos } = require("./thunkFunction");

const getUrl = () => {
  const state = store.getState();
  const tags = state?.video?.video?.tags;

  if (tags) {
    let url = "http://localhost:9000/videos";
    for (var i = 0; i < tags.length; i++) {
      if (i === 0) {
        url = url + "?tags_like=" + tags[i];
      } else {
        url = url + "&tags_like=" + tags[i];
      }
    }
    url += "&_sort=views&_order=desc";
    return url;
  } else {
    return "";
  }
};

store
  .dispatch(fetchVideo())
  .then(() => {
    const url = getUrl();
    store.dispatch(fetchSortVideos(url));
  })
  .catch((error) => {
    console.log("Error : ", error);
  });
