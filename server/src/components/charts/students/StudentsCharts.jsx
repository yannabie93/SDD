import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'; // import Box from material-ui

const COLORS = ['#0088FE', '#00C49F', '#C244FD', '#FF8042', '#FF759A', 'green', 'yellow'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const StudentsCharts = ({data}) => {
  // Calculate percentages for each value
  const total = data.reduce((acc, { value }) => acc + value, 0);
  const [percentages, setPercentages] = useState(
    data.map(({ name, value }) => ({
      name,
      percentage: ((value / total) * 100).toFixed(0)
    }))
  );

  return (
    <Box > {/* use Box instead of div */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" />
        </PieChart>
        
      </ResponsiveContainer>
      

      <TableContainer component={Paper}>

        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {data.map((datava) => ( 
                <TableCell key={datava.name}>{datava.name}</TableCell>
              ) )}
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              {percentages.map((item) => (
                <TableCell> {item.percentage}%</TableCell>
                ))}
            </TableRow>
          </TableBody>

        </Table>
      </TableContainer>
    </Box>
  );
};

export default StudentsCharts;