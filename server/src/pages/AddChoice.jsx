import { Box, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { QuestionType, Sidebar } from '../components'
import {publicRequest} from '../utils/publicRequest.jsx'
import { rows } from '../utils/sampleData'
import AddIcon from '@mui/icons-material/Add';
const AddChoice  = () => {


  const location = useLocation()
  const pathname = location.pathname.split('/')[2]
  const getTableName = location.pathname.split('/')[1].toLowerCase() + pathname
  
  const [answerData, setAnswerData] = useState({
    question: "",
    question_order: "",
    type: "Single",
    toggle: "0",
    tableName: getTableName
  })

    return (
        <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
            <Box sx={{display:'flex', flex:.5}}>
              <Sidebar />
            </Box>
            <Box sx={{display:'flex', flex:2, p:4, flexDirection:'column', gap:2}}>
             
            <Box sx={{p:4, display:'flex', flexDirection:'column', height:'100%', width: '100%', gap: 2}}>
                <Typography color="text.disabled" variant="h6" sx={{textTransform: 'uppercase', fontWeight: 700, borderBottom: 1}}>{`Add Question for ${pathname}`}</Typography>
                <Box sx={{p:4, display:'flex', flexDirection:'column', height:'100%', width: '100%', boxShadow: 2, gap:2}}>

                    <TextField variant="outlined" label="Question" required name="question"  /> 
                    <Box sx={{display: 'flex', flexDirection: 'column', gap:2}}>
                      <Typography color="info.main" variant="h6" fontWeight={700}>
                      Choices
                      </Typography>            
                    {rows && (
                      <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow >
                            <TableCell sx={{fontWeight: 700, color:'gray'}}>ID</TableCell>
                            <TableCell sx={{fontWeight: 700, color:'gray'}} align="left">Choices</TableCell>
                            <TableCell sx={{fontWeight: 700, color:'gray' }} align="center">Action</TableCell>
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

                      <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                        <Typography variant="h6" fontWeight={700} color="text.disabled">Add Choices</Typography>

                        <Box sx={{display:'flex', flexDirection: 'row', gap:1}}>
                            <TextField label="Choices"  />
                            <Button variant="contained" color="success" startIcon={<AddIcon />}>
                              Add
                            </Button>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Button type="submit" variant="contained" fullWidth size="large" >Add Question</Button>
                    </Box>
                </Box>
            </Box>
            </Box>
        </Box>
      )
}

export default AddChoice  