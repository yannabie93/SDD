import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const EmployeesTablesPart4 = ({ data }) => {
  const createData = (question, owned, rented, notApplicable) => ({ question, owned, rented, notApplicable });

  const datatable = data.map((row) => {
    const [owned, rented, notApplicable] = row.value.split(",").map((val) => parseInt(val));
    return createData(row.name, owned, rented, notApplicable);
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell align="right">Owned</TableCell>
            <TableCell align="right">Rented</TableCell>
            <TableCell align="right">Not Applicable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datatable.map((row) => (
            <TableRow key={row.question}>
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell align="right">{row.owned}</TableCell>
              <TableCell align="right">{row.rented}</TableCell>
              <TableCell align="right">{row.notApplicable}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesTablesPart4;