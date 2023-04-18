import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Sidebar } from '../components'
import { publicRequest } from '../utils/publicRequest'

const Home = () => {

  const [faculty, setFaculty] = useState()
  const [students, setStudents] = useState()
  const [employees, setEmployees] = useState()
  const [loading , setLoading] = useState(true)

  useEffect(() =>{
    const getTotalUsers = async () =>{
      setLoading(true)
      try {
        const res = await publicRequest.get('/users')
        const TotalEmployees = res.data.filter((item) => item.type === "employees").length
        const TotalStudents = res.data.filter((item) => item.type === "students").length
        const TotalFaculty = res.data.filter((item) => item.type === "faculty").length

        setFaculty(TotalFaculty)
        setStudents(TotalStudents)
        setEmployees(TotalEmployees)

        setLoading(false)
      } catch (error) {


        setLoading(false)
        
      }
    }
    getTotalUsers()
  },[setEmployees, setStudents, setFaculty])
  return (
    <Box sx={{display:'flex'}}>
      <Sidebar />
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flex: 6, flexDirection:'row', height :'100%', width: '100%', mt: 5, gap: 2}}>
              {loading ? (
                <CircularProgress />
              ):
              (
                <>
              <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#00c853",}}>
                <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>Employees</Typography>
                <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', width: '100%',}} >
                <Typography variant="h2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700'}}>{employees}</Typography>
                </Box>
              </Box>

              <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#2196f3"}}>
                <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>Students</Typography>
                <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', width: '100%',}} >
                <Typography variant="h2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700'}}>{students}</Typography>
                </Box>
              </Box>

              <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#673ab7"}}>
                <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>Faculty</Typography>
                <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', width: '100%',}} >
                <Typography variant="h2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700'}}>{faculty}</Typography>
                </Box>
              </Box>
                </>
              )}
        </Box>
      </Box>
  )
}

export default Home