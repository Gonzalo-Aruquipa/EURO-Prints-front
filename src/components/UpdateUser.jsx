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
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserId, updateUser } from "../redux/action";

export const UpdateUser = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.userId);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    username: "",
    password: "",
    role: "",
  });
  console.log(input);


  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserId(id))
    setInput(user);
  }, [dispatch])

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(validate({ ...input, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(updateUser(input));
      navigate("/users");
    } catch (error) {
      console.log(error);
      navigate("/users");
    }
    navigate("/users");
  };
  const validate = (input) => {
    const errors = {};
    let RegEXP = /[`ª!@#$%^*-+=[\]{};"\\|,<>/~]/;
    if (!input.name) {
      errors.name = "Campo obligatorio";
    }
    if (!input.username) {
      errors.username = "Campo obligatorio";
    } else if (RegEXP.test(input.username)) {
      errors.username = "No se aceptan caracteres especiales";
    }

    if (!input.password) {
      errors.password = "Campo obligatorio";
    } else if (!/^[a-z0-9_-]{6,}$/.test(input.password)) {
      errors.password = "Introduzca más de 6 caracteres";
    }
    return errors;
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
                onChange={(e) => handleChange(e)}
                required
                fullWidth
                value={input.name}
                type="text"
                name="name"
                id="name"
                autoFocus
              />
              {error.name && <p className="danger-p">{error.name}</p>}

              <TextField
                margin="normal"
                onChange={(e) => handleChange(e)}
                required
                fullWidth
                value={input.username}
                disabled
                type="text"
                id="username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              {error.username && <p className="danger-p">{error.username}</p>}

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
              {error.password && <p className="danger-p">{error.password}</p>}

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Cargo *</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Cargo *"
                  defaultValue={"DEFAULT"}
                  value={input.role}
                  onChange={handleChange}
                  name="role"
                >
                  <MenuItem value={"Administrador"}>Administrador</MenuItem>
                  <MenuItem value={"Impresiones"}>Impresiones</MenuItem>
                  <MenuItem value={"Asesor"}>Asesor Ventas</MenuItem>
                </Select>
              </FormControl>
              {error.role && <p className="danger-p">{error.role}</p>}

              <Button
                disabled={error.name || error.username || error.password || error.role ? true : false}
                type="submit"
                fullWidth
                variant="contained"
                endIcon={<Send />}
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "#041A74",
                  color: "#fff",
                  border: 1,
                }}
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
