import { SwapHoriz } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const SwapperContainer = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: theme.spacing(2),
  color: "#fff",
  width: "100%",
}));

const HeadlineContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
}));

const Dropdown = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgb(36, 36, 36)",
    color: "#fff",
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "rgb(60, 60, 60)",
    },
    "&:hover fieldset": {
      borderColor: "#FFA500",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFA500",
    },
  },
  "& .MuiSelect-icon": {
    color: "#fff",
  },
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgb(36, 36, 36)",
    color: "#fff",
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "rgb(60, 60, 60)",
    },
    "&:hover fieldset": {
      borderColor: "#FFA500",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFA500",
    },
  },
}));

const SwapButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1),
  border: "1px solid rgb(0, 128, 0)",
  color: "#fff",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "1.2rem",
  "&:hover": {
    border: "1px solid rgb(0, 150, 0)",
    backgroundColor: "#111111",
  },
}));

const SwapperForm = () => {
  const [sendValue, setSendValue] = useState(0);
  const [receiveValue, setReceiveValue] = useState(0);

  const handleSendChange = (e) => {
    const value = parseFloat(e.target.value);
    setSendValue(value);
    setReceiveValue(value * 1); // Example: 1:1 ratio
  };

  return (
    <SwapperContainer>
      {/* Header */}
      <HeadlineContainer>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SwapHoriz
            sx={{ color: "#FFFFFF", fontSize: 40, marginRight: "10px" }}
          />
          <Typography
            variant="h6"
            sx={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            SWAPPER
          </Typography>
        </Box>
      </HeadlineContainer>
      <Divider sx={{ backgroundColor: "#fff", marginBottom: 2 }} />

      {/* First Dropdown */}
      <Dropdown
        select
        variant="outlined"
        fullWidth
        value="WBNB"
        sx={{ marginBottom: 2 }}
      >
        <MenuItem value="WBNB">WBNB</MenuItem>
        <MenuItem value="USDC">USDC</MenuItem>
      </Dropdown>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="title1"
          sx={{
            color: "#FFA500",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: 1,
          }}
        >
          Amount to Send
        </Typography>
      </Box>

      {/* First Input */}
      <StyledInput
        variant="outlined"
        fullWidth
        type="number"
        value={sendValue}
        onChange={handleSendChange}
        placeholder="0.00"
        sx={{ marginBottom: 2 }}
        inputProps={{
          style: {
            textAlign: "right", // Aligns the text to the right
          },
        }}
      />

      {/* Second Dropdown */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="title1"
          sx={{
            color: "#FFA500",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: 1,
          }}
        >
          Estimated Receive
        </Typography>
      </Box>
      <Dropdown
        select
        variant="outlined"
        fullWidth
        value="POINT+"
        sx={{ marginBottom: 2 }}
      >
        <MenuItem value="POINT+">POINT+</MenuItem>
      </Dropdown>

      {/* Second Input */}
      <StyledInput
        variant="outlined"
        fullWidth
        type="number"
        value={receiveValue.toFixed(8)}
        placeholder="0.00"
        inputProps={{
          readOnly: true,
          style: {
            textAlign: "right", // Aligns the text to the right
          },
        }}
        sx={{ marginBottom: 2 }}
      />

      {/* Swap Button */}
      <SwapButton fullWidth>Swap</SwapButton>
    </SwapperContainer>
  );
};

export default SwapperForm;
