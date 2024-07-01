import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  paddingLeft: "9.6px",
  paddingRight: "9.6px",
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
  padding: theme.spacing(0),
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
  paddingLeft: "45px",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(0),
}));

const NFTSection = () => (
  <Container>
    <ContentContainer>
      <Typography variant="h4" style={{ fontWeight: "600" }}>
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
          sx={{
            display: "inline-flex",
            fontSize: "20px",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            outline: 0,
            border: 0,
            margin: 0,
            cursor: "pointer",
            userSelect: "none",
            verticalAlign: "middle",
            appearance: "none",
            textDecoration: "none",
            transition:
              "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            background:
              "linear-gradient(135deg, rgb(40, 40, 40) 0%, rgb(69, 69, 69) 62.29%, rgb(124, 124, 124) 100%)",
            boxShadow:
              "rgba(0, 0, 0, 0.5) 2.9318px 5.8636px 8.79541px, rgba(255, 255, 255, 0.25) 0px 1px 2px inset",
            borderRadius: "8px",
            fontWeight: 700,
            color: "rgb(255, 255, 255)",
            textTransform: "none",
            marginRight: "16px",
          }}
        >
          BUY NFT
        </Button>
        <Button
          variant="outlined"
          sx={{
            fontSize: "20px",
            color: "#FFFFFF",
            border: "1px solid #C7C8CC",
            borderRadius: "8px",
          }}
        >
          LEARN MORE
        </Button>
      </Box>
    </ContentContainer>
    <ImageContainer>
      <img
        src="/dapp/index/nft-cards.png"
        alt="Alpha NFTs"
        style={{ width: "100%", maxWidth: "600px", marginRight: "-80px" }}
      />
    </ImageContainer>
  </Container>
);

export default NFTSection;
