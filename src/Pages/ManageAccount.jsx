import React, { useState } from 'react'
import '../Pages/ManageAccounts.css'
import userIMG from '../assets/default-avatar-icon-of-social-media-user-vector.jpg'

function ManageAccount() {
  //state for checking view or edit mode
  const [isEdit, setIsEdit] = useState(false)

  const toggleEdit = (e) =>{
    e.preventDefault()
    setIsEdit(!isEdit)

  }

  const existingUser = JSON.parse(sessionStorage.getItem('existingUser'))
  console.log(existingUser);

  const [userDetails, setUserDetails] = useState({
    fullname:existingUser.fullname,
    username:existingUser.username,
    department:existingUser.department,
    yearofstudy:existingUser.yearofstudy
  })

  return (
    <div className='container tot-body'>
      <div className="user-detals ">
        <div className="user-image text-center ">
          <img src={userIMG} alt="userIcon" width={100}/>
        </div>
        <form onSubmit={''} className='mt-5'>

          <div className='d-flex flex-column'>
            <label htmlFor="fullnameInput">Full Name</label>
            {isEdit?
            <input type="text" value={userDetails.fullname} name="fullname" id="fullnameInput" className='form-control' onChange={(e)=>setUserDetails({...userDetails,fullname:e.target.value})}/>
            :
            <span>{existingUser.fullname}</span>
            }
          </div>

          <div className='d-flex flex-column'>
            <label htmlFor="usernameInput">Username</label>
            {isEdit?
            <input type="text" value={userDetails.username} name="username" id="usernameInput" className='form-control' onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}/>
            :
            <span>{existingUser.username}</span>
            }
          </div>

          <div className='d-flex flex-column'>
            <label htmlFor="departmentInput">Department</label>
            {isEdit?
            <input type="text" value={userDetails.department} name="department" id="departmentInput" className='form-control' onChange={(e)=>setUserDetails({...userDetails,department:e.target.value})}/>
            :
            <span>{existingUser.department}</span>
            }
          </div>

          <div className='d-flex flex-column'>
            <label htmlFor="yofstudyInput">Year of study</label>
            {isEdit?
            <input type="text" value={userDetails.yearofstudy} name="yofstudy" id="yofstudyInput" className='form-control' onChange={(e)=>setUserDetails({...userDetails,yearofstudy:e.target.value})}/>
            :
            <span>{existingUser.yearofstudy}</span>
            }
          </div>

          <div className='d-flex gap-2'>
            <div className="edit-cancel">
              <button onClick={toggleEdit}>{isEdit?'Cancel':'Edit'}</button>
            </div>
            {isEdit&&
            <div className="save-btn">
              <button type='submit'>Save</button>
            </div>
            }
          </div>

        </form>
      </div>
    </div>
  )
}

export default ManageAccount