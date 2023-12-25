import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk('post/getPost', async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  });