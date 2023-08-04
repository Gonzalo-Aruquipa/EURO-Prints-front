import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

import { NavLink } from "react-router-dom";
import { Button, MenuItem } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import logo from "../assets/logo.png";
import "../App.css";

export const Navbar = () => {
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="relative"  className="color-main navbar">
            <Toolbar>
              <NavLink to={"/"}>
                <img
                  alt="logo"
                  src={logo}
                  width="100px"
                  height={"60px"}
                  style={{
                    cursor: "pointer",
                    background: "white",
                    borderRadius: 50,
                    marginTop: "7px",
                  }}
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

              <Button
                variant="outlined"
                // onClick={handleSesionClose}
                sx={{ ml: 3, color: "#fff", border: "none" }}
                endIcon={<LogoutOutlined />}
              >
                CERRAR SESIÓN
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};
