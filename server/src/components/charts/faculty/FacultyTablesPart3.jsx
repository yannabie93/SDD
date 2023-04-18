import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FacultyTablesPart3 = ({ data }) => {
  const createData = (question, employment, investments, rentals, business, others) => ({ question, employment, investments, rentals, business, others });

  const datatable = data.map((row) => {
    const [employment, investments, rentals, business, others] = row.value.split(",").map((val) => parseInt(val));
    return createData(row.name, employment, investments, rentals, business, others);
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell align="right">Employment</TableCell>
            <TableCell align="right">Investments</TableCell>
            <TableCell align="right">Rentals/Leases</TableCell>
            <TableCell align="right">Business</TableCell>
            <TableCell align="right">Others</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datatable.map((row) => (
            <TableRow key={row.question}>
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell align="right">{row.employment}</TableCell>
              <TableCell align="right">{row.investments}</TableCell>
              <TableCell align="right">{row.rentals}</TableCell>
              <TableCell align="right">{row.business}</TableCell>
              <TableCell align="right">{row.others}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FacultyTablesPart3;