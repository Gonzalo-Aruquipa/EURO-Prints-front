import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Navbar } from "./Navbar";
import { Send } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const UpdateUser = () => {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/users")
  };
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Grid container component="main" sx={{ height: "100vh", padding: 6 }}>
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
              sx={{ color: "#041A74", mb: 1 }}
            >
              Editar Usuario
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "#ff0000ec" }}></Avatar>

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
                type="text"
                id="name"
                label="Nombre"
                name="name"
                autoComplete="name"
                autoFocus
              />

              <TextField
                margin="normal"
                // onChange={(e) => handleUser(e)}
                required
                fullWidth
                type="text"
                id="user"
                label="Usuario"
                name="user"
                autoComplete="user"
                autoFocus
              />

              <TextField
                margin="normal"
                // onChange={(e) => handleUser(e)}
                required
                fullWidth
                id="password"
                label="Contraseña"
                type="password"
                name="password"
                autoComplete="password"
                autoFocus
              />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Cargo *</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Cargo *"
                  // onChange={handleChange}
                >
                  <MenuItem value={"Administrador"}>Administrador</MenuItem>
                  <MenuItem value={"Impresiones"}>Impresiones</MenuItem>
                </Select>
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                endIcon={<Send />}
                sx={{ mt: 3, mb: 2,bgcolor: "#041A74", color: "#fff", border: 1 }}
              >
                Guardar Cambios
              </Button>
            </Box>
          </Box>
        </Container>
      </Grid>
    </>
  );
};
