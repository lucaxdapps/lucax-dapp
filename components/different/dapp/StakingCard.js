import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundImage: 'url("/dapp/index/stake-bg.png")',
  backgroundSize: "100% 100%",
  borderRadius: "20px",
  color: "#fff",
  width: "100%",
  maxWidth: "1200px",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: theme.spacing(2),
}));

const StatsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  flex: "2",
  borderRadius: "8px",
  textAlign: "center",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    flex: "1",
    marginTop: 0,
    marginLeft: theme.spacing(2),
  },
}));

const StakingCard = () => (
  <CardContainer>
    <StatsContainer>
      <Typography variant="h4">Total $USDC Staked</Typography>
      <Typography variant="h2" style={{ fontWeight: "600" }}>
        7,099,464
      </Typography>
    </StatsContainer>
    <Box
      sx={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/path-to-usdc-icon.png"
        alt="USDC Icon"
        style={{ display: "none" }}
      />
    </Box>
    <ContentContainer>
      <Typography variant="h3" style={{ fontWeight: "600" }}>
        Stake
      </Typography>
      <Typography variant="body1">
        Stake your $USDC with Wolf Capital. Experience a dynamic yield model,
        driven by real trading profits. Profit distributions are made weekly,
        every Friday.
      </Typography>
      <Button
        variant="contained"
        sx={{ marginTop: "16px", backgroundColor: "#1a73e8", color: "#fff" }}
      >
        START STAKING
      </Button>
    </ContentContainer>
  </CardContainer>
);

export default StakingCard;
