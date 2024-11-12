import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardComponent from "../templates/CardComponent";

const HighlightsContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.spacing(0),
  paddingBottom: theme.spacing(2),
  textAlign: "left",
}));

const StakeHighlights = () => {
  return (
    <HighlightsContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <CardComponent title="TOTAL DEPOSIT" value="$9,401,098" />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardComponent title="TOTAL STAKED" value="$7,099,464" />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardComponent title="TOTAL USERS" value="2,881" />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardComponent title="TOTAL VAULT PRODUCER" value="210" />
        </Grid>
      </Grid>
    </HighlightsContainer>
  );
};

export default StakeHighlights;
