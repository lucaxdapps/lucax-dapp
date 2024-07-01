import MasterLayout from "@/components/common/MasterLayout";
import Deposit from "@/components/different/stake/Deposit";
import Portfolio from "@/components/different/stake/Porfolio";

const Stake = () => {
  return (
    <div>
      <MasterLayout>
        <Deposit />
        <Portfolio />
      </MasterLayout>
    </div>
  );
};

export default Stake;
