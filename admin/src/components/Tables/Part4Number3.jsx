import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';

const Part4Number3 = () => {

    const location = useLocation()
    const category = location.pathname.split("/")[1].split("Dashboard")[0]

    
    const {admin} = useSelector((state) => state.admin)
    const {affiliation, superAdmin} = admin
    const no_underscore_affiliation = affiliation.replace(/_/g, " ")
    const getCategory = affiliation.split("_")[1]

    const [table16, setTable16] = useState([])
    const [loading, setLoading] = useState(true)

    const [ethnicityothersData, setEthnicityothersData] = useState([])

    useEffect(() => {
        const getTables = async () => {
            try {
                if(superAdmin === true){
                    const getTable16 = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=3&category=${category}&part=part4`);
                    const choices16 = ['National Womens Month Celebration', 'GAD Corner/ Bulletin Child Minding/ Daycare Center/ Lactation/ Breastfeeding Station, enumerate', 'Use of Gender Fair Language', '18-day Campaign to End Violence Against Women and Children', 'GAD Awareness thru Film Showing', 'Others, enumerate', 'No'];
                    const sortData16 = choices16.map(choice => {
                    const data = getTable16.data.find(item => item.name.includes(choice));
                    return {
                        name: choice,
                        count: data ? data.count : 0,
                        };
                    });
                    setTable16(sortData16);
                    setLoading(false) 

                    const getEthnicityothers = await publicRequest.get(`/results/resultEssaySuperAdmin?question_order=3&category=${category}&part=part4`)
                    setEthnicityothersData(getEthnicityothers.data)
                    console.log(getEthnicityothers.data)
                    setLoading(false)

                }else if(superAdmin === false){
                    const getTable16 = await publicRequest.get(`/results/resultChart?question_order=3&affiliate=${affiliation}&part=part4`);
                    const choices16 = ['National Womens Month Celebration', 'GAD Corner/ Bulletin Child Minding/ Daycare Center/ Lactation/ Breastfeeding Station, enumerate', 'Use of Gender Fair Language', '18-day Campaign to End Violence Against Women and Children', 'GAD Awareness thru Film Showing', 'Others, enumerate', 'No'];
                    const sortData16 = choices16.map(choice => {
                    const data = getTable16.data.find(item => item.name.includes(choice));
                    return {
                        name: choice,
                        count: data ? data.count : 0,
                        };
                    });
                    setTable16(sortData16);
                    const getEthnicityothers = await publicRequest.get(`/results/resultEssay?question_order=3&affiliate=${affiliation}&part=part4`)
                    setEthnicityothersData(getEthnicityothers.data)
                    console.log(getEthnicityothers.data)
                   
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
                                <TableCell>Question</TableCell>
                                <TableCell>National Women's Month Celebration</TableCell>
                                <TableCell>GAD Corner/ Bulletin Child Minding/ Daycare Center/ Lactation/ Breastfeeding Station</TableCell>
                                <TableCell>Use of Gender Fair Language</TableCell>
                                <TableCell>18-day Campaign to End Violence Against Women and Children</TableCell>
                                <TableCell>GAD Awareness thru Film Showing</TableCell>
                                <TableCell>Others</TableCell>
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
                                    <TableCell sx={{ width: "30%",  borderRight:1 }}>3) Are you aware of the GAD programs in your organization</TableCell>
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

export default Part4Number3;