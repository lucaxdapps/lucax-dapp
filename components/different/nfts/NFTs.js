import { Box } from "@mui/material";
import CardComponent from "./parts/NFTCard.js";

const NFTs = () => {
  const features1 = [
    "Mint LUCAX / Vault Producer",
    "Perpetual Referral Commission",
    "1 Month Reward Membership",
  ];
  const features2 = [...features1, "12 Month Reward Membership"];
  const features3 = [...features2, "Project Incubation Airdrop"];
  const features4 = [
    ...features3,
    "IDO Launch White list",
    "Claiming Reward for Project Incubation",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <CardComponent price="$49.97" features={features1} />
        <CardComponent price="$149.97" features={features2} />
        <CardComponent price="$249.97" features={features3} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <CardComponent price="$299.97" features={features4} />
      </Box>
    </Box>
  );
};

export default NFTs;
