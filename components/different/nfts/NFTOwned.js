import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import "./parts/NFTCarousel.css";
import NFTNetWorth from "./parts/NFTNetWorth";

const imagesData = [
  "/dapp/nft/NFT-own.png",
  "/dapp/nft/NFT-own.png",
  "/dapp/nft/NFT-own.png",
  "/dapp/nft/NFT-own.png",
  "/dapp/nft/NFT-own.png", // Added a fifth image
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

const NFTOwned = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleImageClick = (index) => {
    setActiveIndex(index);
    console.log("Clicked on image", index);
  };

  const getImageStyles = (index) => {
    const totalImages = imagesData.length;
    const adjustedIndex = (index - activeIndex + 2) % totalImages;

    const scale =
      adjustedIndex === 2
        ? 1
        : adjustedIndex === 1 || adjustedIndex === 3
        ? 0.8
        : 0.6;
    const zIndex =
      adjustedIndex === 2
        ? 3
        : adjustedIndex === 1 || adjustedIndex === 3
        ? 2
        : 1;
    const opacity =
      adjustedIndex === 2
        ? 1
        : adjustedIndex === 1 || adjustedIndex === 3
        ? 0.8
        : 0.6;
    const offset =
      adjustedIndex === 0
        ? -100
        : adjustedIndex === 1
        ? -50
        : adjustedIndex === 2
        ? 0
        : adjustedIndex === 3
        ? 50
        : 100;
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
          Your NFT Portfolio
        </Typography>
        <Box
          sx={{ margin: "50px 0px" }}
          className="carousel nft-owned-carousel"
        >
          {imagesData.map((image, index) => (
            <Box
              key={index}
              onClick={() => handleImageClick(index)}
              className="carousel-card"
              sx={{ ...getImageStyles(index) }}
            >
              <img
                src={image}
                alt={`NFT ${index}`}
                style={{
                  width: isSmallScreen ? "150px" : "400px",
                  borderRadius: "16px",
                  transition: "width 0.5s", // Add transition for smooth resizing
                }}
              />
            </Box>
          ))}
        </Box>
        <Box sx={{ width: "100%" }}>
          <NFTNetWorth />
        </Box>
      </Box>
    </Container>
  );
};

export default NFTOwned;
