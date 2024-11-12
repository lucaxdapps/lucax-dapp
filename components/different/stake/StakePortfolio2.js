import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import LayersIcon from "@mui/icons-material/Layers";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StakeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background:
    "linear-gradient(102.49deg, rgb(16, 16, 16) 4.28%, rgb(36, 36, 36) 61.94%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: theme.spacing(2),
  color: "#fff",
  width: "100%",
  maxWidth: "1200px",
  marginBottom: theme.spacing(2),
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const InfoIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  backgroundColor: "#333",
  borderRadius: "8px",
  marginRight: theme.spacing(1),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#d32f2f",
  color: "#fff",
  borderRadius: "20px",
  minWidth: "120px",
  padding: "10px 20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  "&:hover": {
    backgroundColor: "#b71c1c",
  },
}));

const StakePortfolio2 = () => (
  <StakeContainer>
    <Typography variant="h6" sx={{ marginBottom: "16px", color: "#FFA500" }}>
      YOUR STAKE # 02
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
        },
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} sx={{ flex: 1 }}>
        <Grid item xs={12} sm={4}>
          <InfoContainer>
            <InfoIcon>
              <LayersIcon />
            </InfoIcon>
            <Box>
              <Typography variant="body2" sx={{ color: "#FFA500" }}>
                Deposit Amount
              </Typography>
              <Typography variant="h6">100,000,000,00 55M</Typography>
            </Box>
          </InfoContainer>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InfoContainer>
            <InfoIcon>
              <LayersIcon />
            </InfoIcon>
            <Box>
              <Typography variant="body2" sx={{ color: "#FFA500" }}>
                Staked Amount
              </Typography>
              <Typography variant="h6">90,000,000,00</Typography>
            </Box>
          </InfoContainer>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InfoContainer>
            <InfoIcon>
              <HourglassEmptyIcon />
            </InfoIcon>
            <Box>
              <Typography variant="body2" sx={{ color: "#FFA500" }}>
                Stake Unlock
              </Typography>
              <Typography variant="h6">85 D 60H</Typography>
            </Box>
          </InfoContainer>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InfoContainer>
            <InfoIcon>
              <AttachMoneyIcon />
            </InfoIcon>
            <Box>
              <Typography variant="body2" sx={{ color: "#FFA500" }}>
                Claimed Reward
              </Typography>
              <Typography variant="h6">1,000,000</Typography>
            </Box>
          </InfoContainer>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InfoContainer>
            <InfoIcon>
              <AttachMoneyIcon />
            </InfoIcon>
            <Box>
              <Typography variant="body2" sx={{ color: "#FFA500" }}>
                Claimable Reward
              </Typography>
              <Typography variant="h6">1,000,000</Typography>
            </Box>
          </InfoContainer>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InfoContainer>
            <InfoIcon>
              <ScheduleIcon />
            </InfoIcon>
            <Box>
              <Typography variant="body2" sx={{ color: "#FFA500" }}>
                Claim Duration
              </Typography>
              <Typography variant="h6">7D 60H 55M</Typography>
            </Box>
          </InfoContainer>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flex: "none",
          flexDirection: {
            xs: "row",
            sm: "row",
            md: "column",
          },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ActionButton>UNSTAKE</ActionButton>
        <ActionButton>CLAIM</ActionButton>
      </Box>
    </Box>
  </StakeContainer>
);

export default StakePortfolio2;
