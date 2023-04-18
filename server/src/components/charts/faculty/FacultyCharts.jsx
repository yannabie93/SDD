import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'; // import Box from material-ui
import { useEffect } from 'react';

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

const FacultyCharts = ({data}) => {

  const [filterData, setFilterData] = useState()

  // Calculate percentages for each value
  const legendPayload = data.map((entry, index) => ({
    id: index,
    type: 'square',
    value: entry.choice,
    color: COLORS[index % COLORS.length],
  }));

  //count choices



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
            dataKey="count"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" payload={legendPayload} />
        </PieChart>
        
      </ResponsiveContainer>
      

      <TableContainer component={Paper}>

        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
                {data.map((item,index) => (
                  <TableCell key={index}>{item.choice}</TableCell>
                ))}
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
            {data.map((item, index) => (
                  <TableCell key={index}>{item.count}</TableCell>
                ))}
            </TableRow>
          </TableBody>

        </Table>
      </TableContainer>
    </Box>
  );
};

export default FacultyCharts;