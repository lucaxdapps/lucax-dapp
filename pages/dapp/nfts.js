import MasterLayout from "@/components/common/MasterLayout";
import Members from "@/components/different/nfts/Members";
import NFTs from "@/components/different/nfts/NFTs";
import Reward from "@/components/different/nfts/Reward";
import Royalty from "@/components/different/nfts/Royalty";
import { Box } from "@mui/material";

const Nfts = () => {
  return (
    <MasterLayout>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ padding: "10px", width: "100%" }}>
          <Reward />
        </Box>

        <Box sx={{ padding: "10px", width: "100%" }}>
          <Members />
        </Box>
      </Box>
      <Box sx={{ padding: "10px", width: "100%" }}>
        <Royalty />
      </Box>
      <Box sx={{ padding: "10px", width: "100%" }}>
        <NFTs />
      </Box>
    </MasterLayout>
  );
};

export default Nfts;
