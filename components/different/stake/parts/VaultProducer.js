import InfoIcon from "@mui/icons-material/Info";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

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

const VaultProducerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background:
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: "16px",
  color: "#fff",
  width: "100%",
  maxWidth: "600px",
  marginBottom: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#FFA500", // orange color
  fontWeight: "bold",
}));

const VaultProducerComponent = () => (
  <VaultProducerContainer>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <StyledTypography variant="h6">Vault Producer</StyledTypography>
      <Tooltip title="View your Wolfpack details here: the team's name, total members, and the collective stake amount. Keep track and observe your Wolfpack's growth.">
        <IconButton>
          <InfoIcon style={{ color: "#FFFFFF" }} />
        </IconButton>
      </Tooltip>
    </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "16px",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2" sx={{ color: "#FFA500" }}>
          Name
        </Typography>
        <Typography variant="body1">Mining Latam Global</Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2" sx={{ color: "#FFA500" }}>
          Member
        </Typography>
        <Typography variant="body1">120057400</Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2" sx={{ color: "#FFA500" }}>
          Total Staked
        </Typography>
        <Typography variant="body1">100,025,000,000.00</Typography>
      </Box>
    </Box>
  </VaultProducerContainer>
);

export default VaultProducerComponent;
