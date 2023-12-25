import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../store/hooks";
import LoadingCard from "../components/Loading";
import { getPost } from "../store/features/GetActions";
import { deletePost } from "../store/features/DeleteAction";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'

const GetPost = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const { loading, post, error } = useAppSelector((state) => ({ ...state.app }))

  useEffect(() => {
    dispatch(getPost());
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'userId', headerName: 'User ID', width: 30 },
    { field: 'title', headerName: 'Title', width: 350 },
    {
      field: 'body',
      headerName: 'Post Body',
      width: 1000,
    }
  ];

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Social Media App</h1>
      <Grid container mb={3} pr={3} justifyContent={"flex-end"}>
        <Button variant="contained" onClick={() => navigate('/create')}>
          Create User Post
        </Button>
      </Grid>
      {loading && <LoadingCard />}
      {
        post && !loading && (
          <DataGrid
            rows={post}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 8 },
              },
            }}
            pageSizeOptions={[8, 16]}
          />
        )
      }
    </div>
  );
};

export default GetPost;