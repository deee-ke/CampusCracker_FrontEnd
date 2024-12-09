import React from 'react'
import './Footer.css'
import footLogo from '../assets/footLogo.png'

function Footer() {
  return (
    <div>
        <div className='footer  py-5 justify-content-center d-flex  '> {/* py-padding Y axis ,JC-For alligning content only work with display flex(d-flex) */}
            
          <div className="foot-icon d-flex align-items-center">
            <img src={footLogo} alt="" />
          </div>

          <div className="foot-credits">
            
              <span className='brandname'>CampusCracker</span> © 2025<br /><span className='credits'>All rights reserved. Built with React.</span>
            
          </div>

        </div>
        
    </div>
  )
}

export default Footer;