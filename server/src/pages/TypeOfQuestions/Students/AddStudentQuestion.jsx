import { Box, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, } from 'react-router-dom'

import { QuestionType, Sidebar } from '../../../components'
import {publicRequest, students1Request} from '../../../utils/publicRequest.jsx'
import { rows } from '../../../utils/sampleData'
import AddIcon from '@mui/icons-material/Add';
const AddStudentQuestion = () => {
  
  const [getCategory,  setGetCategory] = useState()
  const location = useLocation()
  const navigate = useNavigate()

  const pathname = location.pathname.split('/')[2]
  const getTableName = location.pathname.split('/')[1].toLowerCase() + pathname
  const part = location.pathname
  const getQuestion = part.split('add')[0]
  const PreviousUrl = location.pathname.split('/')[1] 
  const [answerData, setAnswerData] = useState({
    question: "",
    question_order: "",
    type: "Single",
    toggle: "No",
    tableName: getTableName
  })

  useEffect(() =>{
    setGetCategory(location.pathname.split('/')[1].split("Question")[0])
  },[location, setGetCategory, setAnswerData,getQuestion])


  const getTablePart = pathname.split('part')[1]

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
      setAnswerData((prev) => ({...prev, [name]: value }));
  };
  
  

  const handleSubmitQuestion =  async (e) => {
    e.preventDefault();

   
    try {
     await students1Request.post(`/${getCategory}${getTablePart}`, answerData)
      navigate(`/${PreviousUrl}/${pathname}`)
    } catch (error) {
      console.log("error");
    }
  }


    return (
        <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
            <Box sx={{display:'flex', flex:.5}}>
              <Sidebar />
            </Box>
            <Box sx={{display:'flex', flex:2, p:4, flexDirection:'column', gap:2}}>
             
            <Box sx={{p:4, display:'flex', flexDirection:'column', height:'100%', gap: 2,  boxShadow: 2,}}>
                <Typography color="text.disabled" variant="h6" sx={{textTransform: 'uppercase', fontWeight: 700, borderBottom: 1}}>{`Add Question for ${pathname}`}</Typography>
                <form onSubmit={handleSubmitQuestion} >
                <Box sx={{p:4, display:'flex', flexDirection:'column', height:'100%', gap:2}}>

                    <TextField    variant="outlined" label="Question" required name="question"  onChange={handleAnswerChange}  /> 
                    
                        <TextField  name="question_order" required onChange={handleAnswerChange} placeholder="Item Number in Question.. e.i 1,2,3" label="Question Order" type="number"   inputProps={{ min: 1 }} />
                        
                          <FormControl  required>
                            <FormLabel id="demo-row-radio-buttons-group-label">Toggle</FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              defaultValue="No"
                              name="toggle"
                              onChange={handleAnswerChange}>
                              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                              <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                          </FormControl>

                          <FormControl  required>
                            <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              defaultValue="Single"
                              name="type"
                              onChange={handleAnswerChange}            >
                              <FormControlLabel value="Multiple" control={<Radio />} label="Multiple Answer" />
                              <FormControlLabel value="Single" control={<Radio />} label="Single Answer" />
                            </RadioGroup>
                          </FormControl>

                        
                        
                        <Box sx={{width: '100%', display:'flex', gap: 2}}>
                            <Button fullWidth type="submit" variant="contained"  size="large" >Add Question</Button>
                        </Box>
                </Box>
                </form>
                     
            </Box>
            </Box>
        </Box>
      )
}

export default AddStudentQuestion