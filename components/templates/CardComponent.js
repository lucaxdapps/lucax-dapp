import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardContainer = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: "16px",
  color: "#fff",
  minWidth: "200px",
  minHeight: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
}));

const CardComponent = ({ title, value }) => (
  <CardContainer>
    <Typography sx={{ color: "#FFA500" }} variant="h6">
      {title}
    </Typography>
    <Typography variant="h5">{value}</Typography>
  </CardContainer>
);

export default CardComponent;
