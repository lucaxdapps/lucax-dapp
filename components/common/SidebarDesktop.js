import {
  AccountBalanceWallet,
  AccountBalanceWalletOutlined,
  BarChart,
  ChevronLeft,
  ChevronRight,
  Dashboard,
  ExpandLess,
  ExpandMore,
  Group,
  Instagram,
  LocalOffer,
  MoreHoriz,
  ReceiptLong,
  SportsEsports,
  Telegram,
  WhatsApp,
  X,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useEffect, useState } from "react";

const drawerWidthOpen = 300;
const drawerWidthClosed = 100;

const SidebarContainer = styled(Drawer)(({ theme }) => ({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    backgroundColor: "#121212",
    color: "#fff",
    transition: "width 0.3s",
    overflowX: "hidden",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const SidebarButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  backgroundColor: "#FFA500",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#185abc",
  },
}));

const SidebarIcon = styled(ListItemIcon)(({ theme }) => ({
  color: "#fff",
  minWidth: "60px",
  "& svg": {
    fontSize: "2.5rem",
  },
}));

const ToggleButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  top: 70,
  zIndex: 1300,
  backgroundColor: "#35374B",
  color: "#fff",
  borderRadius: "50%",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  "&:hover": {
    backgroundColor: "#121212",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem",
  },
}));

const MoreIconGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const TikTokIcon = ({ color = "#FFFFFF" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="60%"
      height="60%"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

const MediumIcon = ({ color = "#FFFFFF", size = "60%" }) => {
  return (
    <svg
      viewBox="0 0 1043.63 592.71"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
        </g>
      </g>
    </svg>
  );
};

const SidebarDesktop = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Load the initial state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarOpen");
    if (savedState !== null) {
      setOpen(JSON.parse(savedState));
    }
  }, []);

  // Save the state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(open));
  }, [open]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <SidebarContainer
        variant="permanent"
        anchor="left"
        sx={{
          width: open ? drawerWidthOpen : drawerWidthClosed,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidthOpen : drawerWidthClosed,
          },
        }}
      >
        <Box sx={{ position: "relative", height: "100%" }}>
          <List>
            <ListItem sx={{ paddingBottom: 1 }}>
              <SidebarIcon>
                <img
                  src={
                    open
                      ? "/dapp/lucax-dapps-full.png"
                      : "/dapp/lucax-dapps-sq.png"
                  }
                  alt="Logo"
                  style={{ width: open ? 240 : 50 }}
                />
              </SidebarIcon>
            </ListItem>
            <ToggleButton
              onClick={handleToggle}
              sx={{
                top: 60,
                left: open ? drawerWidthOpen - 25 : drawerWidthClosed - 25,
              }}
            >
              {open ? <ChevronLeft /> : <ChevronRight />}
            </ToggleButton>
            <Divider />
            {!open && (
              <Link
                style={{ textDecoration: "none" }}
                href="/dapp/stake/#"
                passHref
              >
                <ListItem button component="a">
                  <SidebarIcon>
                    <AccountBalanceWalletOutlined />
                  </SidebarIcon>
                </ListItem>
              </Link>
            )}
            {open && (
              <Link
                style={{ textDecoration: "none" }}
                href="/dapp/stake/#"
                passHref
              >
                <ListItem button component="a">
                  <SidebarButton variant="contained" fullWidth>
                    Connect Wallet
                  </SidebarButton>
                </ListItem>
              </Link>
            )}
            <Divider />
            <Link
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              href="/dapp/stake/#"
              passHref
            >
              <ListItem button component="a">
                <SidebarIcon>
                  <Dashboard />
                </SidebarIcon>
                {open && <ListItemText primary="Dashboard" />}
              </ListItem>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              href="/dapp/stake"
              passHref
            >
              <ListItem button component="a">
                <SidebarIcon>
                  <BarChart />
                </SidebarIcon>
                {open && <ListItemText primary="Staking" />}
              </ListItem>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              href="/dapp/vaultproducer"
              passHref
            >
              <ListItem button component="a">
                <SidebarIcon>
                  <AccountBalanceWallet />
                </SidebarIcon>
                {open && <ListItemText primary="Vault Producer" />}
              </ListItem>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              href="/dapp/battles"
              passHref
            >
              <ListItem button component="a">
                <SidebarIcon>
                  <SportsEsports />
                </SidebarIcon>
                {open && <ListItemText primary="Battles" />}
              </ListItem>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              href="/dapp/nfts"
              passHref
            >
              <ListItem button component="a">
                <SidebarIcon>
                  <LocalOffer />
                </SidebarIcon>
                {open && <ListItemText primary="NFTs" />}
              </ListItem>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              href="/dapp/nfts/affiliate"
              passHref
            >
              <ListItem button component="a">
                <SidebarIcon>
                  <Group />
                </SidebarIcon>
                {open && <ListItemText primary="Affiliates" />}
              </ListItem>
            </Link>
            {open && (
              <>
                <ListItem button onClick={handleExpandClick}>
                  <SidebarIcon>
                    <MoreHoriz />
                  </SidebarIcon>
                  {open && <ListItemText primary="More" />}
                  {open && (expanded ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <MoreIconGrid container spacing={2}>
                    <Grid item xs={3}>
                      <Link
                        href="https://lucaxfinance.gitbook.io/lucax.docs"
                        passHref
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textDecoration: "none",
                          }}
                        >
                          <ReceiptLong
                            sx={{ fontSize: "2rem", color: "#fff" }}
                          />
                        </Box>
                      </Link>
                    </Grid>
                    <Grid item xs={3}>
                      <Link href="https://x.com/Lucax_Finance " passHref>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textDecoration: "none",
                          }}
                        >
                          <X sx={{ fontSize: "2rem", color: "#fff" }} />
                        </Box>
                      </Link>
                    </Grid>
                    <Grid item xs={3}>
                      <Link
                        href="https://www.instagram.com/lucax_finance/ "
                        passHref
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textDecoration: "none",
                          }}
                        >
                          <Instagram sx={{ fontSize: "2rem", color: "#fff" }} />
                        </Box>
                      </Link>
                    </Grid>
                    <Grid item xs={3}>
                      <Link
                        href="https://www.tiktok.com/@lucax_finance?lang=es"
                        passHref
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textDecoration: "none",
                          }}
                        >
                          <TikTokIcon
                            sx={{ fontSize: "2rem", color: "#fff" }}
                          />
                        </Box>
                      </Link>
                    </Grid>
                    <Grid item xs={3}>
                      <Link href="https://lucax-finance.medium.com/ " passHref>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textDecoration: "none",
                            padding: { xs: 0, sm: 1 },
                          }}
                        >
                          <MediumIcon
                            sx={{ fontSize: "2rem", color: "#fff" }}
                          />
                        </Box>
                      </Link>
                    </Grid>
                    <Grid item xs={3}>
                      <Link href="https://t.me/LucaxNewsChannel " passHref>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textDecoration: "none",
                          }}
                        >
                          <Telegram sx={{ fontSize: "2rem", color: "#fff" }} />
                        </Box>
                      </Link>
                    </Grid>
                    <Grid item xs={3}>
                      <Link
                        href="https://whatsapp.com/channel/0029VacH1WXDZ4LQsBkVVs2n "
                        passHref
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textDecoration: "none",
                          }}
                        >
                          <WhatsApp sx={{ fontSize: "2rem", color: "#fff" }} />
                        </Box>
                      </Link>
                    </Grid>
                    <Grid item xs={3}>
                      <Link
                        href="https://www.youtube.com/@Lucax.Finance"
                        passHref
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textDecoration: "none",
                          }}
                        >
                          <YouTube sx={{ fontSize: "2rem", color: "#fff" }} />
                        </Box>
                      </Link>
                    </Grid>
                  </MoreIconGrid>
                </Collapse>
              </>
            )}
          </List>
        </Box>
      </SidebarContainer>
    </Box>
  );
};

export default SidebarDesktop;
