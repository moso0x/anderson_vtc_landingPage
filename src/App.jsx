import { useState } from 'react'

import Navbar from "@/components/custom/Navbar"
import { Route,  BrowserRouter, Routes } from 'react-router-dom'
import Footer from "@/components/custom/Footer"
import Home from './pages/Home'
import About from './pages/About'
import Admissions from './pages/Admissions'
import Students from './pages/Students'
import Programmes from './pages/Programmes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/admissions" element={<Admissions/>}/>
    <Route path="/students" element={<Students/>}/>
    <Route path="/programmes" element={<Programmes/>}/>
  </Routes>


 
  <Footer/>
    </>
  )
}

export default App
