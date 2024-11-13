import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardComponent from "../../templates/CardComponent";

const Container = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.spacing(0),
  paddingBottom: theme.spacing(2),
  textAlign: "left",
}));

const NFTMembershipStatus = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <CardComponent title="Your Membership RANK" value="Newbie" />
        </Grid>
        <Grid item xs={12} md={3} sx={{ paddingRight: { xs: 0, sm: "10px" } }}>
          <CardComponent title="BADGE" value="None" />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardComponent title="Membership Status" value="Open - Active" />
        </Grid>
        <Grid item xs={12} md={3} sx={{ paddingRight: { xs: 0, sm: "10px" } }}>
          <CardComponent title="Bonus Tier" value="0" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NFTMembershipStatus;
