import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./Sidebar";

const drawerWidthOpen = 300;
const drawerWidthClosed = 100;

const MasterLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <div>{children}</div>
    </Box>
  );
};

export default MasterLayout;
