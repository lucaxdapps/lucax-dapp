import MasterLayout from "@/components/common/MasterLayout";
import Deposit from "@/components/different/stake/Deposit";
import ClaimUnstake from "@/components/different/stake/parts/ClaimUnstake";
import Portfolio from "@/components/different/stake/Portfolio";
import StakePortfolio1 from "@/components/different/stake/StakePortfolio1";
import StakePortfolio2 from "@/components/different/stake/StakePortfolio2";

const Stake = () => {
  return (
    <div>
      <MasterLayout>
        <Deposit style={{ paddingRight: "0" }} />
        <Portfolio />
        <ClaimUnstake />
        <StakePortfolio1 />
        <StakePortfolio2 />
      </MasterLayout>
    </div>
  );
};

export default Stake;
