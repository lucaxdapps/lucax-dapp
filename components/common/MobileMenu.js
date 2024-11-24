import {
  AccountBalanceWallet,
  BarChart,
  Close as CloseIcon,
  Dashboard,
  Group,
  LocalOffer,
  Menu as MenuIcon,
  SportsEsports,
  SwapHoriz,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useState } from "react";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  backgroundColor: "#121212",
  color: "#fff",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  zIndex: 1400,
}));

const Logo = styled("img")(({ theme }) => ({
  height: "40px",
}));

const OverlayMenu = styled(Box)(({ theme, open }) => ({
  position: "fixed",
  top: open ? "0" : "-100%",
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.95)",
  color: "#fff",
  zIndex: 1500,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(4),
  transition: "top 0.5s ease", // Smooth slide animation
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  zIndex: 1600,
  "& .MuiSvgIcon-root": {
    fontSize: "2rem", // Increase hamburger size
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

const CloseButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(4),
}));

const MenuItem = styled(ListItem)(({ theme }) => ({
  textAlign: "left",
  width: "100%",
  "& .MuiListItemText-root": {
    textAlign: "left",
  },
}));

const MobileMenu = ({ content }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Header with Logo and Hamburger Menu */}
      <HeaderContainer>
        <Box>
          <Logo
            sx={{ height: "60px", width: "auto" }}
            src="/dapp/lucax-dapps-full.png"
            alt="Logo"
          />
        </Box>
        {!menuOpen && (
          <MenuButton onClick={toggleMenu}>
            <MenuIcon />
          </MenuButton>
        )}
      </HeaderContainer>

      {/* Overlay Menu */}
      <OverlayMenu open={menuOpen}>
        <CloseButtonContainer>
          <Logo
            sx={{ height: "60px", width: "auto" }}
            src="/dapp/lucax-dapps-full.png"
            alt="Logo"
          />
          <IconButton onClick={toggleMenu} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </CloseButtonContainer>
        <List>
          <ListItem button component="a">
            <SidebarButton variant="contained" fullWidth>
              Connect Wallet
            </SidebarButton>
          </ListItem>
          <Divider />
          <Link
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            href="/dapp/stake/#"
            passHref
          >
            <MenuItem button>
              <ListItemIcon>
                <Dashboard sx={{ color: "#FFA500" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </MenuItem>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            href="/dapp/stake"
            passHref
          >
            <MenuItem button>
              <ListItemIcon>
                <BarChart sx={{ color: "#FFA500" }} />
              </ListItemIcon>
              <ListItemText primary="Staking" />
            </MenuItem>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            href="/dapp/vaultproducer"
            passHref
          >
            <MenuItem button>
              <ListItemIcon>
                <AccountBalanceWallet sx={{ color: "#FFA500" }} />
              </ListItemIcon>
              <ListItemText primary="Vault Producer" />
            </MenuItem>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            href="/dapp/battles"
            passHref
          >
            <MenuItem button>
              <ListItemIcon>
                <SportsEsports sx={{ color: "#FFA500" }} />
              </ListItemIcon>
              <ListItemText primary="Battles" />
            </MenuItem>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            href="/dapp/nfts"
            passHref
          >
            <MenuItem button>
              <ListItemIcon>
                <LocalOffer sx={{ color: "#FFA500" }} />
              </ListItemIcon>
              <ListItemText primary="NFTs" />
            </MenuItem>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            href="/dapp/nfts/affiliate"
            passHref
          >
            <MenuItem button>
              <ListItemIcon>
                <Group sx={{ color: "#FFA500" }} />
              </ListItemIcon>
              <ListItemText primary="Affiliates" />
            </MenuItem>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            href="/dapp/swapper"
            passHref
          >
            <MenuItem button>
              <ListItemIcon>
                <SwapHoriz sx={{ color: "#FFA500" }} />
              </ListItemIcon>
              <ListItemText primary="Swapper" />
            </MenuItem>
          </Link>
        </List>
      </OverlayMenu>
    </>
  );
};

export default MobileMenu;
