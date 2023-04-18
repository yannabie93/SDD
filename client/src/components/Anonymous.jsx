import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
//import { useSelector } from 'react-redux'

const Anonymous  = ({children, ...rest}) => {
  const USER = JSON.parse(localStorage.getItem('persist:root'))?.auth
  const currentUser = USER && JSON.parse(USER).currentUser

  return (
    currentUser ? <Navigate to="/" replace /> : <Outlet /> 
  )

}

export default Anonymous 