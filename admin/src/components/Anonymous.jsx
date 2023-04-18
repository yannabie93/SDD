import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const Anonymous = () => {
  const admin = JSON.parse(localStorage.getItem('persist:root'))?.admin
  const currentAdmin = admin && JSON.parse(admin).admin
  
    return (
      currentAdmin ? <Navigate to="/" replace /> : <Outlet />
    )
}

export default Anonymous