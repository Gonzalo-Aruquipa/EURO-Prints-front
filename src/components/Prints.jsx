
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import '../App.css'



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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export const Prints = () => {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className='color-table' >Responsable</StyledTableCell>
            <StyledTableCell className='color-table' align="center">Cliente</StyledTableCell>
            <StyledTableCell className='color-table' align="center">Producto</StyledTableCell>
            <StyledTableCell className='color-table' align="center">Cantidad</StyledTableCell>
            <StyledTableCell className='color-table' align="center">Fecha de Asignación</StyledTableCell>
            <StyledTableCell className='color-table' align="center">Fecha de Entrega</StyledTableCell>
            <StyledTableCell className='color-table' align="center">Indicaciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {"Alejandra"}
              </StyledTableCell>
              <StyledTableCell align="center">{"CT-5"}</StyledTableCell>
              <StyledTableCell align="center">{"Texas Miraflores"}</StyledTableCell>
              <StyledTableCell align="center">{"3000"}</StyledTableCell>
              <StyledTableCell align="center">{"01-08-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"03-8-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"Ninguna"}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {"Alejandra"}
              </StyledTableCell>
              <StyledTableCell align="center">{"CT-5"}</StyledTableCell>
              <StyledTableCell align="center">{"Texas Miraflores"}</StyledTableCell>
              <StyledTableCell align="center">{"3000"}</StyledTableCell>
              <StyledTableCell align="center">{"01-08-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"03-8-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"Ninguna"}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {"Alejandra"}
              </StyledTableCell>
              <StyledTableCell align="center">{"CT-5"}</StyledTableCell>
              <StyledTableCell align="center">{"Texas Miraflores"}</StyledTableCell>
              <StyledTableCell align="center">{"3000"}</StyledTableCell>
              <StyledTableCell align="center">{"01-08-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"03-8-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"Ninguna"}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {"Alejandra"}
              </StyledTableCell>
              <StyledTableCell align="center">{"CT-5"}</StyledTableCell>
              <StyledTableCell align="center">{"Texas Miraflores"}</StyledTableCell>
              <StyledTableCell align="center">{"3000"}</StyledTableCell>
              <StyledTableCell align="center">{"01-08-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"03-8-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"Ninguna"}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {"Alejandra"}
              </StyledTableCell>
              <StyledTableCell align="center">{"CT-5"}</StyledTableCell>
              <StyledTableCell align="center">{"Texas Miraflores"}</StyledTableCell>
              <StyledTableCell align="center">{"3000"}</StyledTableCell>
              <StyledTableCell align="center">{"01-08-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"03-8-2023"}</StyledTableCell>
              <StyledTableCell align="center">{"Ninguna"}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>

    </>
  )
}
