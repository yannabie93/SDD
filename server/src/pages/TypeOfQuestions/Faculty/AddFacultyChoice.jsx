import { Box, Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import {Sidebar} from '../../../components'
import { faculty1Request } from '../../../utils/publicRequest'
import { rows } from '../../../utils/sampleData'
import BeatLoader from "react-spinners/BeatLoader";

const AddFacultyChoice = () => {

  const {id} = useParams()



  const location = useLocation()
  const getTablePart = location.pathname.split('/')[2].split('part')[1]


 const questionTable = location.pathname.split('/').join("").toLowerCase().split("choice")[0]


 const initialState = {
    question_id: id,
    part: questionTable,
    question_choices: '',
    toggle: 'No',
 }

  const [AddChoice, setAddChoice] = useState(initialState)
  const [getChoices, setGetChoices] = useState([])
  const [singleQuestion, setSingleQuestion] = useState()
  const [loading, setLoading] = useState(true)

  const handleDelete = async (e) => {
    
    try {
       await faculty1Request.delete(`/choices/${e}`)
       console.log("Delete Successfuly")
       setGetChoices(prevState =>
        prevState.filter(row => row.idfacultychoices !== id)
      );
    } catch (error) {
      console.log("Error")
      
    }
  }
  

  const handleChange = (e) =>{
    setAddChoice((prev) => ({...prev, [e.target.name] : e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(AddChoice)
    
    try {
      await faculty1Request.post('/choices', AddChoice)
      setAddChoice((prev) => ({ ...prev, question_choices: '' })) // reset textfield value to empty string
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    const getSingleQuestion = async () => {
      try {
        const res = await faculty1Request.get(`/faculty${getTablePart}/find/${id}`);
        const singleQuestionData = res.data;

        //FETCH VIA QUESTION ORDER
        setAddChoice((prev) => ({...prev, question_name: singleQuestionData.question}))


        const choice = await faculty1Request.get(`/choices/${id}?part=facultyquestionpart${getTablePart}`);
        const choicesData = choice.data;
        setSingleQuestion(singleQuestionData);
        setGetChoices(choicesData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleQuestion();
  }, [id, getChoices,setSingleQuestion]);

  return (
    <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
        <Box sx={{display:'flex', flex:.5}}>
          <Sidebar />
        </Box>
        {loading ? (
            <BeatLoader 
            color="#36d7b7" 
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"/>

        ):
        (
          <Box sx={{display:'flex',flexDirection:'column', height: '100%', alignItems:'center', flex:2, p:4, gap:2}}>
          <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center',height: '20% ',width: "100%", border:1, p:4, gap:1}}>
            <Typography color="text.disabled" variant='h6' sx={{fontWeight:700}}>Question:</Typography>
            <Typography color="text.disabled" variant='h6' sx={{fontWeight:200}}>{singleQuestion?.question  }</Typography>
          </Box>
          <Box sx={{height: '80%', width: '100%', border:1}}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell >Choices</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {getChoices.map((row) => (
                    <TableRow
                      key={row.idfacultychoices}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align='left'>{row.question_choices}</TableCell>
                      <TableCell align='right'>
                        <Button variant="outlined" onClick={() =>handleDelete(row.idfacultychoices)} color="error">Delete</Button>
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box sx={{display: 'flex', alignItems:'center', justifyContent: 'space-between', width: '100%', border:1, height:'100%', p:4, gap:2}}>
              <form onSubmit={handleSubmit} style={{display:'flex', justifyContent:'space-between', height:'100%', width:'100%', gap:2}}>
                <Box sx={{display:'flex', flex:1}}>
                  <TextField required label="Choice" name="question_choices"  value={AddChoice.question_choices}  onChange={handleChange}  fullWidth />
                </Box>

                <Box sx={{display:'flex', flex:1}}>
                  <Button variant="contained" color="success" type="submit">Add Choice</Button>
                  {singleQuestion?.toggle === "Yes" && (
                    <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Essay</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      defaultValue="No"
                      name="toggle"
                      onChange={handleChange}
                    >
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                )}
                </Box>
           
              </form>

          </Box>
        </Box>
        )}
    </Box>
  )
}

export default AddFacultyChoice