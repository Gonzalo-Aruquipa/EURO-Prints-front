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

import "../App.css";

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

export const Prints = () => {
  return (
    <>
    <div className="prints">

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className="color-table">
                Responsable
              </StyledTableCell>
              <StyledTableCell className="color-table" align="center">
                Cliente
              </StyledTableCell>
              <StyledTableCell className="color-table" align="center">
                Producto
              </StyledTableCell>
              <StyledTableCell className="color-table" align="center">
                Cantidad
              </StyledTableCell>
              <StyledTableCell className="color-table" align="center">
                Estado
              </StyledTableCell>
              <StyledTableCell className="color-table" align="center">
                Fecha de Asignación
              </StyledTableCell>
              <StyledTableCell className="color-table" align="center">
                Fecha de Entrega
              </StyledTableCell>
              <StyledTableCell className="color-table" align="center">
                Indicaciones
              </StyledTableCell>
              <StyledTableCell className="color-table" align="center">
                Acciones
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {"Alejandra"}
              </StyledTableCell>
              <StyledTableCell align="center">{"CT-5"}</StyledTableCell>
              <StyledTableCell align="center">
                {"Texas Miraflores"}
              </StyledTableCell>
              <StyledTableCell align="center">{"3000"}</StyledTableCell>
              <StyledTableCell align="center">
                <Checkbox defaultChecked color="success" />
              </StyledTableCell>
              <StyledTableCell align="center">{"01-08-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"03-8-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"Ninguna"}</StyledTableCell>
              <StyledTableCell align="center">
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
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {"Alejandra"}
              </StyledTableCell>
              <StyledTableCell align="center">{"CT-5"}</StyledTableCell>
              <StyledTableCell align="center">
                {"Texas Miraflores"}
              </StyledTableCell>
              <StyledTableCell align="center">{"3000"}</StyledTableCell>
              <StyledTableCell align="center">
                <Checkbox defaultChecked color="success" />
              </StyledTableCell>
              <StyledTableCell align="center">{"01-08-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"03-8-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"Ninguna"}</StyledTableCell>
              <StyledTableCell align="center">
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
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {"Alejandra"}
              </StyledTableCell>
              <StyledTableCell align="center">{"CT-5"}</StyledTableCell>
              <StyledTableCell align="center">
                {"Texas Miraflores"}
              </StyledTableCell>
              <StyledTableCell align="center">{"3000"}</StyledTableCell>
              <StyledTableCell align="center">
                <Checkbox defaultChecked color="success" />
              </StyledTableCell>
              <StyledTableCell align="center">{"01-08-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"03-8-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"Ninguna"}</StyledTableCell>
              <StyledTableCell align="center">
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

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {"Alejandra"}
              </StyledTableCell>
              <StyledTableCell align="center">{"CT-5"}</StyledTableCell>
              <StyledTableCell align="center">
                {"Texas Miraflores"}
              </StyledTableCell>
              <StyledTableCell align="center">{"3000"}</StyledTableCell>
              <StyledTableCell align="center">
                <Checkbox
                  value={"X"}
                  sx={{
                    color: red[800],
                    "&.Mui-checked": {
                      color: red[600],
                    },
                  }}
                  />
              </StyledTableCell>
              <StyledTableCell align="center">{"01-08-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"03-8-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"Ninguna"}</StyledTableCell>
              <StyledTableCell align="center">
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
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {"Alejandra"}
              </StyledTableCell>
              <StyledTableCell align="center">{"CT-5"}</StyledTableCell>
              <StyledTableCell align="center">
                {"Texas Miraflores"}
              </StyledTableCell>
              <StyledTableCell align="center">{"3000"}</StyledTableCell>
              <StyledTableCell align="center">
                <Checkbox
                  defaultChecked
                  sx={{
                    color: red[800],
                    "&.Mui-checked": {
                      color: red[600],
                    },
                  }}
                  />
              </StyledTableCell>
              <StyledTableCell align="center">{"01-08-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"03-8-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"Ninguna"}</StyledTableCell>
              <StyledTableCell align="center">
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

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {"Alejandra"}
              </StyledTableCell>
              <StyledTableCell align="center">{"CT-5"}</StyledTableCell>
              <StyledTableCell align="center">
                {"Texas Miraflores"}
              </StyledTableCell>
              <StyledTableCell align="center">{"3000"}</StyledTableCell>
              <StyledTableCell align="center">
                <Checkbox
                  defaultChecked
                  sx={{
                    color: red[800],
                    "&.Mui-checked": {
                      color: red[600],
                    },
                  }}
                  />
              </StyledTableCell>
              <StyledTableCell align="center">{"01-08-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"03-8-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"Ninguna"}</StyledTableCell>
              <StyledTableCell align="center">
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
                    </div>
    </>
  );
};
