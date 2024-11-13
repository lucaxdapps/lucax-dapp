import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: "16px",
  color: "#fff",
  maxWidth: "1200px",
  margin: "0 auto",
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: "#FFA500",
  fontWeight: "bold",
  fontSize: "24px", // Adjust size as needed
  marginBottom: theme.spacing(2),
}));

const NFTGridItem = ({ title, value }) => (
  <Grid item xs={12} md={4}>
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Typography sx={{ color: "#FFA500" }} variant="h6">
        {title}
      </Typography>
      <Typography variant="h5">{value}</Typography>
    </Box>
  </Grid>
);

const NFTMembershipHighlights = () => {
  return (
    <Container style={{ marginRight: "10px", marginBottom: "20px" }}>
      <StyledHeading>
        Your No Bitcoin No Money Club NFT Membership
      </StyledHeading>
      <Grid container spacing={2}>
        <NFTGridItem title="NFTS" value="0.00" />
        <NFTGridItem title="NET-WORTH" value="$0.00" />
        <NFTGridItem title="ENROLLED REWARDS RECEIVE" value="$0.00" />
        <NFTGridItem title="MEMBERSHIP REWARD CLAIMED" value="$0.00" />
        <NFTGridItem title="MATCH BONUS CLAIMED" value="$0.00" />
        <NFTGridItem title="ROYALTIE POOL CLAIMED" value="$0.00" />
      </Grid>
    </Container>
  );
};

export default NFTMembershipHighlights;
