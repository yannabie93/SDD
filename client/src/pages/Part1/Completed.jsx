import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components'
import { Box, Button, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Landing from '../../assets/landing.jpg'
import { useDispatch, useSelector } from 'react-redux'
import CardPart1 from '../../components/CardComponents/CardPart1'
import CardPart2 from '../../components/CardComponents/CartPart2'
import CardPart3 from '../../components/CardComponents/CardPart3'
import CardPart4 from '../../components/CardComponents/CardPart4'
import {completeCard1, completeCard2, completeCard3} from '../../redux/cardSlice'
import { publicRequest } from '../../utils/publicRequest'
import NavbarEnd from '../../components/NavbarEnd'
import { logOut } from '../../redux/authSlice'
const Completed = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const {currentUser} = useSelector((state) => state.auth)
  console.log(currentUser)
  
  const {email, type, affiliation} = currentUser || {}
  
  const [completedSurvey, setCompletedSurvey] = useState({
    email: email,
    category: type,
    affiliation: affiliation
  })

  const {card1,card2,card3,card4} = useSelector((state) => state.cards);

  const handleLogout = async (e) =>{
    e.preventDefault();
    console.log(completedSurvey)
  try {
    await publicRequest.post('/completed',completedSurvey )
    await publicRequest.post(`/results/completed?email=${currentUser.email}`)
    localStorage.removeItem('persist:root')
    dispatch(completeCard1())
    dispatch(logOut())
    navigate('/login')
  } catch (error) {
    console.log(error)
  }
  }


  


 
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      overflow:'hidden',
    }}>
      <NavbarEnd />
      <Box 
        sx={{
          p: 4,
          display: 'flex', 
          alignItems: 'center',
          backgroundImage: `url(${Landing})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: 'calc(100vh - 70px)',
          position: 'relative', 
          justifyContent: 'center', 
          overflow: 'hidden',
          objectFit:'cover',
          gap: 2,
        }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1, // Add this
          }}
        />
        
        <Box sx={{zIndex:2, display:'flex', alignItems:'center', height: '100%', width: '100%', backgroundColor: 'white', borderRadius: '50px', flexDirection:'column', p:4, gap:2}}>
          <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', gap: 3}}>
              <Typography variant="h4" sx={{fontWeight: '700'}} color="text.secondary">Gender And Development Survey Questionnaire</  Typography>
              <Typography variant="h5" color="text.disabled" sx={{textTransform: 'uppercase'}}>(PPSC {currentUser?.type})</Typography>
               <Typography variant="h5" sx={{fontWeight: 700}} > Thank you for completeing the Survey!  </Typography>
              
          </Box>
            
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',gap:2}}>
              <CardPart1 card={card1} />
              <CardPart2 card={card2} />
              <CardPart3 card={card3} />
              <CardPart4 card={card4} />
            </Box>
            <Button sx={{mt: 2}} onClick={handleLogout} variant="contained" color="secondary" fullWidth>Logout</Button>
        </Box>

      </Box>
      
    </Box>
  )
}

export default Completed

