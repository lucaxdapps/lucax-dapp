import InfoIcon from "@mui/icons-material/Info";
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const RewardContainer = styled(Box)(({ theme }) => ({
  padding: "40px 16px",
  background:
    "linear-gradient(102.49deg, rgb(16, 16, 16) 4.28%, rgb(36, 36, 36) 61.94%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  color: "#fff",
  margin: theme.spacing(2, 0),
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FF4500",
  color: "#fff",
  borderRadius: "10px",
  padding: theme.spacing(1, 3),
  "&:hover": {
    backgroundColor: "#FF6347",
  },
}));

const Reward = () => (
  <RewardContainer>
    <InfoContainer>
      <Box>
        <Typography variant="h6" sx={{ color: "#FFA500" }}>
          Commission Received
        </Typography>
        <Typography variant="body1">$45,000,000.00</Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ color: "#FFA500" }}>
          Reward Claimed
        </Typography>
        <Typography variant="body1">$45,000.00</Typography>
      </Box>
      <Tooltip title="Info">
        <IconButton>
          <InfoIcon sx={{ color: "#FFA500" }} />
        </IconButton>
      </Tooltip>
    </InfoContainer>
    <InfoContainer>
      <Box>
        <Typography variant="h6" sx={{ color: "#FFA500" }}>
          Claimable Reward
        </Typography>
        <Typography variant="body1">$45,000.00</Typography>
      </Box>
      <ButtonContainer>
        <StyledButton>- CLAIM</StyledButton>
      </ButtonContainer>
    </InfoContainer>
  </RewardContainer>
);

export default Reward;
