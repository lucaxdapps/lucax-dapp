import MasterLayout from "@/components/common/MasterLayout";
import BattlesLegacyList from "@/components/different/battle/BattleLegacyList";
import BattleSummary from "@/components/different/battle/BattleSummary";

const Battles = () => {
  return (
    <MasterLayout>
      <BattleSummary />
      <BattlesLegacyList />
    </MasterLayout>
  );
};

export default Battles;
