import { Box, Button, Grid, TextField, Typography,TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table, CircularProgress } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { publicRequest } from '../utils/publicRequest'

const TableQuestion = ({id, category, part,handleChange}) => {
    
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [currentChoices, setCurrentChoices] = useState([])
  const [getCurrentQuestionType, setCurrentQuestionType] = useState("")
  const [getGridQuestion, setGridQuestion] = useState()

  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    setLoading(true)
    const getCurrentQuestion = async () =>{
      try {
        const res = await publicRequest.get(`/questions/find/${id}?part=part${part}&category=${category}`)
        const type = res.data.type_of_question
         setCurrentQuestionType(type)

        // const currentChoice = await publicRequest.get(`${category}/listOfChoices?name=${res.data.question}&part=${category}questionpart${part}`)
        let currentColumn = res.data.choices.length
        let column = 1

        if(currentColumn <=6){
          column = 12
        } else if(currentColumn>=7 && currentColumn <=16){
          column = 6
        }else if(currentColumn > 17){
          column = 3
        }

        
        setGridQuestion(column)
        setCurrentChoices(res.data.choices)
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
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <CircularProgress />
      </Box>
    ): (
        <Box
        sx={{display:'flex', alignItems:'center', flexDirection:'column',px:4}}
        >
        <Typography fontWeight={700} variant="h6">Question # {id}  </Typography>
        <Typography fontWeight={700} variant="h5">{currentQuestion && currentQuestion.title}</Typography>
        <TableContainer sx={{width: '100%', }}>
            <Table sx={{width: '100%'}}aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight: 700, fontSize: 20}} align="center">1</TableCell>
                        <TableCell sx={{fontWeight: 700, fontSize: 20}} align="center">2</TableCell>
                        <TableCell sx={{fontWeight: 700, fontSize: 20}} align="center">3</TableCell>
                        <TableCell sx={{fontWeight: 700, fontSize: 20}} align="center">4</TableCell>
                        <TableCell sx={{fontWeight: 700, fontSize: 20}} align="center">5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{fontWeight: 700, fontSize: 20}} align="center">Strongly Disagree</TableCell>
                        <TableCell sx={{fontWeight: 700, fontSize: 20}} align="center">Disagree</TableCell>
                        <TableCell sx={{fontWeight: 700, fontSize: 20}} align="center">Neither Agree nor Disagree</TableCell>
                        <TableCell sx={{fontWeight: 700, fontSize: 20}} align="center">Agree</TableCell>
                        <TableCell sx={{fontWeight: 700, fontSize: 20}} align="center">Strongly Agree</TableCell>
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
                                style={{ transform: "scale(2)", marginRight: "8px" }}
                                value={item.choices} 
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

export default TableQuestion