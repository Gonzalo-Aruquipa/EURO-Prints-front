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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/action";
import Swal from "sweetalert2";

export const NewUser = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    username: "",
    password: "",
    role: "",
    date_u: ""
  });
  // const fecha= new Date().substring(0,10); 
  const year= new Date().getFullYear(); 
  const month= new Date().getMonth() + 1; 
  const day= new Date().getDate(); 

  const fecha= year+"-"+month+"-"+day;

  input.date_u= fecha;
  
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      Swal.fire("OK", "El usuario se agregó correctamente", "success");
      navigate("/users");
      
    } catch (error) {
      console.log(error);
      Swal.fire("Hubo un error", "Vuelva a Intentarlo", "error");
      navigate("/users");
    }
    dispatch(createUser(input));
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
              Agregar Nuevo Usuario
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
                required
                fullWidth
                type="text"
                id="username"
                label="Usuario"
                name="username"
                autoComplete="username"
                autoFocus
              />

              <TextField
                margin="normal"
                onChange={(e) => handleChange(e)}
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
                  label="Cargo *"
                  defaultValue={"DEFAULT"}
                  onChange={handleChange}
                  name="role"
                >
                  <MenuItem value={"Administrador"}>Administrador</MenuItem>
                  <MenuItem value={"Impresiones"}>Impresiones</MenuItem>
                  <MenuItem value={"Asesor"}>Asesor Ventas</MenuItem>
                </Select>
              </FormControl>

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
