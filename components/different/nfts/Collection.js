import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Container = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: "0px",
  color: "#fff",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#fff",
  borderRadius: "20px",
  padding: theme.spacing(1, 2),
  marginTop: theme.spacing(2),
  "&:hover": {
    backgroundColor: "#121212",
  },
  display: "flex",
  alignItems: "center",
}));

const GradientLine = styled(Box)(({ theme }) => ({
  height: "4px",
  background: "linear-gradient(to right, #FFA500, #FFFFFF)",
  width: "100%",
}));

const Collection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={3}
      >
        <Box width="50%" paddingRight={2}>
          <Typography
            sx={{ color: "#FFA500", fontWeight: "bold" }}
            variant="h4"
          >
            NFT CARD
          </Typography>
          <Typography
            sx={{ color: "#FFFFFF", fontWeight: "bold", marginBottom: "16px" }}
            variant="h4"
          >
            COLLECTION
          </Typography>
          <Typography
            sx={{ color: "#FFA500", fontWeight: "bold" }}
            variant="h5"
          >
            NO BITCOIN NO MONEY
          </Typography>
          <Typography
            sx={{ color: "#FFFFFF", fontWeight: "bold", marginBottom: "16px" }}
            variant="h5"
          >
            MEMBERSHIP CLUB
          </Typography>
          <Typography variant="body1">
            THE MOST POWERFUL POWERLINE DRIVE BY COMMUNITY MARKETING
          </Typography>
          <StyledButton startIcon={<ArrowBackIcon />}>RETURN</StyledButton>
        </Box>
        <Box width="50%">
          <img
            src="/dapp/nft/nft-cards.png"
            alt="NFT Cards"
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
      <GradientLine />
      <Box
        sx={{ marginBottom: "30px" }}
        display="flex"
        justifyContent="center"
        paddingTop={3}
        paddingX={2}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="inherit"
          indicatorColor="secondary"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "transparent",
            },
            "& .MuiTab-root": {
              borderLeft: "1px solid #fff",
              "&:first-of-type": {
                borderLeft: "none",
              },
            },
            "& .Mui-selected": {
              color: "#FFA500",
              borderBottom: "none",
            },
          }}
        >
          <Tab label="NFTS MEMBERSHIPS CARD" />
          <Tab label="PRIVILEGES" />
          <Tab label="ENROLLER REWARD" />
          <Tab label="MEMBERSHIP REWARD" />
          <Tab label="MATCH BONUS" />
          <Tab label="ROYALTIE POOL" />
        </Tabs>
      </Box>
    </Container>
  );
};

export default Collection;
