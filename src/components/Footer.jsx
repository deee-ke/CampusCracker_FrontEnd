import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className='footer  py-5 justify-content-center d-flex  '> {/* py-padding Y axis ,JC-For alligning content only work with display flex(d-flex) */}
            <p className='m-0'>
               <span class="me-2"> &copy; 2024 Copyright:CampusCracker</span> 
                <i class="fa-solid fa-brain"></i>
            </p>
        </div>
        
    </div>
  )
}

export default Footer;