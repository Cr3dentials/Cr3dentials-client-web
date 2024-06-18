import Footer from '@/components/Layout/Footer'
//import React from 'react'
import { Outlet } from 'react-router-dom'

const index = () => {
  return (
    <div className="min-h-screen relative">
      <Outlet />
      <Footer />
    </div>
  )
}

export default index
