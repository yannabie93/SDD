import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
//import { useSelector } from 'react-redux'

const Protected = ({children, ...rest}) => {
  const admin = JSON.parse(localStorage.getItem('persist:root'))?.admin
  const currentAdmin = admin && JSON.parse(admin).admin
  return (
    currentAdmin ? <Outlet /> : <Navigate to="/login" replace />
  )

}

export default Protected