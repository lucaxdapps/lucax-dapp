import {
  AccountBalanceWallet,
  AccountBalanceWalletOutlined,
  ChevronLeft,
  ChevronRight,
  Dashboard,
  ExpandLess,
  ExpandMore,
  Group,
  LocalOffer,
  MoreHoriz,
  SportsEsports,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const drawerWidthOpen = 300;
const drawerWidthClosed = 100;

const SidebarContainer = styled(Drawer)(({ theme }) => ({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    backgroundColor: "#121212",
    color: "#fff",
    transition: "width 0.3s",
    overflowX: "hidden", // Prevent horizontal scrollbar
    paddingLeft: theme.spacing(2), // Consistent padding
    paddingRight: theme.spacing(2), // Consistent padding
  },
}));

const SidebarButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  backgroundColor: "#1a73e8",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#185abc",
  },
}));

const SidebarIcon = styled(ListItemIcon)(({ theme }) => ({
  color: "#fff",
  minWidth: "60px", // Increased size for larger icons
  "& svg": {
    fontSize: "2.5rem", // Increase the icon size
  },
}));

const ToggleButton = styled(IconButton)(({ theme }) => ({
  position: "fixed", // Change to fixed positioning
  top: 70, // Position it below the logo
  zIndex: 1300, // Higher z-index to ensure visibility over other elements
  backgroundColor: "#35374B",
  color: "#fff",
  borderRadius: "50%",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  "&:hover": {
    backgroundColor: "#121212",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem", // Adjust icon size
  },
}));

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
                  style={{ width: open ? 240 : 50 }} // Set width based on open state
                />
              </SidebarIcon>
            </ListItem>
            <ToggleButton
              onClick={handleToggle}
              sx={{
                top: 60, // Adjust top position as needed
                left: open ? drawerWidthOpen - 25 : drawerWidthClosed - 25, // Adjust position based on open state
              }}
            >
              {open ? <ChevronLeft /> : <ChevronRight />}
            </ToggleButton>
            <Divider />
            {!open && (
              <ListItem button>
                <SidebarIcon>
                  <AccountBalanceWalletOutlined />
                </SidebarIcon>
              </ListItem>
            )}
            {open && (
              <ListItem button>
                <SidebarButton variant="contained" fullWidth>
                  Connect Wallet
                </SidebarButton>
              </ListItem>
            )}
            <Divider />
            <ListItem button>
              <SidebarIcon>
                <Dashboard />
              </SidebarIcon>
              {open && <ListItemText primary="Dashboard" />}
            </ListItem>
            <ListItem button>
              <SidebarIcon>
                <AccountBalanceWallet />
              </SidebarIcon>
              {open && <ListItemText primary="Staking" />}
            </ListItem>
            <ListItem button>
              <SidebarIcon>
                <Group />
              </SidebarIcon>
              {open && <ListItemText primary="Wolfpacks" />}
            </ListItem>
            <ListItem button>
              <SidebarIcon>
                <SportsEsports />
              </SidebarIcon>
              {open && <ListItemText primary="Weekly Battles" />}
            </ListItem>
            <ListItem button>
              <SidebarIcon>
                <LocalOffer />
              </SidebarIcon>
              {open && <ListItemText primary="Alpha NFTs" />}
            </ListItem>
            <ListItem button onClick={handleExpandClick}>
              <SidebarIcon>
                <MoreHoriz />
              </SidebarIcon>
              {open && <ListItemText primary="More" />}
              {open && (expanded ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <SidebarIcon>
                    <MoreHoriz />
                  </SidebarIcon>
                  {open && <ListItemText primary="Option 1" />}
                </ListItem>
                <ListItem button>
                  <SidebarIcon>
                    <MoreHoriz />
                  </SidebarIcon>
                  {open && <ListItemText primary="Option 2" />}
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Box>
      </SidebarContainer>
    </Box>
  );
};

export default Sidebar;
