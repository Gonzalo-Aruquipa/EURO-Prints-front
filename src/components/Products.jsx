
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box } from "@mui/material";

import "../App.css";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/action";

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
export const Products = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (<>
    <Navbar />
      <div className="home">
        <Sidebar />
        <Box position={"relative"} className="users">
        <div className="btn-create">
        <NavLink to={"/new-product"}>
          <Button sx={{ bgcolor: "#ff0000ec", color:"white", borderColor: "#041A74" }} variant="outlined" endIcon={<AddCircleOutlineIcon />}>
            Nuevo Producto
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
                    Acciones
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {"CT-5 JUNIOR"}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Stack direction="row" spacing={1} align="left">
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
  )
}
