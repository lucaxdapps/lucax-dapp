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
    background: "linear-gradient(90deg, #FFA500, #FF0000)",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    background: "linear-gradient(90deg, #FFA500, #FF0000)",
  },
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  width: "66%",
  margin: "0 auto",
}));

const StyledSliderComponent = () => (
  <StyledContainer>
    <Typography
      variant="body2"
      sx={{ marginTop: "16px", textAlign: "center", color: "#FFA500" }}
    >
      Period: 7 Days
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
        <Typography sx={{ color: "#FFA500" }} variant="body2">
          Total Reward
        </Typography>
        <Typography variant="h6">$ 0.00</Typography>
      </Box>
      <Box>
        <Typography sx={{ color: "#FFA500" }} variant="body2">
          Daily Reward
        </Typography>
        <Typography variant="h6">$ 0.00</Typography>
      </Box>
    </Box>
  </StyledContainer>
);

export default StyledSliderComponent;
