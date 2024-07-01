import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import CalculatorComponent from "./parts/Calculator";
import StakeComponent from "./parts/Stake";
import VaultProducerComponent from "./parts/VaultProducer";

const Container = styled(Box)(({ theme }) => ({
  padding: "9.6px",
  background:
    "linear-gradient(102.49deg, rgb(16, 16, 16) 4.28%, rgb(36, 36, 36) 61.94%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  color: "#fff",
  margin: theme.spacing(2),
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#1c1c1c",
  padding: theme.spacing(2),
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  color: "#fff",
  width: "100%",
  maxWidth: "600px",
  marginBottom: theme.spacing(2),
}));

const Deposit = () => (
  <Box sx={{ display: "flex" }}>
    <Box sx={{ padding: "10px", width: "100%" }}>
      <StakeComponent />
      <VaultProducerComponent />
    </Box>

    <Box sx={{ padding: "10px", width: "100%" }}>
      <CalculatorComponent />
    </Box>
  </Box>
);

export default Deposit;
