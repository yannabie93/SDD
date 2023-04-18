import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const EmployeesTablesPart2 = ({ data }) => {
  const createData = (question, yes, no) => ({ question, yes, no });

  const datatable = data.map((row) => {
    const [yes, no] = row.value.split(",").map((val) => parseInt(val));
    return createData(row.name, yes, no);
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell align="right">YES</TableCell>
            <TableCell align="right">NO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datatable.map((row) => (
            <TableRow key={row.question}>
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell align="right">{row.yes}</TableCell>
              <TableCell align="right">{row.no}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesTablesPart2;