import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import Logo from '../assets/logo.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavbarEnd = () => {

  const {currentUser} = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const handleLogout = (e) =>{
    e.preventDefault();
    localStorage.removeItem('persist:root')
    navigate('/login')
  }

  return (
    <Box sx={{width:'100vw', boxShadow: 3, height: '70px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor: 'white'}}>
      <Container maxWidth="xl">
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Box sx={{display:'flex', alignItems:'flex-start', justifyContent:'center'}}>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', height: '100%', width: '100%', gap:2}}>
                  <Box component="img" sx={{height: 40, width: 40, objectFit:'contain'}} src={Logo} />
                  <Typography variant='h6' fontWeight={700} color="text.secondary"> PPSC </Typography>
                </Box>
            </Box>
            <Box sx={{display:'flex', alignItems:'flex-end', justifyContent:'center'}}>
                  <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', height: '100%', width: '100%', gap:3}}>
                    
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap: 1}}>
                    <Typography variant='subtitle1' color="text.disabled">Hi,</Typography>
                    <Typography variant='subtitle2' fontWeight={700} color="text.secondary"> {currentUser?.firstName} </Typography>
                    </Box>

                  </Box>
            </Box>
          </Box>
      </Container>
    </Box>
  )
}

export default NavbarEnd
