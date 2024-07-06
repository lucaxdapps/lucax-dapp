import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "300px", // Base width
  margin: "16px",
  borderRadius: "16px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  transition: "transform 0.3s",
  background:
    "linear-gradient(102.49deg, rgb(16, 16, 16) 4.28%, rgb(36, 36, 36) 61.94%)",
  border: "1px solid rgb(60, 60, 60)",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    width: "80%", // Full width on small screens
    margin: "8px",
  },
}));

const Price = styled(Typography)(({ theme }) => ({
  fontSize: "32px", // Increased font size for price
  fontWeight: "bold",
  color: "#FFFFFF",
  textAlign: "center",
  margin: "16px 0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px", // Reduced font size on small screens
  },
}));

const FeatureList = styled(Box)(({ theme }) => ({
  margin: "16px 0",
}));

const FeatureItem = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "8px",
  fontSize: "14px", // Reduced font size
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px", // Further reduced font size on small screens
  },
}));

const MintButton = styled(Button)(({ theme }) => ({
  display: "block", // Center align the button
  margin: "0 auto", // Center align the button
  padding: "10px 20px", // Adjusted padding
  background: "linear-gradient(45deg, #838383 0%, #242424 100%)", // Light grey to dark grey
  color: "#fff",
  fontWeight: "bold",
  fontSize: "20px",
  borderRadius: "8px",
  border: "1px solid #dddddd",
  boxShadow: "0 4px 8px rgba(200, 200, 200, 0.2)",
  "&:hover": {
    background: "linear-gradient(45deg, #959595 0%, #353535 100%)", // Light grey to dark grey
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px", // Reduced font size on small screens
    padding: "8px 16px", // Reduced padding on small screens
  },
}));

const GradientLine = styled(Box)(({ theme }) => ({
  height: "8px",
  width: "100%",
  background: "linear-gradient(to right, #FF4500, #FFA500)",
  borderRadius: "4px",
  margin: "16px 0", // Adjusted margin
}));

const GreyLine = styled(Box)(({ theme }) => ({
  height: "2px",
  width: "100%",
  backgroundColor: "#777",
  borderRadius: "4px",
  margin: "16px 0", // Adjusted margin
}));

const NFTCard = ({ title, price, features }) => (
  <StyledCard>
    <CardContent>
      <img
        src="/dapp/nft/nft-card.png"
        alt="Membership"
        style={{ width: "100%", height: "350px" }} // Adjusted image height
      />
      <Price>{price}</Price>
      <GradientLine />
      <MintButton>MINT</MintButton>
      <GreyLine />
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
        {title}
      </Typography>
      <FeatureList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <CheckCircleIcon sx={{ color: "#36BA98", marginRight: "8px" }} />
            {feature}
          </FeatureItem>
        ))}
      </FeatureList>
    </CardContent>
  </StyledCard>
);

export default NFTCard;
