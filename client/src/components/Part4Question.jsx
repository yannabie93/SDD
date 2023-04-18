import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Radio, TextField, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSingleQuestion } from '../redux/apiCalls'
import { publicRequest } from '../utils/publicRequest'
import './index.css'

const Part4Question = ({id, category, part,handleChange,handleTextFieldChange, setIsChange, setOpen, open, visibleTextField, setVisibleTextField}) => {

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

  //Handle Click State


  const [openChoiceId, setOpenChoiceId] = useState(null);
  const handleClick = (choice) => {
    setOpenChoiceId(choice.choices);
  };

  const openRadioChange = (event) => {
    setOpen(true)
    setIsChange(false)

  };

  const closeRadio = (e) =>{
    setOpen(false)
    setIsChange(true)

  }

  return (
    <>
    {loading ? (
      <Typography>Loading</Typography>
    ): (
    <>
      <Typography fontWeight={700} variant="h6" textAlign={"center"}>Question # {id}  </Typography>
      <Typography fontWeight={700} textAlign="center" variant="h5">{currentQuestion && currentQuestion.title}</Typography>
    
       {id === '5' || id === '6' ? (
         <Box sx={{display:'flex', flexDirection:'column', gap: 4}}>
 <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', gap:5, pt:2}}>
           
           {currentChoices.map((choice, index) =>(
           <Box key={index} sx={{display:'flex', justifyContent:'center', alignItems:'center', gap: 2}}>
               <input type="radio" name="choice" value={choice.choices}                       onChange={(e) => handleChange(e, choice)}
  style={{transform: 'scale(3)'}} />
               <Typography variant="h6"  htmlFor="rad">{choice.choices}</Typography>
           </Box>
             
           ))}
           
 
           </Box>
           <TextField
               id="filled-multiline-static"
               fullWidth
               multiline
               required
               rows={3}
               name="essay" 
               onChange={handleTextFieldChange} 
               variant="outlined"
             />
          
         </Box>
       ):
       (
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:3, marginTop:5, flexDirection:'column'}}>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap: 4}}>

          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap: 2}}>
              <input type="radio" onChange={openRadioChange} value="open" name="rad" id="rad" style={{transform: 'scale(2)'}} />
              <label htmlFor="rad">Yes</label>
          </Box>

          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap: 2}}>
              <input type="radio" onChange={closeRadio}  value="close" name="rad" id="rad2" style={{transform: 'scale(2)'}} defaultChecked />
              <label htmlFor="rad2">No</label>
          </Box>
  
        </Box>
              
          {open  && (
          <Grid container spacing={2}  justifyContent="center" alignItems="center" mx={4} p={4} sx={{width: '100%',  height: '100%'}}>
              {currentChoices.map((choice, index) =>(
                  <Grid item xs={6} key={index}>
                  <label
                    className="toggle-button"
                    key={choice.id}
                  >
                    <input
                      className="toggle-button__state"
                      type="checkbox"
                      name="choice"
                      value={choice.choices}
                      onChange={(e) => handleChange(e, choice)}
                    />
                    <span className="toggle-button__text">{choice.choices}</span>
                  </label>
            
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 50,
                      left: 0,
                      width: '100%',
                      px: 2,
                    }}
                  >
                    {visibleTextField && (
                      <TextField
                      id="filled-multiline-static"
               fullWidth
               multiline
               rows={3}
               name="essay" 
               onChange={handleTextFieldChange} 
               variant="outlined"
                      />
                    )}
                  </Box>
                </Grid>
                  
              ))}
              </Grid>
              )}
          
      </Box>
       )}
        
    </>
    )}
    </>

  )
}

export default Part4Question

// 