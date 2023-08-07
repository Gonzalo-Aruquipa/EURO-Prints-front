import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Navbar } from "./Navbar";
import { Send } from "@mui/icons-material";
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from "react-router-dom";

export const NewClient = () => {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/clients")
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
              Agregar Nuevo Cliente
            </Typography>
            <PeopleIcon sx={{ m: 1, bgcolor: "#ff0000ec", color: "#fff", borderRadius:5 }}></PeopleIcon>

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
                label="Razón Social o Nombre"
                name="name"
                autoComplete="name"
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                endIcon={<Send />}
                sx={{ mt: 3, mb: 2,bgcolor: "#041A74", color: "#fff", border: 1 }}
              >
                Guardar
              </Button>
            </Box>
          </Box>
        </Container>
      </Grid>
    </>
  );
};
