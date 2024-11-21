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
import ConfirmationDialog from "./ConfirmationDialog"; // Importing the dialog component
import StakeLucaxDialog from "./StakeLucaxDialog";

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
  width: "100%",
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

const StakeComponent = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isStakeLucaxOpen, setIsStakeLucaxOpen] = useState(false);

  const handleConfirmationOpenDialog = () => {
    setIsConfirmationOpen(true);
  };

  const handleConfirmationCloseDialog = () => {
    setIsConfirmationOpen(false);
  };
  const handleStakeLucaxOpenDialog = () => {
    setIsStakeLucaxOpen(true);
  };

  const handleStakeLucaxCloseDialog = () => {
    setIsStakeLucaxOpen(false);
  };

  return (
    <>
      <FormContainer>
        <Grid container spacing={3}>
          <Grid item xs={6} sx={{ padding: "10px", width: "100%" }}>
            <Typography sx={{ color: "#FFA500" }} variant="h6">
              Stake
            </Typography>
            <Typography variant="body2">Amount to Stake</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              padding: "10px",
              width: "100%",
              textAlign: {
                xs: "left",
                sm: "right",
              },
            }}
          >
            <Typography sx={{ color: "#FFA500" }} variant="h6">
              Daily
            </Typography>
            <Typography variant="body2">1.5%</Typography>
          </Grid>
        </Grid>
        <ButtonContainer>
          <StyledTextField
            variant="outlined"
            placeholder="0.00"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FFA500",
                      color: "#fff",
                      borderRadius: "0 20px 20px 0",
                      height: "100%",
                      "&:hover": {
                        backgroundColor: "#FFA500",
                      },
                    }}
                    onClick={handleConfirmationOpenDialog}
                  >
                    DEPOSIT
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </ButtonContainer>
      </FormContainer>

      {/* Dialog Component */}
      <ConfirmationDialog
        open={isConfirmationOpen}
        onClose={handleConfirmationCloseDialog}
        onOpenStakeLucaxDialog={handleStakeLucaxOpenDialog}
      />
      <StakeLucaxDialog
        open={isStakeLucaxOpen}
        onClose={handleStakeLucaxCloseDialog}
      />
    </>
  );
};

export default StakeComponent;
