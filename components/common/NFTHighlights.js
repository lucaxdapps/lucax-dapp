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

const NFTGrid = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <NFTGridItem title="TOTAL NFT MINTED" value="00" />
        <NFTGridItem title="TOTAL NFTs HOLDERS" value="00" />
        <NFTGridItem title="T. ENROLLED REWARD SENT" value="$0.00" />
        <NFTGridItem title="T. MEMBERSHIP REWARD CLAIMED" value="$0.00" />
        <NFTGridItem title="T. MATCH BONUS CLAIMED" value="$0.00" />
        <NFTGridItem title="T. ROYALTIE POOL CLAIMED" value="$0.00" />
      </Grid>
    </Container>
  );
};

export default NFTGrid;
