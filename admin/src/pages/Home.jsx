import { Box, Typography, CircularProgress, InputLabel, MenuItem , FormControl , Select, Button  } from '@mui/material'
import React,{ useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'
import {publicRequest} from '../utils/publicRequest'
import DataTable from '../components/DataTable'
import { LocalizationProvider, DatePicker, DateTimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import DayjsUtils from "@date-io/dayjs";

const Home = () => {

  const {admin} = useSelector((state) => state.admin)
  const {affiliation, superAdmin} = admin

  
  const no_underscore_affiliation = affiliation.replace(/_/g, " ")
  const getCategory = affiliation.split("_")[1]





  const [getTotal, setGetTotal] = useState()
  const [getRecentSurvey, setRecentSurvey] = useState([])
  const [loading, setLoading] = useState(true)

  const [totalStudents, setTotalStudents] = useState()
  const [totalEmployees, setTotalEmployees] = useState()
  const [totalFaculty, setTotalFaculty] = useState()

    const [date, setDate] = useState({
      start: dayjs(),
      end: dayjs()
    });
  
    const handleChangeDateStart = (newValue) => {
      setDate({
        ...date,
        start: newValue
      });
    };
  
    const handleChangeDateEnd = (newValue) => {
      setDate({
        ...date,
        end: newValue
      });
    };


    const handleSearchDate = (e) =>{
      const startDateISO = date.start.toISOString();
      const endDateISO = date.end.toISOString();

      console.log(startDateISO)



    }

    useEffect(() =>{
      const getTotal = async () =>{
        setLoading(true)
  
        try {
          if(superAdmin === true){
            const countDataEmployeees = await publicRequest.get(`/completed/getTotalAffiliation?category=employees`)
            const countDataFaculty = await publicRequest.get(`/completed/getTotalAffiliation?category=faculty`)
            const countDataStudents = await publicRequest.get(`/completed/getTotalAffiliation?category=students`)

            const surveys = await publicRequest.get(`/completed/getRecentSurvey?`)
            setRecentSurvey(surveys.data)



            setTotalFaculty(countDataFaculty.data)
            setTotalEmployees(countDataEmployeees.data)
            setTotalStudents(countDataStudents.data)
          }else if(superAdmin === false){
            //bilang or computed kung ilan nag survey
            const countData = await publicRequest.get(`/completed/getTotalAffiliation?affiliate=${affiliation}`)

            //eto ung mga nag survey, total survey
            const surveys = await publicRequest.get(`/completed/getRecentSurvey?affiliate=${affiliation}`)

            
            //Part 1
            const question1Result = await publicRequest.get(`/results/resultChart?question_order=1&affiliate=${affiliation}&part=part1`)

            setRecentSurvey(surveys.data)
            setGetTotal(countData.data)
          }
          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      }
      getTotal()
    },[setGetTotal,setDate, ])
  

  return (
    <Box sx={{display:'flex'}}>
      <Sidebar />
      <Box sx={{display:'flex', flex:6, flexDirection:'column'}}>
        <Navbar />
        <Box sx={{display:'flex', flexWrap:'wrap', p:4, gap:4, alignItems:'center', justifyContent:'center' }}>

          {superAdmin ? (
            <>
            <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#00c853"}}>
              <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>Employees</Typography>
              <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', width: '100%',}} >
              <Typography variant="h2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700'}}>{totalEmployees}</Typography>
              </Box>
            </Box>

            <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#00c853"}}>
              <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>Faculty</Typography>
              <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', width: '100%',}} >
              <Typography variant="h2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700'}}>{totalFaculty}</Typography>
              </Box>
            </Box>

            <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#673ab7"}}>
              <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>Students</Typography>
              <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', width: '100%',}} >
              <Typography variant="h2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700'}}>{totalStudents}</Typography>
              </Box>
            </Box>
            </>
          ):(
              <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#1e88e5"}}>
              <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>{no_underscore_affiliation}</Typography>
              <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', width: '100%',}} >
              <Typography variant="h2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700'}}>{getTotal}</Typography>
              </Box>
            </Box>
          )}
            

          

          
        </Box>
        <Box sx={{p:4, height: '95%', width: '100%', display:'flex', flexDirection:'column', gap:1}}>.
          <Box sx={{display:'flex', alignItems:'center'}}>
          <Typography sx={{display:'flex', flex:2}} variant="h5" color="text.disabled" fontWeight={700}>Recent Survey</Typography>
          <Box>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs }>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <Typography sx={{ fontWeight: 600, color: 'gray' }}>Start: </Typography>
              <DatePicker 
                label="Start Date"
                value={date.start}
                onChange={handleChangeDateStart}
                renderInput={(params) => <TextField {...params} />}
              />
              <Typography sx={{ fontWeight: 600, color: 'gray' }}>End: </Typography>
              <DatePicker 
                label="End Date"
                value={date.end}
                onChange={handleChangeDateEnd}
                renderInput={(params) => <TextField {...params} />}
              />

              <Button variant="contained" onClick={handleSearchDate}>
                Search
              </Button>
            </Box>
        </LocalizationProvider> */}

          </Box>
          </Box>
          {loading ? (
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <CircularProgress />
            </Box>
          ):(
            <DataTable loading={loading} data={getRecentSurvey} />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Home