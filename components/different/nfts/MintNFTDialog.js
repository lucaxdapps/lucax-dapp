import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "rgb(16, 16, 16)",
    color: "#fff",
    borderRadius: "20px",
    border: "2px solid #FFFFFF",
    padding: theme.spacing(3),
    width: "600px",
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  color: "#fff",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "10px",
  fontWeight: "bold",
  padding: "10px 20px",
}));

const MintNFTDialog = ({ open, onClose, nftTitle, nftPrice }) => {
  const [howManyNFT, setHowManyNFT] = useState(1); // Default value is 1
  const [amountToSend, setAmountToSend] = useState(parseFloat(nftPrice || 0)); // Initial amount

  useEffect(() => {
    const price = parseFloat(nftPrice.replace(/[^0-9.]/g, "")) || 0; // Extract numeric price from nftPrice
    setAmountToSend(howManyNFT * price);
  }, [howManyNFT, nftPrice]);

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
          Mint {nftTitle} Membership
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
            Membership Price:
          </Typography>
          <Typography sx={{ fontSize: "1.5rem" }}>{nftPrice}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            paddingY: "10px",
            borderTop: "1px solid #FFFFFF",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "1.0rem" }}>
            Referrer (address)
          </Typography>
        </Box>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Referrer (address)"
          sx={{
            border: "2px solid #d32f2f",
            borderRadius: "10px",
            marginBottom: "16px",
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              backgroundColor: "rgb(33, 33, 33)",
              borderRadius: "10px",
            },
          }}
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
        <Box
          sx={{
            display: "flex",
            marginTop: "5px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              flex: 1,
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginTop: "-20px",
            }}
          >
            Type $USD Token
          </Typography>
          <TextField
            select
            fullWidth
            variant="outlined"
            defaultValue="POINT"
            sx={{
              flex: 1,
              border: "2px solid #d32f2f",
              borderRadius: "10px",
              marginBottom: "16px",
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                backgroundColor: "rgb(33, 33, 33)",
                borderRadius: "10px",
                textAlign: "right", // Aligns the text to the right
                "& select": {
                  textAlignLast: "right", // Ensures right-aligned dropdown text
                },
              },
              "& .MuiSelect-icon": {
                color: "#fff", // Ensures the down arrow icon color matches the text
              },
            }}
            SelectProps={{
              IconComponent: ArrowDropDownCircleOutlined, // Custom down arrow icon
            }}
          >
            <MenuItem value="USDT">USDT</MenuItem>
            <MenuItem value="POINT">POINT</MenuItem>
          </TextField>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "5px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              flex: 1,
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginTop: "-20px",
            }}
          >
            How many NFT
          </Typography>
          <TextField
            fullWidth
            type="number"
            variant="outlined"
            value={howManyNFT}
            onChange={(e) => {
              const value = Math.max(1, parseInt(e.target.value, 10) || 1); // Ensure a minimum value of 1
              setHowManyNFT(value);
            }}
            placeholder="0.00"
            sx={{
              flex: 1,
              border: "2px solid #d32f2f",
              borderRadius: "10px",
              marginBottom: "16px",
              "& .MuiOutlinedInput-root": {
                color: "#fff", // Text color
                backgroundColor: "rgb(33, 33, 33)",
                borderRadius: "10px",
                "& input": {
                  textAlign: "right", // Align input text and placeholder to the right
                },
              },
            }}
            inputProps={{
              style: { textAlign: "right" }, // Ensures placeholder text is also right-aligned
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "5px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              flex: 1,
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginTop: "-20px",
            }}
          >
            Amount to Send
          </Typography>
          <TextField
            fullWidth
            type="number"
            variant="outlined"
            value={amountToSend.toFixed(2)} // Display amount with two decimal places
            placeholder="0.00"
            sx={{
              flex: 1,
              border: "2px solid #d32f2f",
              borderRadius: "10px",
              marginBottom: "16px",
              "& .MuiOutlinedInput-root": {
                color: "#fff", // Text color
                backgroundColor: "rgb(33, 33, 33)",
                borderRadius: "10px",
                "& input": {
                  textAlign: "right", // Align input text and placeholder to the right
                },
              },
            }}
            inputProps={{
              readOnly: true, // Make the field read-only
              style: { textAlign: "right" }, // Ensures placeholder text is also right-aligned
            }}
          />
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "#FFA500",
            fontWeight: "bold",
            marginTop: 1,
            textAlign: "center",
          }}
        >
          Remember you need at least 1-5 $USD in GAS
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          gap={2}
          sx={{ marginTop: "16px" }}
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
            Mint
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

export default MintNFTDialog;
