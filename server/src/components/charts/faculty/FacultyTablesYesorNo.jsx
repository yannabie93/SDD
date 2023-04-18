import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { faculty1Request } from '../../../utils/publicRequest';

const FacultyTablesYesorNo = () => {
    const [table16, setTable16] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTables = async () => {
            try {
                const getTable16 = await faculty1Request.get('/getTableyesorno?tableyesorno=1')
                const sortData16 = getTable16.data.sort((a, b) => a.choice_id - b.choice_id);
                const reverseData16 = sortData16.reverse()
                console.log(reverseData16)
                setTable16(reverseData16)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getTables()
    }, [setTable16])


    return (

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth:650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Questions</TableCell>
                                <TableCell>Yes</TableCell>
                                <TableCell>No</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow>

                        {loading ? (
                            <BeatLoader 
                            color="#36d7b7" 
                            loading={loading}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            />
                            ):(
                                <>
                                    <TableCell>{table16[0].question}</TableCell>
                                {table16.map((item) =>{
                                    return(
                                        <TableCell>{item.total}</TableCell>

                                    )
                                })}
                                </>
                            
                        )}
                        </TableRow>

                                                </TableBody>

                    </Table>
                </TableContainer>

    );
}

export default FacultyTablesYesorNo;