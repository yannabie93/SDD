import { Box, Button, Checkbox, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material'
import Logo from '../assets/logo.png'
import Gender from '../assets/gender.png'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { authRequest } from '../utils/publicRequest'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import { LoginUser } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import { resetState } from '../redux/authSlice'
import {completeCard1, completeCard2, completeCard3} from '../redux/cardSlice'

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {currentUser, isFetching, isError, isSuccess} = useSelector((state) => state.auth)
  const [checked, setChecked] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [user, setUser] = useState({
    email:'',
    password:'',
  })

  const [AgreeBox, setAgreeBox] = useState({
    checkbox1: false,
    checkbox2: false,
  })
  
 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

 


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await LoginUser(user, dispatch);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() =>{
    if(isError === true){
      toast.error("Incorrect Username or Password")
      dispatch(resetState())

    }
  },[isError])

  useEffect(() => {
    let successToastDisplayed = false;
  
    if (isSuccess === true && !successToastDisplayed) {
      toast.success("Login Successful");
      successToastDisplayed = true;
      dispatch(completeCard1());
      navigate('/');
    }
  }, [isSuccess]);
  
  

  
  const handleCheckbBoxAgreement = (e) => {
    setAgreeBox((prev) => ({ ...prev, [e.target.name]: !prev[e.target.name] }));
  };

  const handleChange = (e) =>{
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleCheck = (event) => {
    setOpen(true)
  };

  const handleModalConfirm = (e) =>{
    setChecked(true)
    setOpen(false)

  }

  useEffect(() =>{

  },[])

  // useEffect(() =>{
  //   if(currentUser){
  //     navigate('/')
  //   }
  // },[dispatch])

 
  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',height: '100vh', width: '100vw',}}>
      <Box sx={{height: '100%',width: '100%',display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Box component='img' src={Gender} />
      </Box>
      <Box sx={{display:'flex',height: '100%',width: '100%', alignItems:'center', justifyContent:'center', p:4 }}>
          <Box sx={{height: '100%', width: '100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', p:4}}>
            
            <Box sx={{height: '100%', width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:2}}>
              <Box component="img" src={Logo} />
              <Typography variant="h3" fontWeight={400} >Sex-Disaggregated System</Typography>
              <Typography variant="h6">Philippine Public Safety College</Typography>
            </Box>

            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column',width:'100%', alignItems:"center", justifyContent:'center', height: '100%', gap:'20px'}}>
              <TextField required fullWidth  onChange={handleChange} type="email" name="email" label="Email" variant="outlined" />
              <TextField required fullWidth  onChange={handleChange} type="password" name="password" label="password" variant="outlined" />
             
              <Box>
              <Checkbox
                required
                checked={checked}
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <Typography variant='caption'>Terms and Agreements</Typography>
              </Box>
              <Button disabled={!checked} type="submit" fullWidth variant="outlined" size="large">Enter</Button>
            </form>

            <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:1}}>
                <Typography id="modal-modal-title" variant="h6" sx={{fontWeight: 700 }} component="h2">
                  SEX DISAGGREGATED DATABASE SURVEY
                </Typography>
                <Typography variant="body" id="modal-modal-description" sx={{ mt: 1, fontWeight: 700 }}>
                  PHILIPPINE PUBLIC SAFETY COLLEGE (PPSC) DATA PRIVACY NOTICE
                </Typography>
                <Typography sx={{fontSize:'12px'}} >
                <br />
                <br />
                Philippine Public Safety College (PPSC) respects your right to privacy and is committed to protect the confidentiality of your personal information. PPSC is bound to comply with the Data Privacy Act of 2012 (RA 10173), its implementing Rules and Regulations and relevant issuances of the National Privacy Commission. It has adapted reasonable administrative, physical and technical measures to prevent loss, misuse, and alteration of the information under our control. However, no method of transmission over the internet or method of electronic storage is 100% secure.
                <br />
                <br />
                By filling up this form, you are consenting to the collection, processing and use of the information in accordance to this privacy notice. The following basic information are collected and processed: Full Name, Email Address, Educational Attainment, Employment Status, Rank/Position, Salary Grade (for government workers), and Number of Accumulated Years in Government Service. On the other hand, the sensitive personal information to be collected and processes are as follows: Age, Sex Assigned at Birth, Gender Identity, Civil Status, Ethnicity, Number of Children and their Age, Employment Status and Compensation of the Spouse, and your Monthly Salary Bracket. 
                <br />
                <br />
                Only authorized individuals from Planning and Research Division (PRD), Center for Communication and Information Technology (CCIT), Personnel Record Section (PRS), Faculty Development Division (FDD), Curriculum Standard and Development Division (CSDD), and Representatives from Constituent Units (CUs) will have access to this information and will not be disclosed to third parties without your permission. 
                <br />
                <br />
                The information you have provided will be used for any or all of the following: Gender Sensitivity Data Report, research purposes, data analytics of PPSC, and Personal Counselling/Advice Support purposes.
                <br />
                <br />
                The information is collected and stored through SDD Database. 
                PPSC shall only retain the said personal information until it serves its purpose, after which it shall be securely disposed of.  
                <br />
                <br />
                If you have concerns and queries on Data Privacy, email at iloppsc2019@gmail.com or  ccit@ppsc.gov.ph
                </Typography>
                
                <Box sx={{display:'flex', flexDirection:'column', mt:2}}>
                  <Typography sx={{fontWeight: 700}} variant="subtitle2">ACKNOWLEDGEMENT</Typography>
                  <Box sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                    <Checkbox
                      required
                      name="checkbox1"

                      checked={AgreeBox.checkbox1}
                      onChange={handleCheckbBoxAgreement}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <Typography sx={{fontSize:'12px', fontWeight: 700}}>I acknowledge that I have completely read and fully understand the above and agree to be bound thereby. I hereby release any and all claims against PPSC, its officers, associates and/or affiliates for the abovementioned purposes.</Typography>
                  </Box>
                </Box>

                <Box sx={{display:'flex', flexDirection:'column', mt:2}}>
                  <Typography sx={{fontWeight: 700}} variant="subtitle2">CONSENT</Typography>
                  <Box sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                    <Checkbox
                      required
                      name="checkbox2"
                      checked={AgreeBox.checkbox2}
                      onChange={handleCheckbBoxAgreement}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <Typography sx={{fontSize:'12px', fontWeight: 700}}>I acknowledge that I have completely read and fully understand the above and agree to be bound thereby. I hereby release any and all claims against PPSC, its officers, associates and/or affiliates for the abovementioned purposes.</Typography>
                  </Box>
                </Box>

                <Button onClick={handleModalConfirm} disabled={AgreeBox.checkbox1 === false || AgreeBox.checkbox2 === false} variant="contained" sx={{width: '100%', mt:2}}>Confirm</Button>

                </Box>
              </Box>
            </Modal>
          </div>
          </Box>
          
      </Box>
    </Box>
  )
}

export default Login