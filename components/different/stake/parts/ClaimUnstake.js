import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LayersIcon from "@mui/icons-material/Layers";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const FormContainer = styled(Box)(({ theme }) => ({
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
  borderRadius: "20px",
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

const ButtonContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  width: "100%",
  marginTop: theme.spacing(2),
  "& .MuiButton-root": {
    position: "absolute",
    right: 0,
    height: "100%",
    borderRadius: "20px",
  },
}));

const ClaimUnstakeComponent = ({
  title,
  value,
  onChange,
  buttonText,
  Icon,
}) => (
  <FormContainer>
    <Grid container alignItems="center" spacing={1}>
      <Grid item>{Icon && <Icon sx={{ color: "#fff" }} />}</Grid>
      <Grid item>
        <Typography sx={{ color: "#FFA500" }} variant="h6">
          {title}
        </Typography>
      </Grid>
    </Grid>
    <ButtonContainer>
      <StyledTextField
        variant="outlined"
        value={value}
        onChange={onChange}
        placeholder="3,000,000.00"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF4500",
                  color: "#fff",
                  borderRadius: "0 20px 20px 0",
                  height: "100%",
                  "&:hover": {
                    backgroundColor: "#FF4500",
                  },
                }}
              >
                {buttonText}
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </ButtonContainer>
  </FormContainer>
);

const ClaimUnstake = () => {
  const [unstakeValue, setUnstakeValue] = useState("");
  const [claimValue, setClaimValue] = useState("");

  const handleUnstakeChange = (e) => {
    setUnstakeValue(e.target.value);
  };

  const handleClaimChange = (e) => {
    setClaimValue(e.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <ClaimUnstakeComponent
          title="Total Unstake Available"
          value={unstakeValue}
          onChange={handleUnstakeChange}
          buttonText="- UNSTAKE ALL"
          Icon={LayersIcon}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ClaimUnstakeComponent
          title="Total Claimable Reward"
          value={claimValue}
          onChange={handleClaimChange}
          buttonText="- CLAIM ALL"
          Icon={AttachMoneyIcon}
        />
      </Grid>
    </Grid>
  );
};

export default ClaimUnstake;
