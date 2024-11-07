import React from 'react'
import { Link } from 'react-router-dom'
import learning from '../assets/learning.jpg'
import './Landingpage.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Landingpage() {
  return (
    <> 
    <Header/>
      <div className="container gap-5 d-flex align-items-center mb-3" >
        <div className="img">
          <img src={learning} alt="" height={'475px'} />
        </div>
        <div className="desc-btn">
          <p style={{fontSize:"25px",textAlign:'justify'}} className=''>CampusCracker is an innovative and comprehensive platform designed to revolutionize the way students prepare for campus placements and competitive exams. Tailored specifically for students of MES College of Engineering, Kuttipuram.</p>
          <Link to={'/login'} className='linkline'>
            <button className=' d-flex gap-3 align-items-center px-4 py-2 border-0 fw-semibold rounded-5'>
              Let's Crack It! 
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </Link>
        </div>
      </div>
      <Footer/>
    </> 
  )
}

export default Landingpage