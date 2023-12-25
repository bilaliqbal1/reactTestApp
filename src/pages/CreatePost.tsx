import React, { useState } from "react";
import LoadingCard from '../components/Loading';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createPost } from "../store/features/CreateActions";
import { Button, TextField, Grid, Typography, Card, CardContent } from '@mui/material';
import './styles.css'

// Define the interface for the form data
interface FormData {
  title: string;
  body: string;
}

const CreatePost = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState<FormData>({
    title: '',
    body: '',
  });

  const handleChange = (fieldName: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.title && formData.body) {
      dispatch(createPost(formData))
    } else {
      // Handle validation errors
      console.error('Please fill in all required fields.');
    }
  };
  const { loading, post, error } = useAppSelector((state) => ({ ...state.app }))

  return (
    <>
      <div className="root">
        <Typography variant="h5" gutterBottom>
          Create Post
        </Typography>
        <form className="formClass" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Please enter title"
                variant="outlined"
                value={formData.title}
                onChange={handleChange('title')}
                required
              />
            </Grid>
            <Grid item xs={12} margin={1}>
              <TextField
                label="Please enter body"
                variant="outlined"
                value={formData.body}
                onChange={handleChange('body')}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="button" style={{ marginRight: 10 }} variant="outlined" color="primary" onClick={() => navigate('/')}>
                Back
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      {loading && <LoadingCard />}
      {post && post.title && !loading &&
        <Grid
          container
          spacing={3}>
          <Grid item xs={12}>
            <Card >
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="h5" component="div">
                  {post.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      }
    </>
  );
};

export default CreatePost;