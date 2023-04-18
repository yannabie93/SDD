import { Box, Button, Checkbox, Typography } from '@mui/material'
import React, {useState, useEffect, useRef} from 'react'
import { faculty1Request, publicRequest } from '../../utils/publicRequest'
import { FacultyBarCharts, FacultyCharts, Sidebar, FacultyTables, FacultyTablesPart2, FacultyTablesPart3, FacultyTablesPart4, FacultyTablesPart5, FacultyTablesPart6 } from '../../components'
import { datatable, datatable1, datatable2, datatable3, datatable4, datatable5, datatable6, data, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12} from '../../utils/sampleData'

import { useReactToPrint } from 'react-to-print';

import FacultyTablesPersonal from '../../components/charts/faculty/FacultyTablesPersonal'
import FacultyTablesBeliefs from '../../components/charts/faculty/FacultyTablesBeliefs'
import FacultyTablesYesorNo from '../../components/charts/faculty/FacultyTablesYesorNo'


const FacultyDashboard = () => {

  
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
      personalExData: useRef()

    };
  
    const handlePrint = useReactToPrint({
      content: () => componentRefs[selectedBox].current,
      documentTitle: 'FacultyPDF',
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



    // const componentRef = useRef();
    // const handlePrint = useReactToPrint({
    //   content: ()=> componentRef.current,
    //   documentTitle: 'FacultyPDF',
    //   onAfterPrint: ()=> alert('Print Success!')
    // });

 

  
      const [ageData, setAgeData] = useState([])
      const [genderData, setGenderData] = useState([])
      const [civilData, setCivilData] = useState([])
      const [ethnicityData, setEthnicityData] = useState([])
      const [numofchildrenData, setNumofchildrenData] = useState([])
      const [agerangeofchildrenData, setAgerangeofchildrenData] = useState([])
      const [highesteducData, setHighesteducData] = useState([])
      const [spousestatusData, setSpousestatusData] = useState([])
      const [positionData, setPositionData] = useState([])
      const [salaryData, setSalaryData] = useState([])
      const [placeData, setPlaceData] = useState([])
      const [yearsData, setYearsData] = useState([])

      
      
     

      const [loading,setLoading] = useState(false)

      useEffect(() =>{  
        setLoading(true)
        const GetAllData = async (req,res) =>{
          try {
            
            const getAgeData = await faculty1Request.get('/getAges?age=1')
            console.log("Hello")
            setAgeData(getAgeData.data)

            //Gender
            const getGender = await faculty1Request.get('/getGender?gender=2')
            setGenderData(getGender.data)

            //Civil
            const getCivil = await faculty1Request.get('/getCivil?civil=4')
            setCivilData(getCivil.data)

            //Ethnicity
            const getEthnicity = await faculty1Request.get('/getEthnicity?ethnicity=5')
            setEthnicityData(getEthnicity.data)

            //Number of Children
            const getNumofchildren = await faculty1Request.get('/getNumofchildren?numofchildren=6')
            setNumofchildrenData(getNumofchildren.data)

            //Age Range of Children
            const getAgerangeofchildren = await faculty1Request.get('/getAgerangeofchildren?agerangeofchildren=7')
            setAgerangeofchildrenData(getAgerangeofchildren.data)

            //Age Highest Educational Attainment
            const getHighesteduc = await faculty1Request.get('/getHighesteduc?highesteduc=8')
            setHighesteducData(getHighesteduc.data)

            //Spouse Status
            const getSpousestatus = await faculty1Request.get('/getSpousestatus?spousestatus=10')
            setSpousestatusData(getSpousestatus.data)

            //Position Status
            const getPosition = await faculty1Request.get('/getPosition?position=13')
            setPositionData(getPosition.data)

           //Monthly Salary Bracket
           const getSalary = await faculty1Request.get('/getSalary?salary=15')
           setSalaryData(getSalary.data)

           //Place of Assignment
           const getPlace = await faculty1Request.get('/getPlace?place=12')
           setPlaceData(getPlace.data)

           //Number of accumulated  years
           const getYears = await faculty1Request.get('/getYears?years=16')
           setYearsData(getYears.data)

           //TABLE


            setLoading(false)
          } catch (error) {
            console.log(error)
            setLoading(false)

          }
        }
        GetAllData()

      },[setAgeData])
  return (
    <Box sx={{display:'flex', flexDirection:'row', gap:1, height: '100%', width:'100%'}}>
        <Box sx={{display:'flex', flex:.5}}>
          <Sidebar />
        </Box>
        
        <Box sx={{display:'flex', flex:2, p:4, flexDirection:'column', height:'100%', width:'100%', position: 'relative'}} >
          
            <Button sx={{position: 'absolute'}}  onClick={handlePrint} variant="outlined"> 
            Print selected to PDF
            </Button>
            

            <Typography variant='h3' color="black" fontWeight={700} sx={{ display:'flex', justifyContent:'center'}}>FACULTY REPORTS</Typography>
            <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 1</Typography>
            <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>
            <Box sx={{ display:'flex', p:4, flexDirection:'column',height: '100%', width: '100%', alignItems:'center',justifyContent:'space-between' }}>
              <Typography sx={{position:'absolute', p:1}}>PRINT ALL TO PDF</Typography>
            <Checkbox sx={{p:4}} checked={selectedBox === 'allData'} onChange={() => handleBoxSelect('allData')} />

                <Box ref={componentRefs.allData} sx={{height:'400px', width:'100%', flexDirection:'column', display:'flex', gap:2}}>


                   <Box ref={componentRefs.ageData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Age</Typography>
                      <FacultyCharts data={ageData}/>
                      <Checkbox checked={selectedBox === 'ageData'} onChange={() => handleBoxSelect('ageData')} />
                   </Box>

                   <Box ref={componentRefs.genderData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Sex assigned at birth</Typography>
                      <FacultyCharts data={genderData}/>
                      <Checkbox checked={selectedBox === 'genderData'} onChange={() => handleBoxSelect('genderData')} />
                   </Box>

                   <Box ref={componentRefs.civilData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2' }}>
                    <Typography variant="h6" fontWeight={700}  >Civil Status</Typography>
                      <FacultyCharts data={civilData}/>
                      <Checkbox checked={selectedBox === 'civilData'} onChange={() => handleBoxSelect('civilData')} />
                   </Box>

                   <Box ref={componentRefs.ethnicityData} sx={{ display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Ethnicity</Typography>
                      <FacultyBarCharts data={ethnicityData}/>
                      <Checkbox checked={selectedBox === 'ethnicityData'} onChange={() => handleBoxSelect('ethnicityData')} />
                   </Box>

                   <Box ref={componentRefs.numOfChildData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Number of Children</Typography>
                      <FacultyCharts data={numofchildrenData}/>
                      <Checkbox checked={selectedBox === 'numOfChildData'} onChange={() => handleBoxSelect('numOfChildData')} />
                   </Box>

                   <Box ref={componentRefs.ageRangeData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Age Range of Children</Typography>
                      <FacultyBarCharts data={agerangeofchildrenData}/>
                      <Checkbox checked={selectedBox === 'ageRangeData'} onChange={() => handleBoxSelect('ageRangeData')} />
                   </Box>

                   <Box ref={componentRefs.highestEducData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Highest Educational Attainment</Typography>
                      <FacultyCharts data={highesteducData}/>
                      <Checkbox checked={selectedBox === 'highestEducData'} onChange={() => handleBoxSelect('highestEducData')} />
                   </Box>

                   <Box ref={componentRefs.employmentStatData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Employment Status of Spouse/Partner</Typography>
                      <FacultyCharts data={spousestatusData}/>
                      <Checkbox checked={selectedBox === 'employmentStatData'} onChange={() => handleBoxSelect('employmentStatData')} />
                   </Box>

                   <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Employment</Typography>

                   {/* <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Employment Status </Typography>
                      <FacultyCharts data={data8}/>
                   </Box> */}

                   <Box ref={componentRefs.positionData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Position</Typography>
                      <FacultyBarCharts data={positionData}/>
                      <Checkbox checked={selectedBox === 'positionData'} onChange={() => handleBoxSelect('positionData')} />
                   </Box>

                   <Box ref={componentRefs.monthlyData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Monthly Salary Bracket</Typography>
                      <FacultyBarCharts data={salaryData}/>
                      <Checkbox checked={selectedBox === 'monthlyData'} onChange={() => handleBoxSelect('monthlyData')} />
                   </Box>

                   <Box ref={componentRefs.placeData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Place of Assignment</Typography>
                      <FacultyBarCharts data={placeData}/>
                      <Checkbox checked={selectedBox === 'placeData'} onChange={() => handleBoxSelect('placeData')} />
                   </Box>  

                   <Box ref={componentRefs.accuNumberData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Accumulate Number of Years</Typography>
                      <FacultyCharts data={yearsData}/>
                      <Checkbox checked={selectedBox === 'accuNumberData'} onChange={() => handleBoxSelect('accuNumberData')} />
                   </Box>

                   <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 2</Typography>
                   <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>

                   <Box ref={componentRefs.personalExData} sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Personal Experience</Typography>
                      <FacultyTablesPersonal/>

                    <Typography variant="h6" fontWeight={700}  >Beliefs, Opinions and Thoughts</Typography>
                    <FacultyTablesBeliefs />
                    <Checkbox checked={selectedBox === 'personalExData'} onChange={() => handleBoxSelect('personalExData')} />
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                   <Typography variant="h6" fontWeight={700}  >PART II A</Typography>
                    <FacultyTablesYesorNo/>
                   </Box>
{/* 
                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <FacultyTablesPart3 data={datatable3}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <FacultyTablesPart4 data={datatable4}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <FacultyTablesPart5 data={datatable5}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                   <Typography variant="h6" fontWeight={700}  >PART II B</Typography>
                    <FacultyTablesPart6 data={datatable6}/>
                   </Box> */}

                </Box> 
                
                
                

            </Box>

        </Box>
        
    </Box>
  )
}


export default FacultyDashboard