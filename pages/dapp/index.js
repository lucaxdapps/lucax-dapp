import MasterLayout from "@/components/common/MasterLayout";
import NFTSection from "@/components/different/dapp/NFTSection";
import StakingCard from "@/components/different/dapp/StakingCard";
import WolfPacks from "@/components/different/dapp/WolfPacks";

function Index() {
  return (
    <MasterLayout>
      <WolfPacks />
      <StakingCard />
      <NFTSection />
    </MasterLayout>
  );
}

export default Index;
