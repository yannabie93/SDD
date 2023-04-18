import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';

const Part3Number2 = () => {

    const location = useLocation()
    const category = location.pathname.split("/")[1].split("Dashboard")[0]

    const {admin} = useSelector((state) => state.admin)
    const {affiliation, superAdmin} = admin
    const no_underscore_affiliation = affiliation.replace(/_/g, " ")
    const getCategory = affiliation.split("_")[1]

    const [table17, setTable17] = useState([])
    const [loading, setLoading] = useState(true)

    const [ethnicityothersData, setEthnicityothersData] = useState([])

    useEffect(() => {
        const getTables = async () => {
            try {
 
                if(superAdmin === true){
                    const getTable17 = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=2&category=${category}&part=part3`);
                    const choices17 = ['Employment', 'Investments', 'Rentals/ Leases', 'Business', 'Others'];
                    const sortData17 = choices17.map(choice => {
                    const data = getTable17.data.find(item => item.name.includes(choice));
                    return {
                        name: choice,
                        count: data ? data.count : 0,
                        };
                    });
                    setTable17(sortData17)

                    const getEthnicityothers = await publicRequest.get(`/results/resultEssaySuperAdmin?question_order=2&category=${category}&part=part3`)
                    setEthnicityothersData(getEthnicityothers.data)
                    console.log(getEthnicityothers.data)
                    setLoading(false)


                    

                }else if(superAdmin === false){
                    const getTable17 = await publicRequest.get(`/results/resultChart?question_order=2&affiliate=${affiliation}&part=part3`);
                    const choices17 = ['Employment', 'Investments', 'Rentals/ Leases', 'Business', 'Others'];
                    const sortData17 = choices17.map(choice => {
                    const data = getTable17.data.find(item => item.name.includes(choice));
                    return {
                        name: choice,
                        count: data ? data.count : 0,
                        };
                    });
                    setTable17(sortData17);

                    const getEthnicityothers = await publicRequest.get(`/results/resultEssay?question_order=2&affiliate=${affiliation}&part=part3`)
                    setEthnicityothersData(getEthnicityothers.data)
                    console.log(getEthnicityothers.data)
                   
                    setLoading(false)
                }

                
            } catch (error) {
                console.log(error)
            }
        }
        getTables()
    }, [setTable17])


    return (

                <TableContainer sx={{width:'100%'}} component={Paper}>
                    <Table sx={{ minWidth:650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow sx={{width:'100%'}}>
                                <TableCell>Questions</TableCell>
                                <TableCell>Employment</TableCell>
                                <TableCell>Investments</TableCell>
                                <TableCell>Rentals/Leases</TableCell>
                                <TableCell>Business</TableCell>
                                <TableCell>Others</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{width:'100%'}}>
                        <TableRow sx={{width:'100%'}}>

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
                                    <TableCell sx={{ width: "30%",  borderRight:1 }}> 2) My source/s of income is/are</TableCell>
                                {table17.map((item, index) =>{
                                    return(
                                        <TableCell key = {index} >{item.count}</TableCell>

                                    )
                                })}
                                </>  
                        )}
                        </TableRow>
                     </TableBody>
                    </Table>

                    <Accordion sx={{ width: '100%' }}>
                        <AccordionSummary sx={{
                            "&:hover": {
                            backgroundColor: "#797D7F",
                            color: "#fff"
                            }
                        }} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography>Others</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {ethnicityothersData.map((data) => (
                            <Typography sx={{borderBottom:1, borderColor:'gray', py:1}} key={data._id}>
                                {data.essay}  
                            </Typography>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </TableContainer>
                

    );
}

export default Part3Number2;