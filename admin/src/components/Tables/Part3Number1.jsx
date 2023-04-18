    import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
    import React, { useState, useEffect } from 'react';
    import BeatLoader from "react-spinners/BeatLoader";
    import { publicRequest } from '../../utils/publicRequest';
    import { useSelector } from 'react-redux'
    import { useLocation } from 'react-router-dom';

    const Part3Number1 = () => {

        const location = useLocation()
        const category = location.pathname.split("/")[1].split("Dashboard")[0]

        const {admin} = useSelector((state) => state.admin)
        const {affiliation, superAdmin} = admin
        const no_underscore_affiliation = affiliation.replace(/_/g, " ")
        const getCategory = affiliation.split("_")[1]

        const [table16, setTable16] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            const getTables = async () => {
                try {

                    if(superAdmin === true){
                        const getTable16 = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=1&category=${category}&part=part3`);
                        const choices16 = ['Yes', 'No'];
                        const sortData16 = choices16.map(choice => {
                        const data = getTable16.data.find(item => item.name.includes(choice));
                        return {
                            name: choice,
                            count: data ? data.count : 0,
                            };
                        });
                        setTable16(sortData16);
                        setLoading(false)
                        
                    }else if (superAdmin === false){
                        const getTable16 = await publicRequest.get(`/results/resultChart?question_order=1&affiliate=${affiliation}&part=part3`);
                        const choices16 = ['Yes', 'No'];
                        const sortData16 = choices16.map(choice => {
                        const data = getTable16.data.find(item => item.name.includes(choice));
                        return {
                            name: choice,
                            count: data ? data.count : 0,
                            };
                        });
                        setTable16(sortData16);
                        setLoading(false)
                    }

                    
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
                                    <TableCell >Yes</TableCell>
                                    <TableCell >No</TableCell>
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
                                        <TableCell sx={{ width: "30%", borderRight:1 }}>1) I am the breadwinner of the family</TableCell>
                                    {table16.map((item, index) =>{
                                        return(
                                            <TableCell key={index}>{item.count}</TableCell>

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

    export default Part3Number1;