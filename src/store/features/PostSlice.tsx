import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPost } from "./GetActions";
import { deletePost } from "./DeleteAction";
import { createPost } from "./CreateActions";

interface PostState {
  post: any; // Adjust the type according to your actual data structure
  loading: boolean;
  error: string | null; // Adjust the type according to your error handling
}

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: null,
    loading: false,
    error: null,
  } as PostState,
  reducers: {},
  extraReducers: (builder) => {
    //for get post
    builder.addCase(getPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });
    // for delete post
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });
    // for delete post
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });
  },
});

export default postSlice.reducer;
