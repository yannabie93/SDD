import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tab, Box } from '@mui/material';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';


const PersonalExperienceTable = () => {

  const location = useLocation()
  const category = location.pathname.split("/")[1].split("Dashboard")[0]


  const {admin} = useSelector((state) => state.admin)
  const {affiliation, superAdmin} = admin
  const no_underscore_affiliation = affiliation.replace(/_/g, " ")
  const getCategory = affiliation.split("_")[1]

    const [table1, setTable1] = useState()
    const [table2, setTable2] = useState()
    const [table3, setTable3] = useState()
    const [table4, setTable4] = useState()

    const [loading, setLoading] = useState(true)
    useEffect(() =>{
    const getTables = async () =>{
        try {

            if (superAdmin === true){
              const getTable1 = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=1&category=${category}&part=part2`);
              const choices1 = ['1 Strongly Disagree', '2 Disagree', '3 Neutral', '4 Agree', '5 Strongly Agree'];
              const sortData1 = choices1.map(choice => {
              const data = getTable1.data.find(item => item.name.includes(choice));
              return {
                name: choice,
                count: data ? data.count : 0,
                };
              });
              setTable1(sortData1);
              console.log(sortData1);

              const getTable2 = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=2&category=${category}&part=part2`);
              const choices2 = ['1 Strongly Disagree', '2 Disagree', '3 Neutral', '4 Agree', '5 Strongly Agree'];
              const sortData2 = choices2.map(choice => {
              const data = getTable2.data.find(item => item.name.includes(choice));
              return {
                name: choice,
                count: data ? data.count : 0,
                };
              });
              setTable2(sortData2);
              console.log(sortData2);

              const getTable3 = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=3&category=${category}&part=part2`);
              const choices3 = ['1 Strongly Disagree', '2 Disagree', '3 Neutral', '4 Agree', '5 Strongly Agree'];
              const sortData3 = choices3.map(choice => {
              const data = getTable3.data.find(item => item.name.includes(choice));
              return {
                name: choice,
                count: data ? data.count : 0,
                };
              });
              setTable3(sortData3);
              console.log(sortData3);

              const getTable4 = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=4&category=${category}&part=part2`);
              const choices4 = ['1 Strongly Disagree', '2 Disagree', '3 Neutral', '4 Agree', '5 Strongly Agree'];
              const sortData4 = choices4.map(choice => {
              const data = getTable4.data.find(item => item.name.includes(choice));
              return {
                name: choice,
                count: data ? data.count : 0,
                };
              });
              setTable4(sortData4);
              console.log(sortData4);

              setLoading(false)

            } else if (superAdmin === false){
              const getTable1 = await publicRequest.get(`/results/resultChart?question_order=1&affiliate=${affiliation}&part=part2`);
              const choices1 = ['1 Strongly Disagree', '2 Disagree', '3 Neutral', '4 Agree', '5 Strongly Agree'];
              const sortData1 = choices1.map(choice => {
              const data = getTable1.data.find(item => item.name.includes(choice));
              return {
                name: choice,
                count: data ? data.count : 0,
                };
              });
              setTable1(sortData1);
              
    
              const getTable2 = await publicRequest.get(`/results/resultChart?question_order=2&affiliate=${affiliation}&part=part2`);
              const choices2 = ['1 Strongly Disagree', '2 Disagree', '3 Neutral', '4 Agree', '5 Strongly Agree'];
              const sortData2 = choices2.map(choice => {
              const data = getTable2.data.find(item => item.name.includes(choice));
              return {
                name: choice,
                count: data ? data.count : 0,
                };
              });
              setTable2(sortData2);
             
    
              const getTable3 = await publicRequest.get(`/results/resultChart?question_order=3&affiliate=${affiliation}&part=part2`);
              const choices3 = ['1 Strongly Disagree', '2 Disagree', '3 Neutral', '4 Agree', '5 Strongly Agree'];
              const sortData3 = choices3.map(choice => {
              const data = getTable3.data.find(item => item.name.includes(choice));
              return {
                name: choice,
                count: data ? data.count : 0,
                };
              });
              setTable3(sortData3);
             
    
              const getTable4 = await publicRequest.get(`/results/resultChart?question_order=4&affiliate=${affiliation}&part=part2`);
              const choices4 = ['1 Strongly Disagree', '2 Disagree', '3 Neutral', '4 Agree', '5 Strongly Agree'];
              const sortData4 = choices4.map(choice => {
              const data = getTable4.data.find(item => item.name.includes(choice));
              return {
                name: choice,
                count: data ? data.count : 0,
                };
              });
              setTable4(sortData4);
          
                
                setLoading(false)
            }

          
          
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
                  <TableCell>I experienced some issues being a woman/man</TableCell>
                  
              {table1 ? (
                  table1.map((item, index) => {
                  return (
                      <TableCell key={index} component="th" scope="row" align="right">
                          {item.count}
                      </TableCell>
                  );
                  })
              ) : (
                  <Box>
                  <TableCell key={index} colSpan={6} align="center">
                      {loading ? 'Loading...' : 'No data available'}
                  </TableCell>
                  </Box>
              )}
                </TableRow>
                
                <TableRow>
                  <TableCell>My domestic responsibilities affect my work in the office</TableCell>
              {table2 ? (
                  table2.map((item, index) => {
                  return (
                      <TableCell key={index} component="th" scope="row" align="right">
                          {item.count}
                      </TableCell>
                    
                  );
                  })
              ) : (
                  <Box>
                  <TableCell key={index} colSpan={6} align="center">
                      {loading ? 'Loading...' : 'No data available'}
                  </TableCell>
                  </Box>
              )}
                </TableRow>

                <TableRow>
                  <TableCell>I can feel the support of my family to achieve my dreams in life</TableCell>
              {table3 ? (
                  table3.map((item, index) => {
                  return (
                      <TableCell key={index} component="th" scope="row" align="right">
                          {item.count}
                      </TableCell>
                    
                  );
                  })
              ) : (
                  <Box>
                  <TableCell key={index} colSpan={6} align="center">
                      {loading ? 'Loading...' : 'No data available'}
                  </TableCell>
                  </Box>
              )}
                </TableRow>

                <TableRow>
                  <TableCell>I am fully aware of my rights as a person</TableCell>
              {table4 ? (
                  table4.map((item, index) => {
                  return (
                      <TableCell key={index} component="th" scope="row" align="right">
                          {item.count}
                      </TableCell>
                    
                  );
                  })
              ) : (
                  <Box>
                  <TableCell key={index} colSpan={6} align="center">
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

export default PersonalExperienceTable;