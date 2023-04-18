import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React, { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const BarChartResults = ({data}) => {
    
    
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
                 <Bar dataKey="count" fill="#8884d8" />
             </BarChart>
             </ResponsiveContainer>

            <Box sx={{ display:'flex', width:'800px'}}>

                
            </Box>
                
           
             


         </Box>
       );
}

export default BarChartResults