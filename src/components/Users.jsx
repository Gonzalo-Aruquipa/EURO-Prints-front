import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box } from "@mui/material";

import "../App.css";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/action";
import { useEffect } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Users = () => {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  console.log(users)

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div className="home">
        <Sidebar />
        <Box position={"relative"} className="users">
        <div className="btn-create">
        <NavLink to={"/new-user"}>
          <Button sx={{ bgcolor: "#ff0000ec", color:"white", borderColor: "#041A74" }} variant="outlined" endIcon={<AddCircleOutlineIcon />}>
            Nuevo Usuario
          </Button>
          </NavLink>
        </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className="color-table">
                    Nombre
                  </StyledTableCell>
                  <StyledTableCell className="color-table" align="center">
                    Usuario
                  </StyledTableCell>
                  <StyledTableCell className="color-table" align="center">
                    Cargo
                  </StyledTableCell>
                  <StyledTableCell className="color-table" align="center">
                    Fecha de Ingreso
                  </StyledTableCell>

                  <StyledTableCell className="color-table" align="center">
                    Estado
                  </StyledTableCell>
                  <StyledTableCell className="color-table" align="center">
                    Acciones
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {"Juan Perez"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {"Ale"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {"Impresiones"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {"01-08-2023"}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Checkbox defaultChecked color="success" />
                    {"Activado"}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Stack direction="row" spacing={1} align="left">
                    <NavLink to={"/update-user/2"}>
                      <Button
                        variant="contained"
                        endIcon={<BorderColorIcon />}
                        sx={{ bgcolor: "#F7B908 " }}
                      >
                        Editar
                      </Button>
                      </NavLink>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        sx={{ bgcolor: "#F71508", color: "white" }}
                      >
                        Eliminar
                      </Button>
                    </Stack>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {"Gonzalo"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {"gonza"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {"Administrador"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {"01-08-2023"}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Checkbox
                      value={"X"}
                      sx={{
                        color: red[800],
                        "&.Mui-checked": {
                          color: red[600],
                        },
                      }}
                    />
                    {"Desactivado"}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="contained"
                        endIcon={<BorderColorIcon />}
                        sx={{ bgcolor: "#F7B908 " }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        sx={{ bgcolor: "#F71508", color: "white" }}
                      >
                        Eliminar
                      </Button>
                    </Stack>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
};
