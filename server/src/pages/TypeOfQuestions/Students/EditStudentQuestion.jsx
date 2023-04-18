import { Box, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { QuestionType, Sidebar } from '../../../components'
import {students1Request, publicRequest} from '../../../utils/publicRequest.jsx'
import BeatLoader from "react-spinners/BeatLoader";

const EditStudentQuestion = () => {


  const {id} = useParams()
  const navigate = useNavigate();

  const location = useLocation()
  const pathname = location.pathname.split('/')[2]
  const getTableName = location.pathname.split('/')[1].toLowerCase() + pathname
  const category_of_question = location.pathname.split('/')[1].split("Question")[0]
  const PreviousUrl = location.pathname.split('/')[1] 

  const getTablePart = pathname.split('part')[1]


  const [loading, setLoading] = useState(true)

   
  const [getSingleData, setGetSingleData] = useState(null);
  const [updateQuestion, setUpdateQuestion] = useState({
    question: '',
    question_order: '',
    type: 'Single',
    toggle: '0',
  });
  
  

  
useEffect(() => {

  const getSingleQuestion = async () => {
    try {
                                              //employees1
      const res = await students1Request.get(`/students${getTablePart}/find/${id}`);

      setGetSingleData(res.data);
      setUpdateQuestion({
        question: res.data.question || '',
        question_order: res.data.question_order || '',
        type: res.data.type || 0,
        toggle: res.data.toggle || '',
      });
      setLoading(false);
    } catch (error) {
      console.log({message: error.message});
    }
  };

  getSingleQuestion();
}, [id, setGetSingleData, location, setUpdateQuestion]);

 

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;

      setUpdateQuestion((prev) => ({...prev, [name]: value }));
  
  };
  


  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    navigate(`/${PreviousUrl}/${pathname}`);

    try {
      await students1Request.put(`/${category_of_question}${getTablePart}/${id}`, updateQuestion);
    } catch (error) {
      console.log(error.message);
    }

  };
  
    return (
        <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
            <Box sx={{display:'flex', flex:.5}}>
              <Sidebar />
            </Box>
            <Box sx={{display:'flex', flex:2, p:4, flexDirection:'column', gap:2}}>
             
              {loading ? (
                  <BeatLoader 
                  color="#36d7b7" 
                  loading={loading}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ):
              (
                <Box sx={{p:4, display:'flex', flexDirection:'column', height:'100%', width: '100%', gap: 2}}>
                <Typography color="text.disabled" variant="h6" sx={{textTransform: 'uppercase', fontWeight: 700, borderBottom: 1}}>{`Edit Question for ${pathname}`}</Typography>
                <Box sx={{p:4, display:'flex', flexDirection:'column', height:'100%', width: '100%', boxShadow: 2, gap:2}}>

                <TextField 
                  value={updateQuestion.question}
                  variant="outlined"   
                  name="question" 
                  onChange={handleAnswerChange}    
                />


                    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', width :'100%',gap:2}}>
                    <TextField 
                      value={updateQuestion?.question_order}
                      name="question_order"
                      label="Question Order"
                      placeholder={getSingleData?.question_order.toString()} // convert to string
                      type="number" onChange={handleAnswerChange} 
                      inputProps={{ min: 1 }}  />
                        
                        <Box sx={{display:'flex', flexDirection:'row',width: '100%', justifyContent:'space-evenly', alignCenter:'center', }}>
                          <FormControl >
                            <FormLabel id="demo-row-radio-buttons-group-label">Toggle</FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              value={updateQuestion?.toggle}
                              name="toggle"
                              onChange={handleAnswerChange} 
                              >
                              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                              <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                          </FormControl>

                          <FormControl >
                            <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              value={updateQuestion?.type}
                              name="type"
                              onChange={handleAnswerChange} 
                                          >
                              <FormControlLabel value="Multiple" control={<Radio />} label="Multiple Answer" />
                              <FormControlLabel value="Single" control={<Radio />} label="Single Answer" />
                            </RadioGroup>
                          </FormControl>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Button onClick={handleUpdateSubmit} variant="contained" fullWidth size="large" >Update Question</Button>
                    </Box>
                </Box>
            </Box>
              )}
            </Box>
        </Box>
      )
}

export default EditStudentQuestion