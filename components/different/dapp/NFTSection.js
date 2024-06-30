import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  paddingLeft: "9.6px",
  paddingRight: "9.6px",
  marginTop: "-70.4px",
  background:
    "linear-gradient(102.49deg, rgb(16, 16, 16) 4.28%, rgb(36, 36, 36) 61.94%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: "#fff",
  width: "100%",
  maxWidth: "1200px",
  padding: theme.spacing(3),
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

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const NFTSection = () => (
  <Container>
    <ContentContainer>
      <Typography variant="h4">
        Alpha NFTs: Limited Collection, Unlimited Potential
      </Typography>
      <Typography variant="body1" sx={{ margin: "16px 0" }}>
        Step into the elite circle of Wolf Capital with our Exclusive NFT
        Collection. Limited to just 500 pieces, each NFT unlocks unique benefits
        like copy trading, and a share in our upcoming WolfBets Casino.
      </Typography>
      <Box>
        <Button
          variant="contained"
          sx={{ marginRight: "8px", backgroundColor: "#333", color: "#fff" }}
        >
          BUY NFT
        </Button>
        <Button variant="outlined" sx={{ borderColor: "#555", color: "#fff" }}>
          LEARN MORE
        </Button>
      </Box>
    </ContentContainer>
    <ImageContainer>
      <img
        src="/path-to-your-image.png"
        alt="Alpha NFTs"
        style={{ width: "100%", maxWidth: "400px" }}
      />
    </ImageContainer>
  </Container>
);

export default NFTSection;
