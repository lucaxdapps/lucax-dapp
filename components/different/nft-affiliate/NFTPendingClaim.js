import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: "16px",
  color: "#fff",
  width: "100%", // Ensure full width
  margin: "0 auto",
  marginBottom: theme.spacing(2),
}));

const RedButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(90deg, #FF0000 0%, #FF6347 100%)", // Red gradient
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px",
  borderRadius: "20px",
  padding: "10px 30px",
  marginTop: theme.spacing(2),
  "&:hover": {
    background: "linear-gradient(90deg, #FF0000 0%, #FF6347 100%)",
  },
}));

const NFTPendingClaim = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Membership Reward Pending To Claim
        </Typography>
        <Tooltip title="Information about Membership Reward">
          <IconButton>
            <InfoIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Grid container spacing={2} textAlign="center" sx={{ marginTop: 1 }}>
        <Grid item xs={4}>
          <Typography sx={{ color: "#FFA500", fontWeight: "bold" }}>
            MEMBERSHIP REWARD
          </Typography>
          <Typography variant="h5">$0.00</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ color: "#FFA500", fontWeight: "bold" }}>
            MATCH BONUS
          </Typography>
          <Typography variant="h5">$0.00</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ color: "#FFA500", fontWeight: "bold" }}>
            ROYALTIE POOL
          </Typography>
          <Typography variant="h5">$0.00</Typography>
        </Grid>
      </Grid>
      <Box textAlign="center" sx={{ marginTop: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          All Reward Available
        </Typography>
        <Typography variant="h4">$0.00</Typography>
        <RedButton>- CLAIM ALL</RedButton>
      </Box>
    </Container>
  );
};

export default NFTPendingClaim;
