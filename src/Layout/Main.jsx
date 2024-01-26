import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Global/Footer/Footer';

export default function Main() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}
