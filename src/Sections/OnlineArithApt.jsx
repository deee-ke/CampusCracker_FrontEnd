import React from 'react'

import { Link, useLocation } from 'react-router-dom'
// Modal imports
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

function OnlineArithApt() {

  const passedData = useLocation().state?.data

  const clearSession = () =>{
    sessionStorage.removeItem("examCompleted")
  } 

  // console.log(passedData);

    // For Modal
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  return (
    // <div className='container mt-5'>
      
      
    //   <div className='d-flex justify-content-evenly mb-3'>
    //           Online Aptitude Test
    //       <Link onClick={handleShow}><Button className='rounded-5' variant="primary" >Try now!</Button></Link>
    //   </div>
    
    //   <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
    //     <Modal.Header closeButton >
    //       <Modal.Title>General Aptitude Exam</Modal.Title>
    //     </Modal.Header>
    //     <div className=''> 
    //       <Modal.Body>
    //        <p>This Test consist of 10 Questions</p>
    //        <p>You need to secure 65% or more to pass this test.</p>
    //        <p>Test duration will be 10 minutes.</p>
    //       </Modal.Body>
    //       <Modal.Footer className='d-flex justify-content-center'>
    //         <Link to={'/generalexam'}><Button className='rounded-4'>Start Your Test</Button></Link>
    //       </Modal.Footer>
    //     </div>
    //   </Modal>

    // </div>

    <div className='container my-5'>
      {/* pot card (stretched link) */}
      <div className="pot mb-5">
      {passedData?.length>0?
        passedData.map((item)=>(
          <div class="d-flex position-relative my-5">
          <img className='' style={{borderRadius:'15px'}} width={125} src={item.imgSrc} class="flex-shrink-0 me-3" alt="..."/>
          <div>
            <h5 class="mt-0">{item.routeName}</h5>
            <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
            <Link to={'/generalexam'} onClick={clearSession} state={{data:[
            {
              section_name:item.section_name,
              category:item.category,
              routeName:item.routeName,
              route:item.route,
              formulaName:item.formulaName,
              formulaRoute:item.formulaRoute
            }
            ]}} className='stretched-link fw-bold '>Start test</Link>
          </div>
        </div>
        ))
        :
        (<p>Nothing to display!</p>)
      }
      </div>

    </div>
  )
}

export default OnlineArithApt