import React from "react";
import "../App.css";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MenuItem } from "@mui/material";
// import { LogoutOutlined } from "@mui/icons-material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
// import { Users } from "./Users";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Sidebar = (ss) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleUserPage =() =>{
    navigate("/users")

  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className="color-main navbar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to={"/"}>
              <img
                alt="logo"
                src={logo}
                width="100px"
                height={"60px"}
                style={{ cursor: "pointer", background:"white", borderRadius:50,marginTop:"7px" }}
              />
            </NavLink>

          <MenuItem>
            <NavLink className="login-header" to={"/login"}>
              INICIAR SESIÓN
            </NavLink>
            <NavLink className="login-header" to={"/login"}>
              <LoginRoundedIcon></LoginRoundedIcon>
            </NavLink>

          </MenuItem>

          {/* <Button
            variant="outlined"
            // onClick={handleSesionClose}
            sx={{ ml: 3, color: "#fff", border: "none" }}
            endIcon={<LogoutOutlined />}
          >
            LOGOUT
          </Button> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} position={"relative"}>
        <DrawerHeader className="drawer-color">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon className="drawer-color" />
            ) : (
              <ChevronLeftIcon className="drawer-color" />
            )}
          </IconButton>
        </DrawerHeader>
        <List className="drawer-color list">
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
            onClick={handleUserPage}
              className="drawer-color"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                className="drawer-color"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
                
              >
                <PersonIcon className="drawer-color" />
              </ListItemIcon>
              <ListItemText
                primary={"Usuarios"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>

            <ListItemButton
              className="drawer-color"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                className="drawer-color"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <GroupIcon className="drawer-color" />
              </ListItemIcon>
              <ListItemText
                primary={"Clientes"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>

            <ListItemButton
              className="drawer-color"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                className="drawer-color"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LocalDrinkIcon className="drawer-color" />
              </ListItemIcon>
              <ListItemText
                primary={"Productos"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {ss.ss}
      </Box>
    </Box>
  );
};
