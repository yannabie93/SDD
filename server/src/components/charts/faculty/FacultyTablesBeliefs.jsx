import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tab, Box } from '@mui/material';
import { faculty1Request } from '../../../utils/publicRequest';
import BeatLoader from "react-spinners/BeatLoader";

const FacultyTablesBeliefs = () => {

    const [table5, setTable5] = useState()
    const [table6, setTable6] = useState()
    const [table7, setTable7] = useState()
    const [table8, setTable8] = useState()
    const [table9, setTable9] = useState()
    const [table10, setTable10] = useState()
    const [table11, setTable11] = useState()
    const [table12, setTable12] = useState()
    const [table13, setTable13] = useState()
    const [table14, setTable14] = useState()
    const [table15, setTable15] = useState()

    const [loading, setLoading] = useState(true)
  useEffect(() =>{
    const getTables = async () =>{
        try {
            const getTable5 = await faculty1Request.get('/getTable?table=5')
            const sortData5 = getTable5.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData5 = sortData5.reverse()
            setTable5(reverseData5)

            const getTable6 = await faculty1Request.get('/getTable?table=6')
            const sortData6 = getTable6.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData6 = sortData6.reverse()
            setTable6(reverseData6)

            const getTable7 = await faculty1Request.get('/getTable?table=7')
            const sortData7 = getTable7.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData7 = sortData7.reverse()
            setTable7(reverseData7)

            const getTable8 = await faculty1Request.get('/getTable?table=8')
            const sortData8 = getTable8.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData8 = sortData8.reverse()
            setTable8(reverseData8)

            const getTable9 = await faculty1Request.get('/getTable?table=9')
            const sortData9 = getTable9.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData9 = sortData9.reverse()
            setTable9(reverseData9)

            const getTable10 = await faculty1Request.get('/getTable?table=10')
            const sortData10 = getTable10.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData10 = sortData10.reverse()
            setTable10(reverseData10)

            const getTable11 = await faculty1Request.get('/getTable?table=11')
            const sortData11 = getTable11.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData11 = sortData11.reverse()
            setTable11(reverseData11)

            const getTable12 = await faculty1Request.get('/getTable?table=12')
            const sortData12 = getTable12.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData12 = sortData12.reverse()
            setTable12(reverseData12)

            const getTable13 = await faculty1Request.get('/getTable?table=13')
            const sortData13 = getTable13.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData13 = sortData13.reverse()
            setTable13(reverseData13)

            const getTable14 = await faculty1Request.get('/getTable?table=14')
            const sortData14 = getTable14.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData14 = sortData14.reverse()
            setTable14(reverseData14)

            const getTable15 = await faculty1Request.get('/getTable?table=15')
            const sortData15 = getTable15.data.sort((a, b) => a.choice_id - b.choice_id);
            const reverseData15 = sortData15.reverse()
            setTable15(reverseData15)
            
            setLoading(false)
        } catch (error) {
            
        }
    }
    getTables()
  },[setTable5])


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
                <TableCell>{table5[0]?.question}</TableCell>
            {table5 ? (
                table5.map((item, index) => {
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
                <TableCell>{table6[0]?.question}</TableCell>
            {table6 ? (
                table6.map((item, index) => {
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
                <TableCell>{table7[0]?.question}</TableCell>
            {table7 ? (
                table7.map((item, index) => {
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
                <TableCell>{table8[0]?.question}</TableCell>
            {table8 ? (
                table8.map((item, index) => {
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
                <TableCell>{table9[0]?.question}</TableCell>
            {table9 ? (
                table9.map((item, index) => {
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
                <TableCell>{table10[0]?.question}</TableCell>
            {table10 ? (
                table10.map((item, index) => {
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
                <TableCell>{table11[0]?.question}</TableCell>
            {table11 ? (
                table11.map((item, index) => {
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
                <TableCell>{table12[0]?.question}</TableCell>
            {table12 ? (
                table12.map((item, index) => {
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
                <TableCell>{table13[0]?.question}</TableCell>
            {table13 ? (
                table13.map((item, index) => {
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
                <TableCell>{table14[0]?.question}</TableCell>
            {table14 ? (
                table14.map((item, index) => {
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
                <TableCell>{table15[0]?.question}</TableCell>
            {table15 ? (
                table15.map((item, index) => {
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

export default FacultyTablesBeliefs;