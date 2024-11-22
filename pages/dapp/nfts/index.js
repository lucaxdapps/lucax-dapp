import MasterLayout from "@/components/common/MasterLayout";
import Collection from "@/components/different/nfts/Collection";
import NFTOwned from "@/components/different/nfts/NFTOwned";
import NFTs from "@/components/different/nfts/NFTs";
import NFTsMobile from "@/components/different/nfts/NFTsMobile";
import Royalty from "@/components/different/nfts/Royalty";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const Nfts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check for screens smaller than sm

  return (
    <MasterLayout>
      <Box sx={{ padding: "30px 0px 10px", width: "100%" }}>
        <Collection />
      </Box>
      <Box sx={{ padding: "10px 0px", width: "100%" }}>
        <Royalty />
      </Box>
      <Box sx={{ padding: "10px 0px", width: "100%" }}>
        {/* Render NFTs or NFTsMobile based on screen size */}
        {isMobile ? <NFTsMobile /> : <NFTs />}
      </Box>
      <Box sx={{ padding: "10px 0px", width: "100%" }}>
        <NFTOwned />
      </Box>
    </MasterLayout>
  );
};

export default Nfts;
