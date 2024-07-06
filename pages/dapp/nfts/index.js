import MasterLayout from "@/components/common/MasterLayout";
import Collection from "@/components/different/nfts/Collection";
import NFTOwned from "@/components/different/nfts/NFTOwned";
import NFTs from "@/components/different/nfts/NFTs";
import Royalty from "@/components/different/nfts/Royalty";
import { Box } from "@mui/material";

const Nfts = () => {
  return (
    <MasterLayout>
      <Box sx={{ padding: "30px 0px 10px", width: "100%" }}>
        <Collection />
      </Box>
      <Box sx={{ padding: "10px 0px", width: "100%" }}>
        <Royalty />
      </Box>
      <Box sx={{ padding: "10px 0px", width: "100%" }}>
        <NFTs />
      </Box>
      <Box sx={{ padding: "10px 0px", width: "100%" }}>
        <NFTOwned />
      </Box>
    </MasterLayout>
  );
};

export default Nfts;
