import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "rgb(16, 16, 16)",
    color: "#fff",
    borderRadius: "20px",
    padding: theme.spacing(2),
    border: "2px solid white",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "10px",
  padding: "10px 20px",
  fontWeight: "bold",
  backgroundColor: "#FFA500",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#E69500",
  },
}));

const StakeLucaxDialog = ({ open, onClose }) => {
  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "#FFFFFF",
          position: "relative",
          border: "2px solid #FFA500",
          borderRadius: "20px",
        }}
      >
        Stake LUCAX
      </DialogTitle>
      <DialogContent>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "16px",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          This is the content for the Stake LUCAX dialog box.
        </Typography>
        <Box textAlign="center">
          <StyledButton onClick={onClose}>Close</StyledButton>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default StakeLucaxDialog;
