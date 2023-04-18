import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, ListItemText, MenuItem, OutlinedInput, Paper, Radio, RadioGroup, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { rows } from '../utils/sampleData';



const Question = () => {
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names =[
    'Students',
    'Employees',
    'Faculty',
  ]

  const [loading,setLoading] = useState(false)


  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
  
     if (name === "toggle") {
      setAnswerData((prev) => ({...prev, [name]: value === "1" ? "1" : "0" }));
    } else {
      setAnswerData((prev) => ({...prev, [name]: value }));
    }
  };
  const [questionType, setQuestionType] = useState("sa");

  const [answerData, setAnswerData] = useState({
    p1_question: "",
    p1_question_order: "",
    type: questionType,
    toggle: "0",
  })


  return (
   <>
          {rows && (
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="left">Choices</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.question}</TableCell>
                    <TableCell align="center">
                      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:1}}>
                        <Button variant="outlined" color="error">Delete</Button>
                      </Box>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          )}

        <Box sx={{mt:3,display:'flex', flexDirection:'column',  height:'100%', width: '100%', justifyContent:'center',gap:1}}>
        <TextField label="Question Order" name="p1_question_order" type="number" onChange={() =>{}} required
            />

          <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', flex:1, gap:1, width:'100%' }}>          

         

          <FormControl required sx={{width: '100%'}} >
            <FormLabel id="demo-row-radio-buttons-group-label">Toggle</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              defaultValue="0"
              name="toggle"
              onChange={() =>{}
              }            >
              <FormControlLabel value="1" control={<Radio />} label="Yes" />
              <FormControlLabel value="0" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>


          </Box>

          <Box sx={{display:'flex',  gap:2, flex:1}}>
            
            {/* <TextField sx={{ width: '100%%'}} variant="outlined" label="Add Choices"    multiline required
              maxRows={4}  name="choices" onChange={handleAnswerChange} /> */}

            <Button  variant="outlined" color="success" startIcon={<AddBoxOutlinedIcon />}>Add Choices</Button>
          </Box>
    </Box>
   </>
  )
}

export default Question