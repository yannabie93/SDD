import { Box } from '@mui/material'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Anonymous, PrivateRoute } from './components';

import EditFacultyQuestion from './pages/TypeOfQuestions/Faculty/EditFacultyQuestion';
import EditStudentQuestion from './pages/TypeOfQuestions/Students/EditStudentQuestion';
import { AddChoice, AddEmployeeChoice, AddStudentQuestion, AddStudentChoice , AddFacultyChoice, AddFacultyQuestion, EmployeeQuestions, Home, Login, Part1Employee, Part1Student, Part2Employee, Part2Student, Part3Employee, Part3Student, Part4Employee, Part4Student, StudentQuestions, FacultyQuestions, Part1Faculty, Part2Faculty, Part3Faculty, Part4Faculty, EditEmployeeQuestion, AddEmployeeQuestion, EmployeesDashboard, FacultyDashboard, StudentsDashboard, StudentsUser, FacultyUser, EmployeesUser } from './pages'
import AddUser from './pages/Users/AddUser';
import EditUser from './pages/Users/EditUser';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

//Updated this

const App = () => {

  return (
    <Box>
        <BrowserRouter>
          <Routes>
            
            <Route element={<Anonymous />}>
              <Route path="/login" exact element={<Login />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/">
                <Route index element={<Home />} />


                <Route path="studentsUsers">
                  <Route index element={<StudentsUser />} />
                  <Route path="add" element={<AddUser />} />
                  <Route path="edit/:id" element={<EditUser />} />
                </Route>
                

                <Route path="facultyUsers">
                  <Route index element={<FacultyUser />} />
                  <Route path="add" element={<AddUser />} />
                  <Route path="edit/:id" element={<EditUser />} />
                </Route>

               <Route path="employeesUsers">
                  <Route index element={<EmployeesUser />}/>
                  <Route path="add" element={<AddUser />} />
                  <Route path="edit/:id" element={<EditUser />} />
               </Route>

               



                  {/* <Route element={<QuestionList />} /> */}
                  <Route path="students" element={<StudentQuestions />} >
                    
                  

                  </Route>

                  <Route path="employee" element={<EmployeeQuestions />} ></Route>
                  
                
                  {/* <Route path="add" element={<AddQuestion />} /> */}

                  <Route path="employeesQuestion" >
                      <Route index element={<EmployeeQuestions />} />

                      <Route path="part1">
                          <Route index element={<Part1Employee />}/>
                          <Route path="add" element={<AddEmployeeQuestion />} />
                          <Route path="choice/:id" element={<AddEmployeeChoice />} />
                          <Route path="edit/:id" element={<EditEmployeeQuestion />} />
                      </Route>

                      <Route path="part2">
                          <Route index element={<Part2Employee />}/>
                          <Route path="add" element={<AddEmployeeQuestion />} />
                          <Route path="choice/:id" element={<AddEmployeeChoice />} />
                          <Route path="edit/:id" element={<EditEmployeeQuestion />} />
                      </Route>

                      <Route path="part3">
                          <Route index element={<Part3Employee />}/>
                          <Route path="add" element={<AddEmployeeQuestion />} />
                          <Route path="choice/:id" element={<AddEmployeeChoice />} />
                          <Route path="edit/:id" element={<EditEmployeeQuestion />} />
                      </Route>

                      <Route path="part4">
                          <Route index element={<Part4Employee />}/>
                          <Route path="add" element={<AddEmployeeQuestion />} />
                          <Route path="choice/:id" element={<AddEmployeeChoice />} />
                          <Route path="edit/:id" element={<EditEmployeeQuestion />} />
                      </Route>
                      
                  </Route>

                  {/* Student */}
                  <Route path="studentsQuestion" >
                      <Route index element={<StudentQuestions />} />

                      <Route path="part1">
                          <Route index element={<Part1Student />}/>
                          <Route path="add" element={<AddStudentQuestion />} />
                          <Route path="choice/:id" element={<AddStudentChoice />} />
                          <Route path="edit/:id" element={<EditStudentQuestion />} />
                      </Route>

                      <Route path="part2">
                          <Route index element={<Part2Student />}/>
                          <Route path="add" element={<AddStudentQuestion />} />
                          <Route path="choice/:id" element={<AddStudentChoice />} />
                          <Route path="edit/:id" element={<EditStudentQuestion />} />
                      </Route>

                      <Route path="part3">
                          <Route index element={<Part3Student />}/>
                          <Route path="add" element={<AddStudentQuestion />} />
                          <Route path="choice/:id" element={<AddStudentChoice />} />
                          <Route path="edit/:id" element={<EditStudentQuestion />} />
                      </Route>

                      <Route path="part4">
                          <Route index element={<Part4Student />}/>
                          <Route path="add" element={<AddStudentQuestion />} />
                          <Route path="choice/:id" element={<AddStudentChoice />} />
                          <Route path="edit/:id" element={<EditStudentQuestion />} />
                      </Route>
                  </Route>

                  {/* Faculty */}
                  <Route path="facultyQuestion" >
                      <Route index element={<FacultyQuestions />} />

                      <Route path="part1">
                          <Route index element={<Part1Faculty />}/>
                          <Route path="add" element={<AddFacultyQuestion />} />
                          <Route path="choice/:id" element={<AddFacultyChoice />} />
                          <Route path="edit/:id" element={<EditFacultyQuestion />} />
                      </Route>

                      <Route path="part2">
                          <Route index element={<Part2Faculty />}/>
                          <Route path="add" element={<AddFacultyQuestion />} />
                          <Route path="choice/:id" element={<AddFacultyChoice />} />
                          <Route path="edit/:id" element={<EditFacultyQuestion />} />
                      </Route>

                      <Route path="part3">
                          <Route index element={<Part3Faculty />}/>
                          <Route path="add" element={<AddFacultyQuestion />} />
                          <Route path="choice/:id" element={<AddFacultyChoice />} />
                          <Route path="edit/:id" element={<EditFacultyQuestion />} />
                      </Route>

                      <Route path="part4">
                          <Route index element={<Part4Faculty />}/>
                          <Route path="add" element={<AddFacultyQuestion />} />
                          <Route path="choice/:id" element={<AddFacultyChoice />} />
                          <Route path="edit/:id" element={<EditFacultyQuestion />} />
                      </Route>
                  </Route>

                    {/* Students Dashboard */}
                  <Route path="studentsDashboard" >
                    <Route index element={<StudentsDashboard /> }/>
                  </Route>


                    {/* Employees Dashboard */}
                  <Route path="employeesDashboard" >
                    <Route index element={<EmployeesDashboard /> }/>
                  </Route>


                  {/* Faculty Dashboard */}
                  <Route path="facultyDashboard" >
                    <Route index element={<FacultyDashboard /> }/>
                  </Route>


              </Route>


            </Route>
          </Routes>
          <ToastContainer />

        </BrowserRouter>
    </Box>
  );
};

export default App;
