import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const StudentsTablesPart5 = ({ data }) => {
  const createData = (question, self, spouse, relatives, helper) => ({ question, self, spouse, relatives, helper });

  const datatable = data.map((row) => {
    const [self, spouse, relatives, helper] = row.value.split(",").map((val) => parseInt(val));
    return createData(row.name, self, spouse, relatives, helper);
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell align="right">Self</TableCell>
            <TableCell align="right">Spouse/Partner</TableCell>
            <TableCell align="right">Relatives</TableCell>
            <TableCell align="right">House Helper, etc.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datatable.map((row) => (
            <TableRow key={row.question}>
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell align="right">{row.self}</TableCell>
              <TableCell align="right">{row.spouse}</TableCell>
              <TableCell align="right">{row.relatives}</TableCell>
              <TableCell align="right">{row.helper}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentsTablesPart5;