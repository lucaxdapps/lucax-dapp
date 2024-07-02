import MasterLayout from "@/components/common/MasterLayout";
import Deposit from "@/components/different/stake/Deposit";
import Portfolio from "@/components/different/stake/Porfolio";
import StakePortfolio1 from "@/components/different/stake/StakePortfolio1";
import StakePortfolio2 from "@/components/different/stake/StakePortfolio2";

const Stake = () => {
  return (
    <div>
      <MasterLayout>
        <Deposit />
        <Portfolio />
        <StakePortfolio1 />
        <StakePortfolio2 />
      </MasterLayout>
    </div>
  );
};

export default Stake;
