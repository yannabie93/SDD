import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { Sidebar } from '../../components'
import BeatLoader from "react-spinners/BeatLoader";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {  publicRequest, usersRequest } from '../../utils/publicRequest';


const AddUser = () => {

  const {id} = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const pathname = location.pathname.split('/')[1].split("Users")[0]



  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [info,setInfo] = useState({
    firstName: '',
    lastName: '',
    password: 'ChangeMe!23',
    email: '',
    affiliation: '',
    type: pathname
  })


  

  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      await publicRequest.post(`users/`, info )
      navigate(`/${pathname}Users`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setInfo(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  


  return (
    <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
        <Box sx={{display:'flex', flex:.5}}>
          <Sidebar />
        </Box>
        <Box sx={{display:'flex', flex:2, p:4}}>

          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:"20px", width: '100%'}}>
            <Typography fontWeight={700} variant="h4" color="text.secondary">Add User</Typography>
            <TextField onChange={handleChange}  name="email" label="Email" />

            <TextField onChange={handleChange}  name="firstName" label="First Name" />
            <TextField onChange={handleChange}  name="lastName" label="Last Name" />


            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Affiliation</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="affiliation"
                value={info.affiliation}
                onChange={handleChange}
              >
                {pathname === 'faculty' && [
                  <MenuItem key="ppsc_faculty" value={"ppsc_faculty"}>PPS Faculty</MenuItem>,
                  <MenuItem key="npc_faculty" value={"npc_faculty"}>NPC Faculty</MenuItem>,
                  <MenuItem key="njmpti_faculty" value={"njmpti_faculty"}>NJMPTI Faculty</MenuItem>,
                  <MenuItem key="nfti_faculty" value={"nfti_faculty"}>NFTI Faculty</MenuItem>,
                  <MenuItem key="nfsti_faculty" value={"nfsti_faculty"}>NFSTI Faculty</MenuItem>,
                  <MenuItem key="ppsa_faculty" value={"ppsa_faculty"}>PPSA Faculty</MenuItem>
                ]}

                {pathname === 'students' && [
                  <MenuItem key="ppsc_students" value={"ppsc_students"}>PPS Students</MenuItem>,
                  <MenuItem key="npc_students" value={"npc_students"}>NPC Students</MenuItem>,
                  <MenuItem key="njmpti_students" value={"njmpti_students"}>NJMPTI Students</MenuItem>,
                  <MenuItem key="nfti_students" value={"nfti_students"}>NFTI Students</MenuItem>,
                  <MenuItem key="nfsti_students" value={"nfsti_students"}>NFSTI Students</MenuItem>,
                  <MenuItem key="ppsa_students" value={"ppsa_students"}>PPSA Students</MenuItem>
                ]}

                {pathname === 'employees' && [
                  <MenuItem key="ppsc_employees" value={"ppsc_employees"}>PPS employees</MenuItem>,
                  <MenuItem key="npc_employees" value={"npc_employees"}>NPC employees</MenuItem>,
                  <MenuItem key="njmpti_employees" value={"njmpti_employees"}>NJMPTI employees</MenuItem>,
                  <MenuItem key="nfti_employees" value={"nfti_employees"}>NFTI employees</MenuItem>,
                  <MenuItem key="nfsti_employees" value={"nfsti_employees"}>NFSTI employees</MenuItem>,
                  <MenuItem key="ppsa_employees" value={"ppsa_employees"}>PPSA employees</MenuItem>
                ]}

              </Select>
            </FormControl>

            <Button type="submit" fullWidth variant="contained" size="large">Add New User</Button>
          </form>
      </Box>
    </Box>
  )
}

export default AddUser