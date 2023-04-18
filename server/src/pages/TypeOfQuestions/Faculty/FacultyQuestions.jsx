import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../../components'
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from 'react-router-dom';
import { publicRequest } from '../../../utils/publicRequest';
import { useNavigate } from 'react-router-dom';


const FacultyQuestions = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const category = location.pathname.split('/')[1]

  console.log(category)
  

  const [moduleType, setModuleType] = useState('part1');
  
  const handleChange = (event) => {
    setModuleType(event.target.value);
  };

  const handleSearch = (e) =>{
      e.preventDefault();
     navigate(`/${category}/${moduleType}`)
  }

  

  return (
    <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
        <Box sx={{display:'flex', flex:.5}}>
          <Sidebar />
        </Box>
        <Box sx={{display:'flex', flex:2, p:4}}>
          <Box sx={{display:'flex', flexDirection:'column', gap:2, width: '100%'}}>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', width: '100%'}}> 
            <Typography variant='h5' color="text.disabled" sx={{fontWeight:"bold"}}>Faculty Questions</Typography>
            
            {/* <Link to={`/${pathname}/add`}>
              <Button variant='contained' color="success">Add New Question</Button>
            </Link> */}

            </Box>
            {/* <DataGrid
              {...questionData}
              rows={loading ? [] : questionData}
              columns={columns}
              loading={loading}
              getRowId={(row) => row.id1_question_student}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
            /> */}
            <form onSubmit={handleSearch}>
              <FormControl onSubmit={handleSearch} sx={{display:'flex', gap:1, flexDirection:'column'}} fullWidth>
                <InputLabel id="demo-simple-select-label">Modules</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  
                  value={moduleType}
                  label="Module"
                  onChange={handleChange}
                >
                  <MenuItem value="part1">Demographic Profile Of Respondents and Employment</MenuItem>
                  <MenuItem value="part2">Personal Experience, Beliefs, Opinions and Thoughts Part 1</MenuItem>
                  <MenuItem value="part3">Personal Experience, Beliefs, Opinions and Thoughts Part 2</MenuItem>
                  <MenuItem value="part4">Personal Experience, Beliefs, Opinions and Thoughts Part 3</MenuItem>
                </Select>
                <Button type="submit" variant="contained">View</Button>
              </FormControl>
            </form>
            


          </Box>
        </Box>
    </Box>
  )
}

export default FacultyQuestions