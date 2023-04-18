import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const {admin} = useSelector((state) => state.admin)
  const currentUser = admin.affiliation

  return (
    <Box sx={{height: '70px', width: '100%', p:4, backgroundColor: 'white', boxShadow:3, display:'flex',justifyContent: 'flex-end', alignItems:'center' }}>
      <Box sx={{display:'flex', gap:1 }}>
        <Typography>Hi!</Typography>
        <Typography>{currentUser}</Typography>
      </Box>
    </Box>
  )
}

export default Navbar