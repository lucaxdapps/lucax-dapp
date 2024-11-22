import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "170px",
  margin: "5px",
  borderRadius: "16px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  transition: "transform 0.3s",
  background:
    "linear-gradient(102.49deg, rgb(16, 16, 16) 4.28%, rgb(36, 36, 36) 61.94%)",
  border: "1px solid rgb(60, 60, 60)",
  color: "#fff",
}));

const Price = styled(Typography)(({ theme }) => ({
  fontSize: "18px", // Smaller font size for mobile
  fontWeight: "bold",
  color: "#FFFFFF",
  textAlign: "center",
  margin: "12px 0", // Reduced margin
}));

const FeatureList = styled(Box)(({ theme }) => ({
  margin: "12px 0", // Reduced margin
}));

const FeatureItem = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "3px", // Reduced spacing
  fontSize: "10px", // Smaller font size for mobile
}));

const MintButton = styled(Button)(({ theme }) => ({
  display: "block",
  margin: "0 auto",
  padding: "10px 20px", // Retain padding for Mint button
  background: "linear-gradient(45deg, #838383 0%, #242424 100%)",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "20px", // Retain font size for Mint button
  borderRadius: "8px",
  border: "1px solid #dddddd",
  boxShadow: "0 4px 8px rgba(200, 200, 200, 0.2)",
  "&:hover": {
    background: "linear-gradient(45deg, #959595 0%, #353535 100%)",
  },
}));

const GradientLine = styled(Box)(({ theme }) => ({
  height: "8px",
  width: "100%",
  background: "linear-gradient(to right, #FF4500, #FFA500)",
  borderRadius: "4px",
  margin: "12px 0", // Adjusted margin for mobile
}));

const GreyLine = styled(Box)(({ theme }) => ({
  height: "2px",
  width: "100%",
  backgroundColor: "#777",
  borderRadius: "4px",
  margin: "12px 0", // Adjusted margin for mobile
}));

const NFTCardMobile = ({ title, price, features, onMintClick }) => (
  <StyledCard>
    <CardContent>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/dapp/nft/nft-card.png"
          alt="Membership"
          style={{
            width: "100px",
            height: "auto", // Adjust image height to auto
          }}
        />
      </Box>
      <Price>{price}</Price>
      <GradientLine />
      <MintButton onClick={() => onMintClick(title)}>MINT</MintButton>
      <GreyLine />
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: "6px", // Reduced margin
          fontSize: "14px", // Smaller text size for mobile
        }}
      >
        {title}
      </Typography>
      <FeatureList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <CheckCircleIcon
              sx={{
                color: "#36BA98",
                marginRight: "6px", // Adjust spacing
                fontSize: "16px", // Smaller icon size
              }}
            />
            {feature}
          </FeatureItem>
        ))}
      </FeatureList>
    </CardContent>
  </StyledCard>
);

export default NFTCardMobile;
