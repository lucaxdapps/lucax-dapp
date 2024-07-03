import MasterLayout from "@/components/common/MasterLayout";
import Members from "@/components/different/nfts/Members";
import NFTs from "@/components/different/nfts/NFTs";
import Reward from "@/components/different/nfts/Reward";
import Royalty from "@/components/different/nfts/Royalty";
import { Box, Grid } from "@mui/material";

const Nfts = () => {
  return (
    <MasterLayout>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} sx={{ padding: "10px", width: "100%" }}>
          <Reward />
        </Grid>

        <Grid item sm={12} md={6} sx={{ padding: "10px", width: "100%" }}>
          <Members />
        </Grid>
      </Grid>
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
