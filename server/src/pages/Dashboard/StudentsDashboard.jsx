import { Box, Typography } from '@mui/material'
import React from 'react'
import { StudentsBarCharts, StudentsCharts, Sidebar, StudentsTables, StudentsTablesPart2, StudentsTablesPart3, StudentsTablesPart4, StudentsTablesPart5, StudentsTablesPart6 } from '../../components'
import { datatable, datatable1, datatable2, datatable3, datatable4, datatable5, datatable6, data, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12} from '../../utils/sampleData'


const StudentsDashboard = () => {
      
  return (
    <Box sx={{display:'flex', flexDirection:'row', gap:1, height: '100%', width:'100%'}}>
        <Box sx={{display:'flex', flex:.5}}>
          <Sidebar />
        </Box>

        <Box sx={{display:'flex', flex:2, p:4, flexDirection:'column', height:'100%', width:'100%'}} >

            <Typography variant='h3' color="black" fontWeight={700} sx={{ display:'flex', justifyContent:'center'}}>STUDENTS REPORTS</Typography>
            <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 1</Typography>
            <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>
            <Box sx={{ display:'flex', p:4, flexDirection:'column',height: '100%', width: '100%', alignItems:'center',justifyContent:'space-between' }}>

                <Box sx={{height:'400px', width:'100%', flexDirection:'column', display:'flex', gap:2}}>
                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Age</Typography>
                      <StudentsCharts data={data}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Sex assigned at birth</Typography>
                      <StudentsCharts data={data1}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2' }}>
                    <Typography variant="h6" fontWeight={700}  >Civil Status</Typography>
                      <StudentsCharts data={data2}/>
                   </Box>

                   <Box sx={{ display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Ethnicity</Typography>
                      <StudentsBarCharts data={data3}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Number of Children</Typography>
                      <StudentsCharts data={data4}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Age Range of Children</Typography>
                      <StudentsBarCharts data={data5}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Highest Educational Attainment</Typography>
                      <StudentsCharts data={data6}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Employment Status of Spouse/Partner</Typography>
                      <StudentsCharts data={data7}/>
                   </Box>

                   <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Employment</Typography>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Employment Status </Typography>
                      <StudentsCharts data={data8}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Position</Typography>
                      <StudentsBarCharts data={data9}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Monthly Salary Bracket</Typography>
                      <StudentsBarCharts data={data10}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Place of Assignment</Typography>
                      <StudentsBarCharts data={data11}/>
                   </Box>  

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Accumulate Number of Years</Typography>
                      <StudentsCharts data={data12}/>
                   </Box>

                   <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 2</Typography>
                   <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Personal Experience</Typography>
                      <StudentsTables data={datatable}/>

                    <Typography variant="h6" fontWeight={700}  >Beliefs, Opinions and Thoughts</Typography>
                    <StudentsTables data={datatable1}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                   <Typography variant="h6" fontWeight={700}  >PART II A</Typography>
                    <StudentsTablesPart2 data={datatable2}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <StudentsTablesPart3 data={datatable3}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <StudentsTablesPart4 data={datatable4}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <StudentsTablesPart5 data={datatable5}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                   <Typography variant="h6" fontWeight={700}  >PART II B</Typography>
                    <StudentsTablesPart6 data={datatable6}/>
                   </Box>

                </Box> 
                
                
                

            </Box>

        </Box>
        
    </Box>
  )
}


export default StudentsDashboard