import { useState } from 'react'

import Navbar from "@/components/custom/Navbar"

import Footer from "@/components/custom/Footer"
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Home/>
  <Footer/>
    </>
  )
}

export default App
