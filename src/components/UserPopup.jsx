import React from 'react'
import dpcut from '../assets/dpcut.jpeg'
import './userPopup.css'

function UserPopup({ popup, setPopup, setIsPopup }) {
    const handleClosePopup = () => {
        setPopup(false)
        setIsPopup(false)
    }

    if (!popup) return null;

    const userDetails = JSON.parse(sessionStorage.getItem('existingUser'))
    console.log(userDetails);
    

    return (
        <div className="user-popup-container ">
            <div className='user-popup'>
                <div className="info-header text-center ">
                    <div className="profile-picture">
                        <img className='rounded-5' src={dpcut} width={'60px'} alt="profile" />
                    </div>
                    <div className="name-email mt-3 d-flex flex-column">
                        <h6 className='fw-bold m-0'>{userDetails.fullname}</h6>
                        <span style={{ fontSize: '13px' }}>{userDetails.email}</span>
                        <span style={{ fontSize: '13px' }}>{userDetails.department}</span>
                    </div>
                    <div className="manage-account mt-3">
                        <button className='border border-primary border-2 text-white rounded-4 px-3 py-1 bg-black'>Manage your account</button>
                    </div>
                    {/* <hr /> */}
                </div>
                <div className="info-body mt-3">

                    <div className=' ps-2 exm-history  py-2' role='button'>
                        <li className=''>Exam History</li>
                    </div>
                    <div className=' ps-2 results  py-2' role='button'>
                        <li className=''>Results</li>
                    </div>
                    <div className=' ps-2 performance py-2' role='button'>
                        <li className=''>Performance</li>
                    </div>
                    
                </div>
                <div className="info-footer my-auto text-center py-3">
                    <button onClick={handleClosePopup} className='bg-transparent border-0 text-white w-100 '>
                        Logout <i className='fa-solid fa-power-off '></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserPopup
