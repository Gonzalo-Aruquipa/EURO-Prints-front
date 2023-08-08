import {
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
import GradientIcon from "@mui/icons-material/Gradient";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';
import "dayjs/locale/en-gb";
import { Send } from "@mui/icons-material";

import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const NewPrint = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(dayjs('17-04-2023'));
  const fecha = value.$D+"-"+(value.$M+1)+"-"+value.$y;

  const [form, setForm] = useState({
    responsable: "",
    product: "",
    cantidad: "",
    fecha_e: "",
  });
  form.fecha_e=fecha;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    navigate("/");
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
              Agregar Nueva Impresión
            </Typography>
            <GradientIcon
              sx={{
                m: 1,
                bgcolor: "#ff0000ec",
                color: "#fff",
                borderRadius: 4,
              }}
            ></GradientIcon>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <FormControl fullWidth>
                <InputLabel id="responsable">Responsable *</InputLabel>
                <Select
                  sx={{ mb: 2 }}
                  labelId="demo-simple-select-label"
                  id="responsable"
                  // value={age}
                  label="Responsable *"
                  onChange={handleChange}
                  name="responsable"
                >
                  <MenuItem value={"Administrador"}>Trabajador 1</MenuItem>
                  <MenuItem value={"Impresiones"}>Trabajador 2</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="producto">Producto *</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="producto"
                  name="product"
                  label="Producto *"
                  onChange={handleChange}
                >
                  <MenuItem value={"3435kk"}>CT-5</MenuItem>
                  <MenuItem value={"123123"}>CT-4</MenuItem>
                </Select>
              </FormControl>

              <TextField
                margin="normal"
                onChange={ handleChange}
                required
                fullWidth
                type="text"
                id="cantidad"
                label="Cantidad"
                name="cantidad"
                autoComplete="name"
                autoFocus
              />
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={"en-gb"}
              >
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    sx={{
                      width: "100%",
                    }}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    label="Fecha de Entrega"
                  />
                </DemoContainer>
              </LocalizationProvider>

              <Button
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
