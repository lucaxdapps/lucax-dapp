import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LayersIcon from "@mui/icons-material/Layers";
import PercentIcon from "@mui/icons-material/Percent";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const PortfolioContainer = styled(Box)(({ theme }) => ({
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
  maxWidth: "1200px",
  marginBottom: theme.spacing(2),
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
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
  backgroundColor: "#333",
  color: "#fff",
  borderRadius: "20px",
  minWidth: "120px",
  padding: "10px 20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  "&:hover": {
    backgroundColor: "#444",
  },
}));

const PortfolioComponent = () => (
  <PortfolioContainer>
    <Typography variant="h6" sx={{ marginBottom: "16px", color: "#FFA500" }}>
      Your Staking Portfolio
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <InfoContainer>
          <InfoIcon>
            <AttachMoneyIcon />
          </InfoIcon>
          <Box>
            <Typography sx={{ color: "#FFA500" }} variant="body2">
              Total Deposited
            </Typography>
            <Typography variant="h6">$0.00</Typography>
          </Box>
        </InfoContainer>
      </Grid>
      <Grid item xs={12} sm={4}>
        <InfoContainer>
          <InfoIcon>
            <LayersIcon />
          </InfoIcon>
          <Box>
            <Typography sx={{ color: "#FFA500" }} variant="body2">
              Currently Staked
            </Typography>
            <Typography variant="h6">$0.00</Typography>
          </Box>
        </InfoContainer>
      </Grid>
      <Grid item xs={12} sm={4}>
        <InfoContainer>
          <InfoIcon>
            <AttachMoneyIcon />
          </InfoIcon>
          <Box>
            <Typography sx={{ color: "#FFA500" }} variant="body2">
              Claimable
            </Typography>
            <Typography variant="h6">$0.00</Typography>
          </Box>
        </InfoContainer>
      </Grid>
      <Grid item xs={12} sm={4}>
        <InfoContainer>
          <InfoIcon>
            <AttachMoneyIcon />
          </InfoIcon>
          <Box>
            <Typography sx={{ color: "#FFA500" }} variant="body2">
              Total Withdrawn
            </Typography>
            <Typography variant="h6">$0.00</Typography>
          </Box>
        </InfoContainer>
      </Grid>
      <Grid item xs={12} sm={4}>
        <InfoContainer>
          <InfoIcon>
            <PercentIcon />
          </InfoIcon>
          <Box>
            <Typography sx={{ color: "#FFA500" }} variant="body2">
              Active Stakes
            </Typography>
            <Typography variant="h6">0</Typography>
          </Box>
        </InfoContainer>
      </Grid>
      <Grid item xs={12} sm={4}>
        <InfoContainer>
          <InfoIcon>
            <AccessTimeIcon />
          </InfoIcon>
          <Box>
            <Typography sx={{ color: "#FFA500" }} variant="body2">
              Daily Reward
            </Typography>
            <Typography variant="h6">$1,000,000,00</Typography>
          </Box>
        </InfoContainer>
      </Grid>
    </Grid>
  </PortfolioContainer>
);

export default PortfolioComponent;
