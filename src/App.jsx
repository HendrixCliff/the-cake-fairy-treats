import React from "react"
import Hero from "./Hero.jsx"
import SignUp from "./components/Signup.jsx"
import TermsOfUse from "./components/TermsOfUse.jsx"
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import { useState } from 'react'
import Confetti from 'react-confetti'
// import CakeFairy from "./components/CakeFairy.jsx"



function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggle() {
    setDarkMode(prevDarkMode => !prevDarkMode)
}

  return (
    <>
      <div>
        <Confetti/> 
        <Navbar/>
        <Routes>
          <Route path="hero" element={<Hero resolver={toggle} moody={darkMode}/>}>
              <Route path="terms" element={<TermsOfUse/>}/>
          </Route>
          <Route path="signup" element={<SignUp  moody={darkMode}/>}/>
        </Routes>
      
        
        
      </div>
    </>
  )
}

export default App
