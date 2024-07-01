import MasterLayout from "@/components/common/MasterLayout";
import VaultProducerList from "@/components/different/vaultProducer/VaultProducerList";
import VaultProducerPanel from "@/components/different/vaultProducer/vaultProducerPanel";

const VaultProducer = () => {
  return (
    <MasterLayout>
      <VaultProducerPanel />
      <VaultProducerList />
    </MasterLayout>
  );
};

export default VaultProducer;
