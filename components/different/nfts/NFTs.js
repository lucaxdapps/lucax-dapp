import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import NFTCard from "./parts/NFTCard";
import "./parts/NFTCarousel.css";

const cardsData = [
  {
    title: "PASS NFT Features",
    price: "$49.97",
    features: [
      "Mint LUCAX / Vault Producer",
      "Perpetual Referral Commission",
      "1 Month Reward Membership",
    ],
  },
  {
    title: "OPEN NFT Features",
    price: "$149.97",
    features: [
      "Mint LUCAX / Vaul Producer",
      "Perpetual Referral Commission",
      "12 Month Reward Membership",
      "Incubator Airdrop",
    ],
  },
  {
    title: "BLACK NFT Features",
    price: "$249.97",
    features: [
      "Mint LUCAX / Vaul Producer",
      "Perpetual Referral Commission",
      "12 Month Reward Membership",
      "Project Incubation Airdrop",
      "IDO Launch White List",
    ],
  },
  {
    title: "LUXURY NFT Features",
    price: "$299.97",
    features: [
      "Mint LUCAX / Vaul Producer",
      "Perpetual Referal Commission",
      "12 Month Membership",
      "Project Incubation Airdrop",
      "IDO Launch White List",
      "Claiming Reward for Project incubation",
    ],
  },
];

const Container = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: "16px",
  color: "#fff",
}));

const NFTs = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    console.log("Clicked on card", index);
  };

  const getCardStyles = (index) => {
    const totalCards = cardsData.length;
    const adjustedIndex = (index - activeIndex + 2) % totalCards;

    const scale = adjustedIndex === 2 ? 1.05 : adjustedIndex === 1 ? 1 : 0.8;
    const zIndex = adjustedIndex === 2 ? 3 : adjustedIndex === 1 ? 2 : 1;
    const opacity = adjustedIndex === 2 ? 1 : adjustedIndex === 1 ? 0.8 : 0.6;
    const offset =
      adjustedIndex === 0
        ? -120
        : adjustedIndex === 1
        ? -40
        : adjustedIndex === 2
        ? 40
        : 120;
    const transform = `translateX(${offset}%) scale(${scale})`;

    return {
      zIndex,
      opacity,
      transform,
      transition: "transform 0.5s, opacity 0.5s",
    };
  };

  return (
    <Container>
      <Box className="carousel-container">
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h4"
          className="carousel-title"
        >
          Buy NFT
        </Typography>
        <Box sx={{ margin: "50px 0px" }} className="carousel">
          {cardsData.map((card, index) => (
            <Box
              key={index}
              onClick={() => handleCardClick(index)}
              className="carousel-card"
              sx={{ ...getCardStyles(index) }}
            >
              <NFTCard
                title={card.title}
                price={card.price}
                features={card.features}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default NFTs;
