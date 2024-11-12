import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const PrizesContainer = styled(Box)(({ theme }) => ({
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

const IconContainer = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const TrophyIcon = styled(EmojiEventsIcon)(({ theme }) => ({
  fontSize: "100px",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    fontSize: "70px", // Adjust font size for sm screens
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  flex: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "& h6": {
    fontSize: "1.25rem", // Default font size
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem", // Smaller font size for sm screens
    },
  },
  "& h4": {
    fontSize: "2rem", // Default font size
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem", // Smaller font size for sm screens
    },
  },
}));

const TitleText = styled(Typography)(() => ({
  color: "#FFA500",
}));

const AmountText = styled(Typography)(() => ({
  color: "#fff",
}));

const Prize = () => {
  return (
    <PrizesContainer>
      <IconContainer>
        <TrophyIcon />
      </IconContainer>
      <TextContainer>
        <TitleText variant="h6">Total Prizes Distributed</TitleText>
        <AmountText variant="h4">45,000,000.00</AmountText>
      </TextContainer>
    </PrizesContainer>
  );
};

export default Prize;
