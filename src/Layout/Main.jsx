import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Global/Footer/Footer';
import Header from '../pages/Global/Header/Header';

export default function Main() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}