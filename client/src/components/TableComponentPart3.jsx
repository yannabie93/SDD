import { Box, Button, Grid, TextField, Typography,TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { publicRequest } from '../utils/publicRequest'

const TableComponentPart3 = ({id, category, part,handleChange}) => {
    
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [currentChoices, setCurrentChoices] = useState([])
  const [getCurrentQuestionType, setCurrentQuestionType] = useState("")
  const [getGridQuestion, setGridQuestion] = useState()

  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    setLoading(true)
    const getCurrentQuestion = async () =>{
      try {
        const res = await publicRequest.get(`/${category}/${category}${part}/questiontype/${id}`)
        let type = res.data.type
        setCurrentQuestionType(type)

        const currentChoice = await publicRequest.get(`${category}/listOfChoices?name=${res.data.question}&part=${category}questionpart${part}`)
        console.log(currentChoice.data)
        let currentColumn = currentChoice.data.length
        let column = 1

        if(currentColumn <=6){
          column = 12
        } else if(currentColumn>=7 && currentColumn <=16){
          column = 6
        }else if(currentColumn > 17){
          column = 3
        }

        
        setGridQuestion(column)
        setCurrentChoices(currentChoice.data)
        setCurrentQuestion(res.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)

      }
    }

    getCurrentQuestion()
},[id, category, part])

  return (
   <>
   {loading ? (
      <Typography>Loading</Typography>
    ): (
        <Box
        sx={{display:'flex', alignItems:'center', flexDirection:'column'}}
        >
        <Typography fontWeight={700} variant="h6">Question # {id}  </Typography>
        <Typography fontWeight={700} variant="h5">{currentQuestion && currentQuestion.question}</Typography>
        <TableContainer sx={{width: '100%', }} component={Paper}>
            <Table sx={{width: '100%'}}aria-label="simple table">
                <TableHead>
                    <TableRow>
                    {currentChoices.map((item, index) =>{
                        return (
                            <TableCell key={index} sx={{ fontWeight: 700 }} align="center">
                                {item.question_choices}
                        </TableCell>
                        )
                    })}                    
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                    {currentChoices.map((item, index) =>{
                        return (
                            <TableCell key={index} sx={{ fontWeight: 700 }} align="center">
                            <input 
                                name="choice" 
                                type="radio" 
                                style={{ transform: "scale(1.5)", marginRight: "8px" }}
                                value={item.question_choices} 
                                onChange={handleChange} 
                            />
                        </TableCell>
                        )
                    })}
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
        </Box>
    )}
   </>
  )
}

export default TableComponentPart3