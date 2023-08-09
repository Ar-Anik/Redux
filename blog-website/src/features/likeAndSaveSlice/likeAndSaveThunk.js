import { createAsyncThunk } from "@reduxjs/toolkit";
import { patchLike, patchSaved } from "./likeAndSaveApi";

const likeThunk = createAsyncThunk(
  "likeAndSavedThunk/likeThunk",
  async ({ id = 0, blogLike = 0 }) => {
    const response = await patchLike(id, blogLike);
    return response.data;
  }
);

const savedThunk = createAsyncThunk(
  "likeAndSaveThunk/savedThunk",
  async ({ id = 0, blogSave = false }) => {
    const response = await patchSaved(id, blogSave);
    return response.data;
  }
);

export { likeThunk, savedThunk };
