import React from 'react'
import brainimg from '../assets/image.png'
import { Link } from 'react-router-dom'
import '../Pages/Landingpage.css'
import './Header.css'

function Title() {
  return (
    <Link className='titllink' to={''}>
        <div className='title d-flex gap-1 justify-content-center '>
    
                <h1 className='fw-bold' >CampusCracker</h1>
                <img  className='my-2' src={brainimg} alt="" width={30} height={30} />
    
           </div>
    </Link>
  )
}

export default Title