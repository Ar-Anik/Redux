const store = require("./app/store");
const fetchPosts = require("./thunk_functions/success");

store.dispatch(fetchPosts());
