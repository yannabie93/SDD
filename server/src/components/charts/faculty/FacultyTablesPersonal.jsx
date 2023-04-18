import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tab, Box } from '@mui/material';
import { faculty1Request } from '../../../utils/publicRequest';
import BeatLoader from "react-spinners/BeatLoader";

const FacultyTablesPersonal = () => {

    const [table1, setTable1] = useState()
    const [table2, setTable2] = useState()
    const [table3, setTable3] = useState()
    const [table4, setTable4] = useState()

    const [loading, setLoading] = useState(true)
  useEffect(() =>{
    const getTables = async () =>{
        try {
            const getTable1 = await faculty1Request.get('/getTable?table=1')
            const sortData1 = getTable1.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData1 = sortData1.reverse()
            setTable1(reverseData1)

            const getTable2 = await faculty1Request.get('/getTable?table=2')
            const sortData2 = getTable2.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData2 = sortData2.reverse()
            setTable2(reverseData2)

            const getTable3 = await faculty1Request.get('/getTable?table=3')
            const sortData3 = getTable3.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData3 = sortData3.reverse()
            setTable3(reverseData3)

            const getTable4 = await faculty1Request.get('/getTable?table=4')
            const sortData4 = getTable4.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData4 = sortData4.reverse()
            setTable4(reverseData4)
            
            setLoading(false)
        } catch (error) {
            
        }
    }
    getTables()
  },[setTable1])


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
        {loading ? (
           <BeatLoader 
           color="#36d7b7" 
           loading={loading}
           size={50}
           aria-label="Loading Spinner"
           data-testid="loader"
         />
        ):(
          <TableBody>
            <TableRow>
                <TableCell>{table1[0]?.question}</TableCell>
            {table1 ? (
                table1.map((item, index) => {
                return (
                    <TableCell component="th" scope="row" align="right">
                        {item.choice_count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>
              
              <TableRow>
                <TableCell>{table2[0]?.question}</TableCell>
            {table2 ? (
                table2.map((item, index) => {
                return (
                    <TableCell component="th" scope="row" align="right">
                        {item.choice_count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>

              <TableRow>
                <TableCell>{table3[0]?.question}</TableCell>
            {table3 ? (
                table3.map((item, index) => {
                return (
                    <TableCell component="th" scope="row" align="right">
                        {item.choice_count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>

              <TableRow>
                <TableCell>{table4[0]?.question}</TableCell>
            {table4 ? (
                table4.map((item, index) => {
                return (
                    <TableCell component="th" scope="row" align="right">
                        {item.choice_count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>



        </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}

export default FacultyTablesPersonal;