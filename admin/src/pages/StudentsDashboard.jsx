import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Typography } from '@mui/material'
import React,{ useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import RespondentsChart from '../components/RespondentsChart'
import { useSelector } from 'react-redux'
import {publicRequest} from '../utils/publicRequest' 
import PieChartResults from '../components/Charts/PieChartResults'
import BarChartResults from '../components/Charts/BarChartResults'
import PersonalExperienceTable from '../components/Tables/PersonalExperienceTable'
import BeliefsTable from '../components/Tables/BeliefsTable'
import Part3Number1 from '../components/Tables/Part3Number1'
import Part3Number2 from '../components/Tables/Part3Number2'
import Part3Number3 from '../components/Tables/Part3Number3'
import Part3Number4 from '../components/Tables/Part3Number4'
import Part3Number5 from '../components/Tables/Part3Number5'
import Part3Number6 from '../components/Tables/Part3Number6'
import Part3Number7 from '../components/Tables/Part3Number7'
import Part3Number8 from '../components/Tables/Part3Number8'
import Part3Number9 from '../components/Tables/Part3Number9'
import Part3Number10 from '../components/Tables/Part3Number10'
import Part3Number11 from '../components/Tables/Part3Number11'
import Part4Number1 from '../components/Tables/Part4Number1'
import Part4Number2 from '../components/Tables/Part4Number2'
import Part4Number3 from '../components/Tables/Part4Number3'
import Part4Number4 from '../components/Tables/Part4Number4'
import Part4Number5 from '../components/Tables/Part4Number5'
import Part4Number6 from '../components/Tables/Part4Number6'
import { useLocation } from 'react-router-dom'


import { useReactToPrint } from 'react-to-print';

const StudentsDashboard = () => {



  
  const [selectedBox, setSelectedBox] = useState(null);
  const componentRefs = {
    allData: useRef(),
    ageData: useRef(),
    genderData: useRef(),
    civilData: useRef(),
    ethnicityData: useRef(),
    numOfChildData: useRef(),
    ageRangeData: useRef(),
    highestEducData: useRef(),
    employmentStatData: useRef(),
    mositionData: useRef(),
    monthlyData: useRef(),
    placeData: useRef(),
    accuNumberData: useRef(),
    personalExData: useRef(),
    part2AData: useRef(),
    part2BData: useRef()

  };

  const handlePrint = useReactToPrint({
    content: () => componentRefs[selectedBox].current,
    documentTitle: 'EmployeeChartsPDF',
    onAfterPrint: () => alert('Print PDF closed'),
  });

  const handleBoxSelect = (box) => {
    setSelectedBox(box);
  };
  const handleAllDataSelect = (event) => {
    if (event.target.checked) {
      setSelectedBox('allData');
    } else {
      setSelectedBox(null);
    }
  };




























  const {admin} = useSelector((state) => state.admin)
  const {affiliation, superAdmin} = admin

  
  const no_underscore_affiliation = affiliation.replace(/_/g, " ")
  const getCategory = affiliation.split("_")[1]


  const [getTotal, setGetTotal] = useState()
  const [loading, setLoading] = useState(true)
  const [ageData, setAgeData] = useState([])
  const [genderData, setGenderData] = useState([])
  const [civilData, setCivilData] = useState([])
  const [ethnicityData, setEthnicityData] = useState([])
  const [noofchildData, setNoofchildData] = useState([])
  const [ageofchildData, setAgeofchildData] = useState([])
  const [educationData, setEducationData] = useState([])
  const [spouseData, setSpouseData] = useState([])
  const [positionData, setPositionData] = useState([])
  const [placeData, setPlaceData] = useState([])
  const [yearsData, setYearsData] = useState([])
  const [salaryData, setSalaryData] = useState([])
  const [ethnicityothersData, setEthnicityothersData] = useState([])

  useEffect(() =>{
    setLoading(true)

    const getTotal = async () =>{
      try {
        if(superAdmin === false){

          const res = await publicRequest.get(`/completed/getTotalAffiliation?category=students`)
          console.log(res.data)


          setGetTotal(res.data)

        }else if(superAdmin === true){
          const res = await publicRequest.get(`/completed/getTotalAffiliation?affiliate=${affiliation}`)

          const getAge = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=1&category=students&part=part1`)
          console.log(getAge.data)
          setAgeData(getAge.data)

          const getGender = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=2&category=students&part=part1`)
          setGenderData(getGender.data)

          const getCivil = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=4&category=students&part=part1`)
          setCivilData(getCivil.data)

          const getEthnicity = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=5&category=students&part=part1`)
          setEthnicityData(getEthnicity.data)

          const getNoofchild = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=6&category=students&part=part1`)
          setNoofchildData(getNoofchild.data)

          const getAgeofchild = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=7&category=students&part=part1`)
          setAgeofchildData(getAgeofchild.data)

          const getEducation = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=8&category=students&part=part1`)
          setEducationData(getEducation.data)

          const getSpouse = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=10&category=students&part=part1`)
          setSpouseData(getSpouse.data)

          const getPlace = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=12&category=students&part=part1`)
          setPlaceData(getPlace.data)

          const getPosition = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=13&category=students&part=part1`)
          setPositionData(getPosition.data)

          const getSalary = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=15&category=students&part=part1`)
          setSalaryData(getSalary.data)

          const getYears = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=16&category=students&part=part1`)
          setYearsData(getYears.data)

          const getEthnicityothers = await publicRequest.get(`/results/resultEssay?question_order=5&affiliate=ppsc_students&part=part1`)
          setEthnicityothersData(getEthnicityothers.data)


          setGetTotal(res.data)
        }
        setLoading(false)
      } catch (error) {
  
        setLoading(false)
      }
    }
    getTotal()
  },[setGetTotal, setAgeData, setGenderData, setCivilData, setEthnicityData, setNoofchildData, setAgeofchildData, setEducationData, setSpouseData, setPlaceData, setPositionData, setSalaryData, setYearsData, setEthnicityothersData])


  return (
    <Box sx={{display:'flex'}}>
      <Sidebar />
      <Box sx={{display:'flex', flex:6, flexDirection:'column'}}>
        <Navbar />

        
          <Button sx={{position: 'absolute', margin:2}}  onClick={handlePrint} variant="outlined"> 
              Print selected to PDF
          </Button>

          <Typography sx={{textAlign:'center'}}>PRINT ALL TO PDF</Typography>
          <Checkbox sx={{p:3}} checked={selectedBox === 'allData'} onChange={() => handleBoxSelect('allData')} />




        <Box sx={{display:'flex', flexWrap:'wrap', p:4, gap:4, alignItems:'center', justifyContent:'center' , flexDirection:'column', width: '100%'}}>
        <Typography variant='h3' color="black">STUDENTS DASHBOARD</Typography>
          {/* AGE */}
          <Box ref={componentRefs.ageData} sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}  >Age</Typography>
            <PieChartResults data={ageData} />
              <Checkbox checked={selectedBox === 'ageData'} onChange={() => handleBoxSelect('ageData')} />
          </Box>

          <Box ref={componentRefs.genderData} sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Gender</Typography>
            <PieChartResults data={genderData} />
              <Checkbox checked={selectedBox === 'genderData'} onChange={() => handleBoxSelect('genderData')} />
          </Box>

          <Box ref={componentRefs.civilData} sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Civil Status</Typography>
            <PieChartResults data={civilData} />
              <Checkbox checked={selectedBox === 'civilData'} onChange={() => handleBoxSelect('civilData')} />
          </Box>

          <Box ref={componentRefs.ethnicityData} sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Ethnicity</Typography>
            <BarChartResults data={ethnicityData} />
            
            <Accordion sx={{ width: '100%' }}>
              <AccordionSummary sx={{
                "&:hover": {
                  backgroundColor: "#797D7F",
                  color: "#fff"
                }
              }} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Others</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {ethnicityothersData.map((data) => (
                  <Typography sx={{borderBottom:1, borderColor:'gray', py:1}} key={data._id}>
                    {data.essay}  
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
            
              <Checkbox checked={selectedBox === 'ethnicityData'} onChange={() => handleBoxSelect('ethnicityData')} />
          </Box>

          <Box ref={componentRefs.numOfChildData} sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Number of Children</Typography>
            <PieChartResults data={noofchildData} />
              <Checkbox checked={selectedBox === 'numOfChildData'} onChange={() => handleBoxSelect('numOfChildData')} />
          </Box>

          <Box ref={componentRefs.ageRangeData} sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Age Range of Children</Typography>
            <BarChartResults data={ageofchildData} />
              <Checkbox checked={selectedBox === 'ageRangeData'} onChange={() => handleBoxSelect('ageRangeData')} />
          </Box>

          <Box ref={componentRefs.highestEducData} sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Highest Educational Attainment</Typography>
            <PieChartResults data={educationData} />
            <Checkbox checked={selectedBox === 'highestEducData'} onChange={() => handleBoxSelect('highestEducData')} />
          </Box>

          <Box ref={componentRefs.employmentStatData} sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Employment Status of Spouse</Typography>
            <PieChartResults data={spouseData} />
              <Checkbox checked={selectedBox === 'employmentStatData'} onChange={() => handleBoxSelect('employmentStatData')} />
          </Box>

          <Box ref={componentRefs.positionData} sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Rank/ Position Title</Typography>
            <BarChartResults data={positionData} />
            
              <Checkbox checked={selectedBox === 'positionData'} onChange={() => handleBoxSelect('positionData')} />
          </Box>

          <Box ref={componentRefs.monthlyData} sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Monthly Salary Bracket</Typography>
            <BarChartResults data={salaryData} />
            <Checkbox checked={selectedBox === 'monthlyData'} onChange={() => handleBoxSelect('monthlyData')} />
          </Box>

          <Box ref={componentRefs.placeData} sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Place of Assignment</Typography>
            <BarChartResults data={placeData} />
            
              <Checkbox checked={selectedBox === 'placeData'} onChange={() => handleBoxSelect('placeData')} />
          </Box>

          <Box ref={componentRefs.accuNumberData} sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Accumulated Number of Years in Government Service</Typography>
            <PieChartResults data={yearsData} />
              <Checkbox checked={selectedBox === 'accuNumberData'} onChange={() => handleBoxSelect('accuNumberData')} />
          </Box>


          <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 2</Typography>
          <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>

          <Box ref={componentRefs.personalExData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2', width:'100%'}}>
          <Typography variant="h6" fontWeight={700}  >Personal Experience</Typography>
          <PersonalExperienceTable/>

          <Typography variant="h6" fontWeight={700}  >Beliefs, Opinions and Thoughts</Typography>
            <BeliefsTable /> 
            <Checkbox checked={selectedBox === 'personalExData'} onChange={() => handleBoxSelect('personalExData')} />
          </Box>

          <Box ref={componentRefs.part2AData} sx={{display:'flex', flexDirection:'column', gap:1, py:2, boxShadow:3, alignItems:'center', backgroundColor:'#E5E4E2', width:'100%'}}>
            <Typography variant="h6" fontWeight={700}  >PART II A</Typography>
            <Part3Number1 />
            <Part3Number2 />
            <Part3Number3 />
            <Part3Number4 />
            <Part3Number5 />
            <Part3Number6 />
            <Part3Number7 />
            <Part3Number8 />
            <Part3Number9 />
            <Part3Number10 />
            <Part3Number11 />
            
            <Checkbox checked={selectedBox === 'part2AData'} onChange={() => handleBoxSelect('part2AData')} />
          </Box>

          <Box ref={componentRefs.part2BData} sx={{display:'flex', flexDirection:'column', gap:1, py:2, boxShadow:3, alignItems:'center', backgroundColor:'#E5E4E2', width:'100%'}}>
            <Typography variant="h6" fontWeight={700}  >PART II B</Typography>
            <Part4Number1 />
            <Part4Number2 />
            <Part4Number3 />
            <Part4Number4 />
            <Part4Number5 />
            <Part4Number6 />
            
            <Checkbox checked={selectedBox === 'part2BData'} onChange={() => handleBoxSelect('part2BData')}/>
          </Box>

        </Box>

        <Box sx={{ display:'flex', width:'100%', height:'100%', justifyContent:'center', flexDirection:'column', gap: 2 }}>

        

        </Box>
      </Box>
    </Box>
  )
}

export default StudentsDashboard