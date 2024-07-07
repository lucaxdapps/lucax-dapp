import MasterLayout from "@/components/common/MasterLayout";
import NFTMembershipHighlights from "@/components/different/nft-affiliate/NFTMembershipHighlights";
import NFTMembershipStatus from "@/components/different/nft-affiliate/NFTMembershipStatus";
import NFTPendingClaim from "@/components/different/nft-affiliate/NFTPendingClaim";
import NFTPowerLine from "@/components/different/nft-affiliate/NFTPowerline";
import NFTReferral from "@/components/different/nft-affiliate/NFTReferral";
import NFTRenewal from "@/components/different/nft-affiliate/NFTRenewal";
import { Grid } from "@mui/material";

const affiliate = () => {
  return (
    <div>
      <MasterLayout>
        <NFTMembershipHighlights />
        <NFTMembershipStatus />
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} sx={{ padding: "10px", width: "100%" }}>
            <NFTRenewal />
          </Grid>
          <Grid item sm={12} md={6} sx={{ padding: "10px", width: "100%" }}>
            <NFTReferral />
          </Grid>
        </Grid>
        <NFTPendingClaim />
        <NFTPowerLine />
      </MasterLayout>
    </div>
  );
};

export default affiliate;
