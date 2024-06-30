import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#1c1c1c",
  padding: theme.spacing(2),
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  color: "#fff",
  minWidth: "200px",
  minHeight: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const CardComponent = ({ title, value }) => (
  <CardContainer>
    <Typography variant="h6">{title}</Typography>
    <Typography variant="h4">{value}</Typography>
  </CardContainer>
);

export default CardComponent;
