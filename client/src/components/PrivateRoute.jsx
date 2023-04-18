import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
//import { useSelector } from 'react-redux'

const PrivateRoute = ({children, ...rest}) => {
  const USER = JSON.parse(localStorage.getItem('persist:root'))?.auth
  const currentUser = USER && JSON.parse(USER).currentUser

  return (
    currentUser ? <Outlet /> : <Navigate to="/login" replace />
  )

}

export default PrivateRoute