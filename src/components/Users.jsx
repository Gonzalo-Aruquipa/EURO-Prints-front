import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/material";

import "../App.css";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, logicUser } from "../redux/action";
import { useEffect } from "react";
import Swal from "sweetalert2";

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
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleLogic = (e) => {
    try {
      dispatch(logicUser(e));
      Swal.fire("OK", "Modificación Correcta", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Hubo un error", "Vuelva a Intentarlo", "error");
      navigate("/users");
    }
  };

  return (
    <>
      <Navbar />
      <div className="home">
        <Sidebar />
        <Box position={"relative"} className="users">
          <p className="title-body">Usuarios</p>
          <div className="btn-create">
            <NavLink to={"/new-user"}>
              <Button
                sx={{
                  bgcolor: "#ff0000ec",
                  color: "white",
                  borderColor: "#041A74",
                }}
                variant="outlined"
                endIcon={<AddCircleOutlineIcon />}
              >
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
                {users.length !== 0
                  ? users.map((user) => (
                      <StyledTableRow key={user.id}>
                        <StyledTableCell component="th" scope="row">
                          {user.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {user.username}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {user.role}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {user.date_u}
                        </StyledTableCell>
                        {user.active ? (
                          <StyledTableCell align="left">
                            <Button
                              variant="contained"
                              color="success"
                              onClick={() => handleLogic(user.id)}
                            >
                              Activado
                            </Button>
                          </StyledTableCell>
                        ) : (
                          <StyledTableCell align="left">
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => handleLogic(user.id)}
                            >
                              Desactivado
                            </Button>
                          </StyledTableCell>
                        )}

                        <StyledTableCell align="left">
                          <Stack direction="row" spacing={1} align="left">
                            <NavLink to={`/update-user/${user.id}`}>
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
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
};
