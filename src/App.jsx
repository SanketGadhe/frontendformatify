import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './pages/projects'
import Conference from './pages/conference'
import LandinPage from './pages/landingpage'
import Templates from './pages/templates'
import Navbar from './components/navbar'
import Premium from './pages/premium'
import Login from './pages/login'
import Payment from './pages/payment'
import Exist from './pages/exist'
import Restructure from './pages/restructure'
import Dashbord from './pages/dashbord'
import Footer from './components/footer'
import { Link } from 'react-router-dom'

function App() {

 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandinPage />} />
          <Route path='/premium' element={<Premium />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/templates' element={<Templates />} />
          <Route path='/conference' element={<Conference />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashbord' element={<Dashbord />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/exist' element={<Exist />} />
          <Route path='/restructure' element={<Restructure />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  )
}

export default App
