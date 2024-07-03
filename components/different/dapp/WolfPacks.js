import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundImage: 'url("/dapp/index/wolfpack-bg.png")',
  backgroundSize: "100% 100%",
  borderRadius: "20px",
  color: "#fff",
  width: "100%",
  maxWidth: "1200px",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: "1",
  display: "flex",
  padding: theme.spacing(2),
  justifyContent: "center",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px 8px 0 0", // Adjust the border-radius if needed
  [theme.breakpoints.up("sm")]: {
    justifyContent: "flex-start",
    borderRadius: "8px 0 0 8px", // Adjust the border-radius if needed
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

const WolfPacks = () => (
  <CardContainer>
    <ImageContainer>
      <img
        src="/dapp/index/wolf-3.png"
        alt="Vault Producer"
        style={{ width: "100%" }}
      />
    </ImageContainer>
    <ContentContainer>
      <Typography variant="h3" style={{ fontWeight: "600" }}>
        The Vault Producer
      </Typography>
      <Typography variant="body1">
        Explore the Vault Producer and unite with other producers to take
        advantage of our unique team-staking model that takes yield generation
        to new heights.
      </Typography>
      <Button variant="text" sx={{ color: "#1a73e8" }}>
        EXPLORE WOLFPACKS &gt;
      </Button>
    </ContentContainer>
    <StatsContainer>
      <Typography variant="h6">Total Wolfpacks</Typography>
      <Typography variant="h3" style={{ fontWeight: "600" }}>
        210
      </Typography>
    </StatsContainer>
  </CardContainer>
);

export default WolfPacks;
