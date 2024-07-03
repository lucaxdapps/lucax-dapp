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
        <Grid item xs={6} md={3}>
          <CardComponent title="TOTAL DEPOSIT" value="$0" />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardComponent title="TOTAL STAKED" value="$0" />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardComponent title="TOTAL USERS" value="0" />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardComponent title="TOTAL VAULT PRODUCER" value="0" />
        </Grid>
      </Grid>
    </HighlightsContainer>
  );
};

export default StakeHighlights;
