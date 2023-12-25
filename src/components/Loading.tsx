import React from "react";
import { Skeleton, Box } from "@mui/material";
const LoadingCard = () => {
  return <Box sx={{ width: 1400 }}>
    <Skeleton />
    <Skeleton animation="wave" width="80%" />
    <Skeleton animation="wave" width="60%" />
    <Skeleton animation="wave" />
    <Skeleton animation="wave" />
    <Skeleton animation="wave" width="40%" />
    <Skeleton animation="wave" width="20%" />
  </Box>;
};

export default LoadingCard;