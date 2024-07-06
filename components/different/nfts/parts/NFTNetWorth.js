import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const NetWorthContainer = styled(Box)(({ theme }) => ({
  padding: "40px 16px",
  background:
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(100, 100, 100, 0.2) 3px 5px 5px",
  borderRadius: "20px",
  color: "#fff",
  margin: theme.spacing(2, 0),
  textAlign: "center",
}));

const VerticalDivider = styled(Box)(({ theme }) => ({
  height: "100px", // Set a fixed height
  width: "1px",
  backgroundColor: "#686D76", // Use a visible color
  margin: theme.spacing(0, 2),
  [theme.breakpoints.down("sm")]: {
    display: "none", // Hide vertical divider on small screens
  },
}));

const HorizontalDivider = styled(Box)(({ theme }) => ({
  height: "1px",
  width: "80%", // Adjust width as needed
  backgroundColor: "#686D76", // Use a visible color
  margin: theme.spacing(2, 0),
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block", // Show horizontal divider on small screens
  },
}));

const NFTNetWorth = () => (
  <NetWorthContainer>
    <Box
      sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
      justifyContent="space-around"
      alignItems="center"
    >
      <Box>
        <Typography variant="h4">$0</Typography>
        <Typography variant="subtitle1">NET-WORTH</Typography>
      </Box>
      <VerticalDivider />
      <HorizontalDivider />
      <Box>
        <Typography variant="h4">0</Typography>
        <Typography variant="subtitle1">NFTs</Typography>
      </Box>
    </Box>
  </NetWorthContainer>
);

export default NFTNetWorth;
