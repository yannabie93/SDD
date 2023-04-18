import { Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSingleQuestion } from '../redux/apiCalls'
import { publicRequest } from '../utils/publicRequest'
import './index.css'
const CurrentQuestion = ({id, category, part, handleChange,handleTextFieldChange}) => {


  const [currentQuestion, setCurrentQuestion] = useState({})
  const [currentChoices, setCurrentChoices] = useState([])
  const [getCurrentQuestionType, setCurrentQuestionType] = useState()
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
          console.log({error: error.message})
          setLoading(false)

        }
      }

      getCurrentQuestion()
  },[id, category, part])

  //Handle Click State

  const [openChoiceId, setOpenChoiceId] = useState(null);

  const handleClick = (choice) => {
    if (choice.essay ===  true) {
      setOpenChoiceId(choice.choices);
    } else {
      setOpenChoiceId(null);
    }
  };

      
  return (
    <>
    {loading ? (
   <CircularProgress />
   ): (
    <Box sx={{display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
    
      <Typography fontWeight={700} textAlign="center" variant="h6">Question # {id}  </Typography>
      <Typography fontWeight={700} textAlign="center" variant="h5">{currentQuestion && currentQuestion.title}</Typography>
      <Grid container spacing={2}  justifyContent="center" alignItems="center" mx={4} p={4} sx={{width: '100%',  height: '100%'}}>
        {currentChoices.map((choice, index) => (
          <Grid item xs={getGridQuestion} key={index} >
            {getCurrentQuestionType === false ?                       (
              <>
               <label className="toggle-button" key={choice.id} onClick={() => handleClick(choice)}>
                <input className="toggle-button__state" type="radio" name="choice" value={choice.choices} onChange={handleChange} />
                <span className="toggle-button__text">{choice.choices}</span>
                {/* {openChoiceId === choice.choices && choice.essay === true && <TextField id="outlined-basic" fullWidth name="essay" onChange={handleTextFieldChange}  mt={2} size='small' required label="Specify" variant="standard" />} */}
              </label>
                

              </>
            ):(
              <>
                <label className="toggle-button" key={choice.id} onClick={() => handleClick(choice)}>
                  <input className="toggle-button__state" type="checkbox" name="choice" value={choice.choices} onChange={handleChange}/>
                  <span className="toggle-button__text">{choice.choices}</span>
                  {/* {openChoiceId === choice.choices && choice.essay === true && <TextField id="outlined-basic" fullWidth name="essay" onChange={handleTextFieldChange} mt={2} size='small' label="Specify" variant="standard" />} */}
                </label>
              </>
            )}
            
 
            {openChoiceId === choice.choices && choice.essay === true && <TextField id="outlined-basic" fullWidth name="essay" onChange={handleTextFieldChange}  mt={2} size='small' required label="Specify" variant="standard" />}
          </Grid>
        ))}
        
      </Grid>
          </Box>

    )}
    </>

  )
}

export default CurrentQuestion
