import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import BadgeIcon from '@mui/icons-material/Badge';
import Man3Icon from '@mui/icons-material/Man3';
import React, { useEffect } from 'react'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { resetState } from '../redux/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/adminSlice';
import { toast } from 'react-toastify';
import DashboardIcon from '@mui/icons-material/Dashboard';
const Sidebar = () => {

  const {admin, isFetching, isError, isSuccess} = useSelector((state) => state.admin)
  const {affiliation, superAdmin} = admin


  const no_underscore_affiliation = affiliation.replace(/_/g, " ")
  const getCategory = affiliation.split("_")[1]


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = async (e) =>{
    e.preventDefault();
    try {
      dispatch(logOut())
      localStorage.removeItem('persist:root'); // remove admin data from local storage
      toast.info('Logged out successfully!'); // show success toast notification
      navigate('/login'); // redirect to login page
    } catch (error) {
      toast.error('Something went wrong. Please try again.'); // show error toast notification
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
          <Typography sx={{fontWeight: 700}} color="text-secondary">PPSC-ADMIN</Typography>
        </Box>

        

        <List 
            dense
           sx={{px:2}}
           subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Charts
            </ListSubheader>
          } 
        >
          <Link to="/  ">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="dashboard" />
            </ListItemButton>
            </ListItem>
          </Link>

        {superAdmin === false ? (
          <>
            <Link to="/dashboard  ">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Man3Icon />
                </ListItemIcon>
                <ListItemText primary={getCategory} />
            </ListItemButton>
            </ListItem>
          </Link>
          </>
        ): (
          <>
        <Link to="/studentsDashboard">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Man3Icon />
                </ListItemIcon>
                <ListItemText primary="Students" />
            </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/facultyDashboard">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Faculty" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to = "/employeesDashboard">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BadgeIcon />
                </ListItemIcon>
                <ListItemText primary="Employee" />
              </ListItemButton>
            </ListItem>
          </Link>
          </>
        )}

         

        </List>

        

       <Box sx={{position:'absolute', bottom: 50, width: '100%'}}>
       <Box sx={{ display:'flex', gap:2, justifyContent:'center', alignItems: 'flex-end', marginTop: 10, mx: 4 }}>
          <Button onClick={handleLogout} variant="contained" color="secondary" sx={{width: '100%'}}>Logout</Button>
        </Box>
       </Box>
    </Box>
  )
}

export default Sidebar