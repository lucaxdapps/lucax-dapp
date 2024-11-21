import MasterLayout from "@/components/common/MasterLayout";
import SwapperForm from "@/components/different/swapper/SwapperForm";
import SwapperHighlights from "@/components/different/swapper/SwapperHighlights";
import { Grid } from "@mui/material";

const Swapper = () => {
  return (
    <div>
      <MasterLayout>
        <Grid container spacing={2}>
          <Grid item sm={6} md={6} sx={{ width: "100%" }}>
            <SwapperHighlights />
          </Grid>

          <Grid Grid item sm={12} md={6} sx={{ width: "100%" }}>
            <SwapperForm />
          </Grid>
        </Grid>
      </MasterLayout>
    </div>
  );
};

export default Swapper;
