import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ClaimPrizesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "40px 16px",
  background:
    "linear-gradient(102.49deg, rgb(16, 16, 16) 4.28%, rgb(36, 36, 36) 61.94%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  color: "#fff",
  margin: "16px 0",
}));

const TextContainer = styled(Box)({
  flex: 3,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginRight: "16px",
});

const TitleText = styled(Typography)({
  color: "#FFA500",
});

const AmountText = styled(Typography)({
  color: "#fff",
});

const ActionButton = styled(Button)({
  backgroundColor: "#d32f2f",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#b71c1c",
  },
  borderRadius: "10px",
  padding: "10px 20px",
});

const ClaimPrize = () => {
  return (
    <ClaimPrizesContainer>
      <TextContainer>
        <TitleText variant="h6">Prize claimed</TitleText>
        <AmountText variant="h5">45,000,000.00</AmountText>
      </TextContainer>
      <TextContainer>
        <TitleText variant="h6">Claimable Prize</TitleText>
        <AmountText variant="h5">45,000.00</AmountText>
      </TextContainer>
      <ActionButton>- CLAIM</ActionButton>
    </ClaimPrizesContainer>
  );
};

export default ClaimPrize;
