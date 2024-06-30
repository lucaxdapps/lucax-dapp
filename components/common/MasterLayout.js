import { Box, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import Highlights from "./Highlights";
import Sidebar from "./Sidebar";

const drawerWidthOpen = 300;
const drawerWidthClosed = 100;

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#363636", // Dark background
  width: "100%",
  minHeight: "100vh",
  padding: theme.spacing(3),
  marginLeft: { sm: drawerWidthOpen, xs: drawerWidthClosed },
  transition: "margin 0.3s",
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  width: "100%",
}));

const MasterLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <MainContainer>
        <ContentContainer>
          <Highlights />
          {children}
        </ContentContainer>
      </MainContainer>
    </Box>
  );
};

export default MasterLayout;
