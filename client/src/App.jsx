import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Anonymous, PrivateRoute } from './components'
import { Homepage, Login, Survey } from './pages'
import Completed from './pages/Part1/Completed'
import Survey2 from './pages/Part1/Survey2'
import Survey3 from './pages/Part1/Survey3'
import Survey4 from './pages/Part1/Survey4'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <Box>
    <BrowserRouter>
      <Routes>

        {/* Not Login */}

        <Route element={<Anonymous />}>
          <Route path="/login" exact element={<Login />} />
        </Route >

        {/* Login */}
        <Route element={<PrivateRoute />}>
          <Route path="/" index element={<Homepage />} />
          
          <Route path="part1survey/:id">
            <Route index element={<Survey />} />
          </Route>
          
          <Route path="part2survey/:id">
            <Route index element={<Survey2 />} />
          </Route>

          <Route path="part3survey/:id">
            <Route index element={<Survey3 />} />
          </Route>

          <Route path="part4survey/:id">
            <Route index element={<Survey4 />} />
          </Route>

          <Route path="completed">
            <Route index element={<Completed />} />
          </Route>

          
        </Route>
        
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </Box>

  )
}

export default App