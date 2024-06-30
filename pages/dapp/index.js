import MasterLayout from "@/components/common/MasterLayout";
import StakingCard from "@/components/different/dapp/StakingCard";
import WolfPacks from "@/components/different/dapp/WolfPacks";

function Index() {
  return (
    <MasterLayout>
      <WolfPacks />
      <StakingCard />
    </MasterLayout>
  );
}

export default Index;
