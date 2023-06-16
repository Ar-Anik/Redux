import { createAsyncThunk } from "@reduxjs/toolkit";
import { patchLike, patchUnlike } from "./likeUnlikeAPI";

const likeThunk = createAsyncThunk(
  "likeUnlike/likeThunk",
  async ({ id = 0, likes = 0 }) => {
    const response = await patchLike(id, likes);

    return response.data;
  }
);

const unlikeThunk = createAsyncThunk(
  "likeUnlike/unlikeThunk",
  async ({ id = 0, unlikes = 0 }) => {
    const response = await patchUnlike(id, unlikes);

    return response.data;
  }
);

export { likeThunk, unlikeThunk };
