import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const RaisedRoyaltyContainer = styled(Box)(({ theme }) => ({
  padding: "40px 16px",
  background:
    "linear-gradient(102.49deg, rgb(16, 16, 16) 4.28%, rgb(36, 36, 36) 61.94%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
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

const GradientLine = styled(Box)(({ theme }) => ({
  height: "8px",
  width: "100%",
  background: "linear-gradient(to right, #FF4500, #FFA500)",
  borderRadius: "4px",
  marginTop: theme.spacing(2),
}));

const Royalty = () => (
  <RaisedRoyaltyContainer>
    <Box
      sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
      justifyContent="space-around"
      alignItems="center"
    >
      <Box>
        <Typography variant="h5">RAISED</Typography>
        <Typography variant="h3">$1,000,000.00</Typography>
      </Box>
      <VerticalDivider />
      <HorizontalDivider />
      <Box>
        <Typography variant="h5">ROYALTY POOL</Typography>
        <Typography variant="h3">$30,000.00</Typography>
      </Box>
    </Box>
    <GradientLine />
  </RaisedRoyaltyContainer>
);

export default Royalty;
