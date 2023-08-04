import {  useNavigate } from "react-router-dom";

import { Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Avatar, Box, Button, Container, CssBaseline, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";

import "../App.css";
import { useState } from "react";

export const Login = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () =>{

    navigate("/")
  }
  

  return (
    <div>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", padding: 6 }}
        className="color-main"
      >
        <Container
          component="main"
          maxWidth="md"
          sx={{ bgcolor: "#ebebeb", padding: 3, borderRadius: 2 }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              sx={{ color: "#013a63", mb: 1 }}
            >
              Impresiones Europlast
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "#ff6700" }}></Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "#013a63" }}>
              Iniciar Sesión
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                // onChange={(e) => handleUser(e)}
                required
                fullWidth
                id="username"
                label="Usuario"
                name="username"
                autoComplete="username"
                autoFocus
              />

              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" fullWidth>
                  Contraseña *
                </InputLabel>
                <OutlinedInput
                  margin="normal"
                  id="outlined-adornment-password"
                  label="Contraseña"
                  // onChange={(e) => handleUser(e)}
                  required
                  fullWidth
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="outlined"
                endIcon={<Send />}
                sx={{ mt: 3, mb: 2, color: "#013a63", border: 1 }}
              >
                Iniciar Sesión
              </Button>
              
              
            </Box>
          </Box>
        </Container>
      </Grid>
    </div>
  );
};
