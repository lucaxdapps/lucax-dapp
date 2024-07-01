import InfoIcon from "@mui/icons-material/Info";
import { Box, IconButton, TextField, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import StyledSliderComponent from "./Slider";

const CalculatorContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background:
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: "16px",
  color: "#fff",
  width: "100%",
  maxWidth: "600px",
  marginBottom: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  background:
    "linear-gradient(270.69deg, rgb(33, 33, 33) 22.1%, rgb(61, 61, 61) 100%)",
  boxShadow:
    "rgba(0, 0, 0, 0.5) 0px 4px 10px, rgba(255, 255, 255, 0.25) 0px 2px 4px inset",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    paddingRight: 0,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-input": {
    padding: "8px",
    color: "#fff",
  },
  width: "100%", // Full width
}));

const CalculatorComponent = () => (
  <CalculatorContainer>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">Calculator</Typography>
      <Tooltip title="Info">
        <IconButton>
          <InfoIcon style={{ color: "#FFFFFF" }} />
        </IconButton>
      </Tooltip>
    </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "16px",
      }}
    >
      <Box sx={{ flex: 1, marginRight: "8px" }}>
        <Typography variant="body2">Staked Amount</Typography>
        <StyledTextField variant="outlined" placeholder="0.00" />
      </Box>
      <Box sx={{ flex: 1, marginLeft: "8px" }}>
        <Typography variant="body2">Weekly %</Typography>
        <StyledTextField variant="outlined" placeholder="0.00" />
      </Box>
    </Box>
    <StyledSliderComponent />
  </CalculatorContainer>
);

export default CalculatorComponent;
