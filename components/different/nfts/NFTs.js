import { Box, Typography } from "@mui/material";
import { useState } from "react";
import NFTCard from "./parts/NFTCard";
import "./parts/NFTCarousel.css";

const cardsData = [
  {
    price: "$49.97",
    features: [
      "Mint LUCAX / Vault Producer",
      "Perpetual Referral Commission",
      "1 Month Reward Membership",
    ],
  },
  {
    price: "$149.97",
    features: [
      "Mint LUCAX / Vault Producer",
      "Perpetual Referral Commission",
      "1 Month Reward Membership",
      "12 Month Reward Membership",
    ],
  },
  {
    price: "$249.97",
    features: [
      "Mint LUCAX / Vault Producer",
      "Perpetual Referral Commission",
      "1 Month Reward Membership",
      "12 Month Reward Membership",
      "Project Incubation Airdrop",
    ],
  },
  {
    price: "$299.97",
    features: [
      "Mint LUCAX / Vault Producer",
      "Perpetual Referral Commission",
      "1 Month Reward Membership",
      "12 Month Reward Membership",
      "Project Incubation Airdrop",
      "IDO Launch White list",
      "Claiming Reward for Project Incubation",
    ],
  },
];

const NFTs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const getCardStyles = (index) => {
    const totalCards = cardsData.length;
    const adjustedIndex = (index - activeIndex + totalCards) % totalCards;

    const scale = adjustedIndex === 1 ? 1.2 : 0.8;
    const zIndex = adjustedIndex === 1 ? 2 : 1;
    const opacity = adjustedIndex === 1 ? 1 : 0.6;
    const offset =
      adjustedIndex === 0
        ? -60
        : adjustedIndex === 1
        ? 0
        : adjustedIndex === 2
        ? 60
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
    <Box className="carousel-container">
      <Typography variant="h4" className="carousel-title">
        Your NFT Portfolio
      </Typography>
      <Box className="carousel">
        {cardsData.map((card, index) => (
          <Box
            key={index}
            onClick={() => handleCardClick(index)}
            className="carousel-card"
            sx={{ ...getCardStyles(index) }}
          >
            <NFTCard price={card.price} features={card.features} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NFTs;
