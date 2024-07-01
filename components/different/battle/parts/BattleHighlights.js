import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BattleWeekContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "16px",
  padding: "60px 16px",
  background:
    "linear-gradient(102.49deg, rgb(16, 16, 16) 4.28%, rgb(36, 36, 36) 61.94%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  color: "#fff",
  margin: "16px 0",
}));

const TextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const TitleText = styled(Typography)({
  color: "#FFA500",
});

const AmountText = styled(Typography)({
  color: "#fff",
});

const BattleHighlights = () => {
  return (
    <BattleWeekContainer>
      <TextContainer>
        <TitleText variant="h6">Battle Week</TitleText>
        <AmountText variant="h5">14</AmountText>
      </TextContainer>
      <TextContainer>
        <TitleText variant="h6">Total Week Deposit</TitleText>
        <AmountText variant="h5">90,000,000,00</AmountText>
      </TextContainer>
      <TextContainer>
        <TitleText variant="h6">Prize Pool</TitleText>
        <AmountText variant="h5">10,000,000</AmountText>
      </TextContainer>
      <TextContainer>
        <TitleText variant="h6">Prize</TitleText>
        <AmountText variant="h5">1,000,000</AmountText>
      </TextContainer>
      <TextContainer>
        <TitleText variant="h6">Time Left</TitleText>
        <AmountText variant="h5">6 D 60H 55M</AmountText>
      </TextContainer>
    </BattleWeekContainer>
  );
};

export default BattleHighlights;
