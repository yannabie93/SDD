import { Box } from '@mui/material'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Anonymous from './components/Anonymous'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import FacultyDashboard from './pages/FacultyDashboard'
import StudentsDashboard from './pages/StudentsDashboard'
import EmployeesDashboard from './pages/EmployeesDashboard'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
              <Route element={<Anonymous />}>
                <Route path="/login" exact element={<Login />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="/" exact element={<Home />} />
                <Route path="/facultyDashboard" element={<FacultyDashboard />} />
                <Route path="/employeesDashboard" element={<EmployeesDashboard />} />
                <Route path="/studentsDashboard" element={<StudentsDashboard />} />







                {/* Single Dashboard */}
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>



              
        </Routes>


        <ToastContainer />
      </BrowserRouter>
      
    </Box>
  )
}

export default App