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

import "../App.css";
import { Box } from "@mui/material";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

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
export const Clients = () => {
  return (<>
    <Navbar />
      <div className="home">
        <Sidebar />
        <Box position={"relative"} className="users">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className="color-table">
                    Razón Social
                  </StyledTableCell>
                  <StyledTableCell className="color-table" align="center">
                    Fecha de Ingreso
                  </StyledTableCell>
                  <StyledTableCell className="color-table" align="center">
                    Acciones
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {"TEXAS MIRAFLORES"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {"01-08-2023"}
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

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {"TEXAS MIRAFLORES"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {"01-08-2023"}
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
