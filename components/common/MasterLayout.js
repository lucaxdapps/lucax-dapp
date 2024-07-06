import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import NFTHighlights from "./NFTHighlights";
import SidebarDesktop from "./SidebarDesktop";
import StakeHighlights from "./StakeHighlights";

const drawerWidthOpen = 300;
const drawerWidthClosed = 100;

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#131313", // Dark background
  width: "100%",
  minHeight: "100vh",
  padding: theme.spacing(2),
  transition: "margin 0.3s",
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  width: "100%",
}));

const MasterLayout = ({ children }) => {
  const theme = useTheme();
  const isLargeOrLarger = useMediaQuery(theme.breakpoints.up("lg"));
  const router = useRouter();

  const isNFTPage = router.pathname.includes("/dapp/nfts");
  const isAffiliatePage = router.pathname.includes("/dapp/nfts/affiliate");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {isLargeOrLarger && <SidebarDesktop />}
      <MainContainer>
        <ContentContainer>
          {!isAffiliatePage &&
            (isNFTPage ? <NFTHighlights /> : <StakeHighlights />)}
          {children}
        </ContentContainer>
      </MainContainer>
    </Box>
  );
};

export default MasterLayout;
