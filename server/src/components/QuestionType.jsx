import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Question} from '.'


const QuestionType = ({type, setAnswerData, answerData, handleAnswerChange, handleSubmitQuestion }) => {


  const [loading,setLoading] = useState(false)

  return (
    <Box sx={{display:'flex', position:'relative', flexDirection:'column', gap: 4}}>
      {type==="sa" && (
          <Box sx={{display:'flex', flexDirection:'column',width: '100%', height: '100%', gap:4}}>
            <Box sx={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', py:2,}}>
                <Typography variant="h6" sx={{borderBottom: 1}}>Single Choice</Typography>
            </Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Question"
              multiline
              maxRows={4}
              name="p1_question"
              onChange={handleAnswerChange}
              required

            />

            <Box> 
              <Question  handleAnswerChange={handleAnswerChange} setAnswerData={setAnswerData} answerData={answerData} />
            </Box>
        </Box>
      )}
      {type==="ma" && (
          <Box sx={{display:'flex', flexDirection:'column',width: '100%', height: '100%',}}>
          <Box sx={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', py:2}}>
              <Typography variant="h6" sx={{borderBottom: 1}}>Multiple Choices</Typography>
          </Box>
          <TextField
            id="outlined-multiline-flexible"
            label="Question"
            multiline
            maxRows={4}
            required
          />

        <Box>

        </Box>

      </Box>
      )}

      <Button type="submit"  color="secondary" size='large' variant="contained">Add Question</Button>
    </Box>
  )
}

export default QuestionType