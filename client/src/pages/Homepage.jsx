import React from 'react'
import { Navbar } from '../components'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Landing from '../assets/landing.jpg'
import { useDispatch, useSelector } from 'react-redux'
import CardPart1 from '../components/CardComponents/CardPart1'
import CardPart2 from '../components/CardComponents/CartPart2'
import CardPart3 from '../components/CardComponents/CardPart3'
import CardPart4 from '../components/CardComponents/CardPart4'
import {completeCard1, completeCard2, completeCard3} from '../redux/cardSlice'
const Homepage = () => {


  const {currentUser} = useSelector((state) => state.auth)
  const {card1,card2,card3,card4} = useSelector((state) => state.cards);
  const dispatch = useDispatch();


  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      overflow:'hidden',
    }}>
      <Navbar />
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
              <Typography variant="h5" color="text.disabled" sx={{textTransform: 'uppercase'}}>(PPSC {currentUser.type})</Typography>
               <Typography variant="h5" sx={{fontWeight: 700}} >Introduction: </Typography>
              <Typography textAlign={'center'}>This Survey is being conducted in line with implemntation of the General and Development (GAD) programs of the College. Your participation  in this survey will be helpful in preparint the appropriate GAD programs and activties. By Accomplishing the following survey, you are authorizing the PPSC to collect the process your information based on the aforementioned pur  pose of the survey. Rest assured that your information and response will be kept confidential in accordance with the Data Privacy Act of 2012</Typography>  
          </Box>
            
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',gap:2}}>

              <CardPart1 card={card1} />
              <CardPart2 card={card2} />
              <CardPart3 card={card3} />
              <CardPart4 card={card4} />
            </Box>
        </Box>

      </Box>
      
    </Box>
  )
}

export default Homepage

