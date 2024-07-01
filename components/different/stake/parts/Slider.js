import { Box, Slider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSlider = styled(Slider)(({ theme }) => ({
  height: 8, // Thicker line
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "inherit",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    background: "linear-gradient(90deg, #ba68c8, #1e88e5)",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    background: "linear-gradient(90deg, #ba68c8, #1e88e5)",
  },
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  width: "66%",
  margin: "0 auto",
}));

const StyledSliderComponent = () => (
  <StyledContainer>
    <Typography variant="body2" sx={{ marginTop: "16px", textAlign: "center" }}>
      Period: 1 Weeks
    </Typography>
    <StyledSlider defaultValue={1} step={1} marks min={1} max={52} />
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "16px",
      }}
    >
      <Box>
        <Typography variant="body2">Total Profit</Typography>
        <Typography variant="h6">$ 0.00</Typography>
      </Box>
      <Box>
        <Typography variant="body2">Weekly Profit</Typography>
        <Typography variant="h6">$ 0.00</Typography>
      </Box>
    </Box>
  </StyledContainer>
);

export default StyledSliderComponent;
