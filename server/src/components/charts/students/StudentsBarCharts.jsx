import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React, { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const StudentsBarCharts = ({data}) => {

    const total = data.reduce((acc, { value }) => acc + value, 0);
    const [percentages, setPercentages] = useState(
    data.map(({ name, value }) => ({
      name,
      percentage: ((value / total) * 100).toFixed(0)
    }))
  );
    return (
         <Box sx={{}}>
             <ResponsiveContainer width="100%" height={400}>
             <BarChart width={150} height={40} data={data}>
             <XAxis dataKey="name" />
             <Tooltip />
                 <Bar dataKey="value" fill="#8884d8" />
             </BarChart>
             </ResponsiveContainer>

            <Box sx={{ display:'flex', width:'800px'}}>
                <TableContainer component={Paper}>
                <Table sx={{ width:'800px' }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                    {data.map((datava) => ( 
                        <TableCell key={datava.name} sx={{ width:'800px'}}>{datava.name}</TableCell>
                    ) )}
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                    {percentages.map((item) => (
                        <TableCell sx={{ width:'800px'}}> {item.percentage}%</TableCell>
                        ))}
                    </TableRow>
                </TableBody>

                </Table>
            </TableContainer>
            </Box>
                
           
             


         </Box>
       );
}

export default StudentsBarCharts