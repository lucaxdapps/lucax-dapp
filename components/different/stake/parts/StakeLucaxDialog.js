import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "rgb(16, 16, 16)",
    color: "#fff",
    borderRadius: "20px",
    padding: theme.spacing(3),
    border: "2px solid white",
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  color: "#fff",
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  marginTop: "10px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "red",
    },
    "&.Mui-focused fieldset": {
      borderColor: "red",
    },
  },
  "& input": {
    color: "#fff",
  },
  "& .MuiInputLabel-root": {
    color: "#fff",
  },
}));

const AmountInput = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "#FFA500",
    },
    "&:hover fieldset": {
      borderColor: "#FFA500",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFA500",
    },
  },
  "& input": {
    color: "#fff",
    textAlign: "center",
  },
  "& .MuiInputLabel-root": {
    color: "#fff",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "10px",
  fontWeight: "bold",
  padding: "10px 20px",
}));

const StakeLucaxDialog = ({ open, onClose, referrer = "" }) => {
  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          position: "relative",
          textAlign: "start",
          border: "2px solid #FFA500",
          padding: "10px",
          paddingBottom: "15px",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            fontSize: "1.5rem",
            display: "inline-block",
          }}
        >
          STAKE LUCAX
        </Typography>
        <CloseButton
          sx={{
            marginTop: "-10px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "2px solid #d32f2f",
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </CloseButton>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            marginTop: "15px",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            Wallet:
          </Typography>
          <Typography sx={{ fontSize: "1.5rem" }}>0x82.....caBE</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: "15px",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            Available:
          </Typography>
          <Typography sx={{ fontSize: "1.5rem" }}>
            300,000,000,000.05049
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            paddingTop: "10px",
            borderTop: "1px solid #FFFFFF",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "1.0rem" }}>
            Referrer (address)
          </Typography>
        </Box>
        <StyledInput
          variant="outlined"
          fullWidth
          label="Referrer (address)"
          placeholder="0x8VTSIUN7464HJDNSDU8948.caQv"
          value={referrer} // Automatically fills if referrerName is passed
        />
        <Typography
          variant="body2"
          sx={{ color: "#fff", marginTop: 1, textAlign: "center" }}
        >
          If you do not have a reference address, paste burn address{" "}
          <Typography
            component="span"
            sx={{ color: "#FFA500", fontWeight: "bold" }}
          >
            0x029290c564Ef921c56a784AA16C97E930dAF7372
          </Typography>
        </Typography>
        <AmountInput
          variant="outlined"
          fullWidth
          label="Amount to Deposit"
          placeholder="Enter Amount"
        />
        <Box
          sx={{
            display: "flex",
            marginTop: "15px",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "#d32f2f", fontSize: "1.5rem" }}>
            Min:
          </Typography>
          <Typography sx={{ fontSize: "1.5rem" }}>50,000.00</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: "15px",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "#d32f2f", fontSize: "1.5rem" }}>
            Max:
          </Typography>
          <Typography sx={{ fontSize: "1.5rem" }}>100,000.00</Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ color: "#fff", marginTop: 1, textAlign: "center" }}
        >
          Your current stake will be the amount deposited - 10% fee and you
          receive a liquid staked token (Voucher) proof of Stake 1 Staked: 1
          MxLucax
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#fff", marginTop: 2, textAlign: "center" }}
        >
          Remember to be able to make a Deposit in Stake you must have at least
          1 LUCAX NFTs in Hold in your wallet in a scenario that does not have
          it, just Buy 1{" "}
          <Link href="/dapp/nfts">
            <Typography
              component="span"
              sx={{
                color: "#FFA500",
                textDecoration: "underline",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Here
            </Typography>
          </Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 3,
          }}
        >
          <StyledButton
            variant="outlined"
            sx={{
              flex: 1,
              marginRight: 1,
              color: "#fff",
              backgroundColor: "#111",
              border: "1px solid red",
              "&:hover": { backgroundColor: "#222", borderColor: "red" },
            }}
          >
            Cancel
          </StyledButton>
          <StyledButton
            variant="contained"
            sx={{
              flex: 1,
              marginRight: 1,
              color: "#fff",
              backgroundColor: "#FFA500",
              "&:hover": { backgroundColor: "#E69500" },
            }}
          >
            Approve
          </StyledButton>
          <StyledButton
            variant="contained"
            sx={{
              flex: 1,
              color: "#fff",
              border: "2px solid #008000",
              backgroundColor: "#111111",
              "&:hover": {
                border: "2px solid #006400",
                backgroundColor: "#222222",
              },
            }}
          >
            Deposit
          </StyledButton>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default StakeLucaxDialog;
