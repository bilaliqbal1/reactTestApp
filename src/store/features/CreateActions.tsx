import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk('post/createPost', async (values: any) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: values.title,
            body: values.body
        })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  });