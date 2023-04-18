import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const FacultyTables = ({data}) => {
  function createData(question, sa, a, n, d, sd) {
    return { question, sa, a, n, d, sd };
  }

  const datatable = data.map((row) =>
    createData(row.name, row.value.split(",")[0], row.value.split(",")[1], row.value.split(",")[2], row.value.split(",")[3], row.value.split(",")[4])
  );

  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell align="right">5(SA)</TableCell>
            <TableCell align="right">4(A)</TableCell>
            <TableCell align="right">3(N)</TableCell>
            <TableCell align="right">2(D)</TableCell>
            <TableCell align="right">1(SD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datatable.map((row) => (
            <TableRow
              key={row.question}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell align="right">{row.sa}</TableCell>
              <TableCell align="right">{row.a}</TableCell>
              <TableCell align="right">{row.n}</TableCell>
              <TableCell align="right">{row.d}</TableCell>
              <TableCell align="right">{row.sd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FacultyTables;