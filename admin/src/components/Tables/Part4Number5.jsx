import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';

const Part4Number5 = () => {

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
                    const getEthnicityothers = await publicRequest.get(`/results/resultEssaySuperAdmin?question_order=5&category=${category}&part=part4`)
                    setEthnicityothersData(getEthnicityothers.data)
                    console.log(getEthnicityothers.data)
                    setLoading(false)

                }else if(superAdmin === false){
                    const getEthnicityothers = await publicRequest.get(`/results/resultEssay?question_order=5&affiliate=${affiliation}&part=part4`)
                    setEthnicityothersData(getEthnicityothers.data)
                    setLoading(false)
                    
                }
            } catch (error) {
                console.log(error)
            }
        }
        getTables()
    }, [setTable16])


    return (
        <Box sx={{display:'flex', flexDirection:'column', width: '100%', boxShadow:3}}>
          {loading ? (
            <BeatLoader 
              color="#36d7b7" 
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <Accordion style={{ width: '100%' }}>
              <AccordionSummary sx={{
                            "&:hover": {
                            backgroundColor: "#797D7F",
                            color: "#fff",
                            }
                        }} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>5) I need to know more about GAD (If yes what do you whant to know more? If no why?)</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {ethnicityothersData.map((data) => (
                  <Typography sx={{borderBottom:1, borderColor:'gray', py:1}} key={data._id}>
                    {data.essay}  
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          )}
        </Box>
      );
}

export default Part4Number5;