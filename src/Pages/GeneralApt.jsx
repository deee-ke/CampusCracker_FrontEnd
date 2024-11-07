import React from 'react'
import pot from '../assets/pot.jpg'
import proloss from '../assets/proloss.jpg'
// Modal imports
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
// import OnlineArithApt from '../Sections/OnlineArithApt';



function GeneralApt() {

 // For Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const datas = [
    {
      imgSrc:pot,
      route:'/generalqns',
      routeName:'Problems on Train',
      formulaRoute:'/potformulas',
      formulaName:'Problems On Train - Formulas',
      section_name:'Arithmetic_aptitude',
      category:'PoT'
    },
    {
      imgSrc:proloss,
      route:'/generalqns',
      routeName:'Profit and Loss',
      section_name:'Arithmetic_aptitude',
      category:'ProfitLoss'
    },
    {
      route:'/generalqns',
      routeName:'Problems on Ages',
      section_name:'Arithmetic_aptitude',
      category:'ProblemsAges'
    },
    {
      route:'/generalqns',
      routeName:'Time and works',
      section_name:'Arithmetic_aptitude',
      category:'TimeWorks'
    },
    {
      route:'/generalqns',
      routeName:'Height and Distance',
      section_name:'Arithmetic_aptitude',
      category:'HeightDistance'
    }                
]
  

  return (
    <>
    {/* Modal */}
    <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>General Aptitude</Modal.Title>
        </Modal.Header>
        <div className='d-flex '> 
          <Modal.Body>
           <div className='d-flex justify-content-evenly mb-3'>
              Arithmetic Aptitude
              <Link to={'/arithmetic'} state={{data:datas}}><Button className='rounded-5' variant="primary" >Try now!</Button></Link>
           </div>

           <div className='d-flex justify-content-evenly mb-3'>
              Online Aptitude Test
              <Link to={'/arithtest'} state={{data:datas}}><Button className='rounded-5' variant="primary" >Try now!</Button></Link>
           </div>

          </Modal.Body>
        </div>
      </Modal>
        <div>
            <button onClick={handleShow} className='btn-info border-0 rounded-5 px-3 py-2 fw-semibold '>Show more...</button>
        </div>
    </>
  )
}

export default GeneralApt