import React from 'react'
import {useState} from "react"
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  const [hover, setHover] = useState(true)
   function rollOver() {
    setHover(oldHover => !oldHover)
   }
    return(
        <>
        <nav>
            {hover &&<NavLink onClick={rollOver} className="lone" to='hero'>{hover ? "Home" : "Signup"}</NavLink>}
            {!hover &&<NavLink onClick={rollOver} className="lone"  to='signup'>{hover ? "Home" : "Signup"}</NavLink>}
        </nav>
        
        </>
    )
}