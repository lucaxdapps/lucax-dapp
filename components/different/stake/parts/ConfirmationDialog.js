import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

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
}));

const ConfirmationDialog = ({ open, onClose, onOpenStakeLucaxDialog }) => {
  const handleContinue = () => {
    onClose(); // Close the ConfirmationDialog
    onOpenStakeLucaxDialog(); // Open StakeLucaxDialog
  };

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
        Vault Staking Confirmation
      </DialogTitle>
      <DialogContent>
        <Typography
          sx={{
            color: "#FFA500",
            fontSize: "18px",
            marginY: "16px",
            textAlign: "center",
          }}
        >
          If it is your first time making a Stake,
          <br /> take the following into consideration
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "15px",
            marginTop: "8px",
            textAlign: "center",
          }}
        >
          Remember to be able to make a{" "}
          <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>Deposit</span>,
          mining, claim & withdraw, you must have at least 1 LUCAX NFTs in Hold
          in your wallet
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          in a scenario that does not have it, just Buy 1{" "}
          <Link
            style={{ textDecoration: "underline", color: "#FFA500" }}
            href="/dapp/nfts"
            passHref
          >
            Here
          </Link>
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "15px",
            marginTop: "8px",
          }}
        >
          Please note that{" "}
          <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
            if you deposit without a Referrer address,
          </span>{" "}
          you will automatically become a Vault Producer Leader and will create
          your own Vault Producer (team), that you cannot leave.
        </Typography>
        <ul style={{ color: "#FFFFFF", marginBottom: "16px" }}>
          <li>
            If you prefer not to lead a team, click on{" "}
            <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              - Vaults Board
            </span>{" "}
            and join one.
          </li>
          <li>
            If you are ready to lead and create your own Vault Producer team,
            press - Continue.
          </li>
        </ul>
        <Box
          display="flex"
          justifyContent="space-between"
          gap={2} // Adds spacing between the buttons
        >
          <Link href="/dapp/vaultproducer" passHref>
            <StyledButton
              variant="outlined"
              sx={{
                flex: 1,
                color: "#fff",
                backgroundColor: "#111111",
                border: "1px solid #d32f2f",
                "&:hover": {
                  border: "1px solid #d32f2f",
                  backgroundColor: "#222222",
                },
              }}
              onClick={onClose}
            >
              Vaults Producer Board
            </StyledButton>
          </Link>
          <StyledButton
            variant="contained"
            onClick={handleContinue}
            sx={{
              flex: 1,
              backgroundColor: "#111111",
              border: "1px solid rgb(0, 128, 0)",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#222222",
              },
            }}
          >
            Continue
          </StyledButton>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default ConfirmationDialog;
