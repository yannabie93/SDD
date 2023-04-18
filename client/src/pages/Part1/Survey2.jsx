import { Box, Button, LinearProgress, RadioGroup, Typography , FormControlLabel, Radio, FormControl, FormLabel, CircularProgress, Checkbox, FormGroup, Grid } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Navbar } from '../../components';
import CurrentQuestion from '../../components/CurrentQuestion';
import { GetAllQuestion, GetSingleQuestion } from '../../redux/apiCalls';
import TableQuestion from '../../components/TableQuestion';

import { publicRequest } from '../../utils/publicRequest';
import { completeCard2, completeCard3 } from '../../redux/cardSlice';

    //pag kumukha ng choices, naka base sa may Primary ID
    //pag kumukha ng question at progress bar, naka base sa Order

    const Survey2 = () => {
        const dispatch = useDispatch()
        const {id} = useParams()
        const navigate = useNavigate()
        const location = useLocation()
        const getSurveyPart = location.pathname.split('/')[1].split('part')[1].split('survey')[0]
        const [isChange, setIsChange] = useState(false);

        const {currentUser} = useSelector((state) => state.auth)
      
        const {questions,isFetching, isError} = useSelector((state) => state.questions)
        const {email, type,affiliation} = currentUser
        const [loading ,setLoading] = useState(true)

        const [currentQuestionID, setCurrentQuestionID] = useState()
    
       const [answer,setAnswer] = useState({
        email: email,
        category: type,
        affiliation: affiliation,
        part: `part${getSurveyPart}`,
        choice: "",
        essay: "",

       })

       
        
       const handleChange = (e) => {
        const value = e.target.value;
        const inputType = e.target.type;
      
        let newChoice = answer.choice;
      
        if (inputType === "radio") {
          newChoice = [value];
        } else if (inputType === "checkbox") {
          const isChecked = e.target.checked;
          const choiceIndex = answer.choice.indexOf(value);
          if (isChecked) {
            newChoice = [...answer.choice, value];
          } else {
            newChoice = [
              ...answer.choice.slice(0, choiceIndex),
              ...answer.choice.slice(choiceIndex + 1),
            ];
          }
        }
      
        const newAnswer = { ...answer, choice: newChoice };
        setIsChange(true)
        setAnswer(newAnswer);
      };


        

       const handleTextFieldChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        if (name === "choice") {
          const selectedChoice = e.target.value;
          setAnswer((prev) => ({
            ...prev,
            [name]: [...prev[name], selectedChoice],
          }));
        } else {
          setAnswer((prev) => ({
            ...prev,
            [name]: value,
          }));
        }
        setIsChange(true);
      }



        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
              if (id <= questions.length) {
                await publicRequest.post(`/results`, {
                  ...answer,
                  question_order: id

                });
                //   await publicRequest.post(`/results`, {
                //     ...answer,
                //     choice: choiceString, // update the choice property
                //   });
                // console.log(answer)
                
                const newId = parseInt(id) + 1;
                if (newId === questions.length + 1) {
                  dispatch(completeCard3())
                  navigate(`/`);
                } else {
                  navigate(`/part2survey/${newId}`);
                }
              }
              else{
                console.log("ERROR!")
              }
              setAnswer({
                email: email,
                category: type,
                affiliation: affiliation,
                part: `part${getSurveyPart}`,
                choice: "",
                essay: "",

              });
              setIsChange(false);

            } catch (error) {
              console.log(error);
            }
          };


        useEffect(() =>{
            GetAllQuestion(type, getSurveyPart, dispatch)
        },[])

        
 

        const totalQuestions = questions.length - 1;
        const progress = ((parseInt(id) - 1) / totalQuestions) * 100;
        
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100vw', maxHeight: '100vh', overflowX: 'hidden' }}>
                <Navbar />
                <Box sx={{ display: 'flex', width: '100%', height: 'calc(100vh - 70px)', background: 'linear-gradient(90deg, rgba(0,8,36,1) 0%, rgba(7,7,170,1) 0%, rgba(72,81,138,1) 100%)', justifyContent: 'center' }}>
                <form style={{display:'flex', alignItems:'center', justifyContent:'center',width: '100%', height:'100%', }} onSubmit={handleSubmit}  >

                <Box sx={{ height: '90%', alignContent: 'flex-start', backgroundColor: 'white', width: '80%', borderRadius: '50px', flexDirection: 'column', mx: 4,  }}>

                    <Box sx={{ display: 'flex', alignItems: 'center',  justifyContent: 'center', flexDirection: 'column', gap: 2, height: '100%', py: 4 }}>
                    <Typography fontWeight={700 } textAlign="center" variant="subtitle1">Personal Experience, Beliefs, Opinions, and Thoughts Part 1</Typography>

                        <Box sx={{ width: '95%' }}>
                            <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: '20px' }} />
                        </Box>
                    {isFetching ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <Box sx={{height: '100%', display: 'flex',  flexDirection:'column', width: '100%'}}>
                            <TableQuestion handleChange={handleChange} handleTextFieldChange={handleTextFieldChange} category={type} part={getSurveyPart} id={id} />
                        
                        <Box sx={{ display:'flex', gap:2, justifyContent:'center', alignItems: 'flex-end', marginTop: 'auto' }}>
                            <Button  disabled={!isChange} type="submit" variant="contained">Next</Button>
                        </Box>

                        </Box>
                            
                    )}
                   

                   </Box>
                </Box>
                </form>

             </Box>
            </Box>
        );
    };

    export default Survey2
