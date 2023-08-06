import "../App.css";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import GradientIcon from '@mui/icons-material/Gradient';

import { useState } from "react";
import { NavLink } from "react-router-dom";

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


const Drawer = styled(Box, {
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

export const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open} className="side-color side">
          <IconButton
            className="side-color"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,ml:1,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon className="side-color" />
          </IconButton>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon className="side-color" />
            ) : (
              <ChevronLeftIcon className="side-color" />
            )}
          </IconButton>
          <List className="side-color">
            <ListItem disablePadding sx={{ display: "block" }}>
              <NavLink className={"link-side"} to={"/users"}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <PersonIcon className="side-color" />
                </ListItemIcon>
                <ListItemText
                  primary={"Usuarios"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <NavLink className={"link-side"} to={"/clients"}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <PeopleIcon className="side-color" />
                </ListItemIcon>
                <ListItemText
                  primary={"Clientes"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem disablePadding sx={{ display: "block" }}>
              <NavLink className={"link-side"} to={"/products"}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LocalDrinkIcon  className="side-color" />
                </ListItemIcon>
                <ListItemText
                  primary={"Productos"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem disablePadding sx={{ display: "block" }}>
              <NavLink className={"link-side"} to={"/"}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <GradientIcon  className="side-color" />
                </ListItemIcon>
                <ListItemText
                  primary={"Impresiones"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
};
