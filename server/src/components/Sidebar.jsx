import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import AddIcon from '@mui/icons-material/Add';
import BadgeIcon from '@mui/icons-material/Badge';
import Man3Icon from '@mui/icons-material/Man3';
import React from 'react'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { logOut } from '../redux/adminSlice';
import DashboardIcon from '@mui/icons-material/Dashboard';
const Sidebar = () => {
  const navigate = useNavigate()
  const handleLogoUt =  (e) =>{
    e.preventDefault()
    try {
      localStorage.removeItem('persist:root')
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box sx={{
      backgroundColor: 'white',
      boxShadow: 3,
      minHeight: '100vh',
      flex:1,
      position: 'relative',
    }}>
        <Box sx={{display:'flex', flexDirection:'column', p:2, alignItems:'center', justifyContent:'center', gap: 4, borderBottom: 1, color: 'gray'}}>
          <Box component="img" src={Logo} sx={{width: 150, height: 150, }}  />
          <Typography sx={{fontWeight: 700}} color="text-secondary">Tech Admin</Typography>
        </Box>

        <List 
          dense
           sx={{px:2}}
           subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Users
            </ListSubheader>
          }
        >

          <Link to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>   


          <Link to="/studentsUsers">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Man3Icon />
                </ListItemIcon>
                <ListItemText primary="Students" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/facultyUsers">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Faculty" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/employeesUsers">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BadgeIcon />
                </ListItemIcon>
                <ListItemText primary="Employee" />
              </ListItemButton>
            </ListItem>
          </Link>
  
        </List>

       
      

        <Box sx={{ display:'flex', gap:2, justifyContent:'center', alignItems: 'flex-end', marginTop: 10, mx: 4 }}>
          <Button onClick={handleLogoUt} variant="contained" color="secondary" sx={{width: '100%'}}>Logout</Button>
        </Box>
    </Box>
  )
}

export default Sidebar