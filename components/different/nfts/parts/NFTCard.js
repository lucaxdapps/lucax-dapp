import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "350px",
  margin: "16px",
  borderRadius: "16px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  transition: "transform 0.3s",
  background:
    "linear-gradient(102.49deg, rgb(16, 16, 16) 4.28%, rgb(36, 36, 36) 61.94%)",
  border: "1px solid rgb(60, 60, 60)",
  color: "#fff",
}));

const Price = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#FFFFFF",
  textAlign: "center",
  margin: "16px 0",
});

const FeatureList = styled(Box)({
  margin: "16px 0",
});

const FeatureItem = styled(Typography)({
  display: "flex",
  alignItems: "center",
  marginBottom: "8px",
  "&::before": {
    content: '"✓"',
    marginRight: "8px",
    color: "#00FF00",
  },
});

const MintButton = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "10px 0",
  background:
    "linear-gradient(90deg, rgba(255,69,0,1) 0%, rgba(255,165,0,1) 100%)",
  color: "#fff",
  fontWeight: "bold",
  "&:hover": {
    background:
      "linear-gradient(90deg, rgba(255,69,0,1) 0%, rgba(255,165,0,1) 100%)",
  },
}));

const NFTCard = ({ price, features }) => (
  <StyledCard>
    <CardContent>
      <img
        src="/dapp/nft/nft-card.png"
        alt="Membership"
        style={{ width: "100%" }}
      />
      <Price>{price}</Price>
      <MintButton>MINT</MintButton>
      <FeatureList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>{feature}</FeatureItem>
        ))}
      </FeatureList>
    </CardContent>
  </StyledCard>
);

export default NFTCard;
