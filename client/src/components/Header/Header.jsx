import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Header.css"

const Header = () => {

  const navigate=useNavigate()
  return (
      <div><header className='header'>
          <div className='logo' onClick={()=>navigate('/')}>
             Eqaim Blog
          </div>
    </header></div>
  )
}

export default Header