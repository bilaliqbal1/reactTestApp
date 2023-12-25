import { createAsyncThunk } from "@reduxjs/toolkit";

export const deletePost = createAsyncThunk('post/deletePost', async (id: number) => {
  console.log("here");

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});