import React from 'react'
import './Home.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import GeneralApt from './GeneralApt'
import VerbalRsng from './VerbalRsng'
import OnlineTests from './OnlineTests'
import UserPopup from '../components/UserPopup'



function Home() {

  
  


  return (
    <>
    <Header/>
    <UserPopup/>
      <div className="home container my-5 " >

      

        <div className='row mt-5'>
          <div className="col-md-12 d-flex justify-content-center">
            
            <div class="mb-3 w-100 rounded-5 overflow-hidden  shadow" style={{backgroundColor:"white"}}>
              <div class="row g-0">
                <div class="col-md-5 ">
                  <img src="https://images.shiksha.com/mediadata/images/articles/1565072398phpMhDAk7.jpeg"  alt="... " className=' img-fluid'/>
                </div>
                <div class="col-md-7 text-start d-flex justify-content-center flex-column">
                  <div class="p-3 text-dark">
                    <h5 class="">General Aptitude</h5>
                    <p class="">The General Aptitude section of CampusCracker is a dynamic and interactive learning platform designed to sharpen students' problem-solving and analytical skills.</p>
                    {/* <p class="card-text"><small class="">Last updated 3 mins ago</small></p> */}
                    <GeneralApt/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='row mt-5'>
          <div className="col-md-12 d-flex justify-content-center">
            
            <div class="mb-3 w-100 rounded-5 overflow-hidden  shadow" style={{backgroundColor:"white"}}>
              <div class="row g-0">
                <div class="col-md-5 ">
                  <img src="https://www.jobtestsuccess.com/wp-content/uploads/2019/11/Inductive-Reasoning-Test-1.jpg"  alt="... " className=' img-fluid'/>
                </div>
                <div class="col-md-7 text-start d-flex justify-content-center flex-column">
                  <div class="p-3 text-dark">
                    <h5 class="">Verbal and Reasoning</h5>
                    <p class="">The Verbal Ability section of CampusCracker is designed to enhance students' language proficiency and communication skills, crucial for success in campus placements and competitive exams.</p>
                    {/* <p class="card-text"><small class="">Last updated 3 mins ago</small></p> */}
                    <VerbalRsng/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='row mt-5'>
          <div className="col-md-12 d-flex justify-content-center">
            
            <div class="mb-3 w-100 rounded-5 overflow-hidden  shadow" style={{backgroundColor:"white"}}>
              <div class="row g-0">
                <div class="col-md-5 ">
                  <img src="https://elearningindustry.com/wp-content/uploads/2017/12/5-advantages-of-online-mock-tests-1.png"  alt="... " className=' img-fluid'/>
                </div>
                <div class="col-md-7 text-start d-flex justify-content-center flex-column">
                  <div class="p-3 text-dark">
                    <h5 class="">Onlne Tests</h5>
                    <p class="">The Online Test section of CampusCracker offers a seamless and comprehensive platform for students to take timed assessments, mimicking real-world placement exams and competitive tests.</p>
                    {/* <p class="card-text"><small class="">Last updated 3 mins ago</small></p> */}
                    <OnlineTests/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Home