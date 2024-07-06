import MasterLayout from "@/components/common/MasterLayout";
import NFTMembershipHighlights from "@/components/different/nft-affiliate/NFTMembershipHighlights";
import NFTMembershipStatus from "@/components/different/nft-affiliate/NFTMembershipStatus";

const affiliate = () => {
  return (
    <div>
      <MasterLayout>
        <NFTMembershipHighlights />
        <NFTMembershipStatus />
      </MasterLayout>
    </div>
  );
};

export default affiliate;
