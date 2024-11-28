import React, { useEffect, useState } from 'react'
import '../Pages/ManageAccounts.css'
import userIMG from '../assets/default-avatar-icon-of-social-media-user-vector.jpg'
import { getUserDetailsAPI, updateDetailsAPI } from '../services/allAPI';
import { BASE_URL } from '../services/baseurl';

function ManageAccount() {

  //state to hold token
  const [token,setToken] = useState("")
  //to get token when page loads
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[])  

  const existingUser = JSON.parse(sessionStorage.getItem('existingUser'))
  console.log(existingUser);

  // const [existingUser, setExstingUser] = useState({})
  // console.log(existingUser);
  
  // for getting updated user details 
  const getUserDetails = async() =>{
    if (token){
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      const result = await getUserDetailsAPI(reqHeader)
      console.log(result.data);
      setUserDetails(result.data)
    }  
  }

  useEffect(()=>{
    token&&
    getUserDetails()
  },[token])

  const [userDetails, setUserDetails] = useState({
    fullname:existingUser.fullname,
    username:existingUser.username,
    department:existingUser.department,
    yearofstudy:existingUser.yearofstudy,
    profileimg:existingUser.profileimg
  })
  console.log(userDetails);

  //state for holding the URL of the image file
  const [preview, setPreview] = useState("")

  // useEffect(()=>{
  //   userDetails.profileimg &&
  //   setPreview(URL.createObjectURL(userDetails.profileimg))
  // },[userDetails.profileimg])
  
  useEffect(() => {
    let objectUrl;
    if (userDetails.profileimg instanceof File || userDetails.profileimg instanceof Blob) {
        objectUrl = URL.createObjectURL(userDetails.profileimg);
        setPreview(objectUrl);
    } else if (userDetails.profileimg) {
        setPreview(`${BASE_URL}/uploads/${userDetails.profileimg}`);
    }
    return () => {
        if (objectUrl) {
            URL.revokeObjectURL(objectUrl);
        }
    };
}, [userDetails.profileimg]);
  
  //state for checking view or edit mode
  const [isEdit, setIsEdit] = useState(false)

  const toggleEdit = (e) =>{
    e.preventDefault()
    if(isEdit===false){
      setIsEdit(!isEdit)
    }else{
      if(userDetails.fullname === existingUser.fullname && userDetails.username === existingUser.username && userDetails.department === existingUser.department && userDetails.yearofstudy === existingUser.yearofstudy && userDetails.profileimg === existingUser.profileimg){
        setIsEdit(!isEdit)
      }else{
        const confMsg = window.confirm('Discard Changes?')
        confMsg&&
        setUserDetails({
          fullname:existingUser.fullname,
          username:existingUser.username,
          department:existingUser.department,
          yearofstudy:existingUser.yearofstudy,
          profileimg:existingUser.profileimg
        })
        setPreview("")
        setIsEdit(!isEdit)
      }
    }

  }

  // for updating user details
  const updateUserDetails = async(e) =>{
    e.preventDefault()
    const {fullname,username,department,yearofstudy,profileimg} = userDetails

    if(!fullname || !username || !department || !yearofstudy){
      alert('Some fields are missing!')
    }else{
      //reqBody : we need to use multipart/form-data because we are uploading a file.
      //1) creating an object of formdata class
      const reqBody = new FormData()
      //2) adding data using : append() - method
      reqBody.append("fullname",fullname) // can only add one element using append method. 
      reqBody.append("username",username) 
      reqBody.append("department",department)
      reqBody.append("yearofstudy",yearofstudy)
      reqBody.append("profileimg",profileimg)

      if(preview){
        //reqHeader
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }

        const result = await updateDetailsAPI(reqBody,reqHeader)
        console.log(result);
        if(result.status === 200){
          setIsEdit(!isEdit)
          setUserDetails(result.data)
          sessionStorage.setItem("existingUser", JSON.stringify(result.data))
          alert('Profile updated successfully.')
        }else{
          console.log(result.response.data);
          
        }

      }else{
        const reqHeader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }

        const result = await updateDetailsAPI(reqBody,reqHeader)
        console.log(result);
        if(result.status === 200){
          setIsEdit(!isEdit)
          setUserDetails(result.data)
          sessionStorage.setItem("existingUser", JSON.stringify(result.data))
          alert('Profile updated successfully.')
        }else{
          console.log(result.response.data);
          
        }

      }

    }
  }

  

  return (
    <div className='container tot-body'>
      <div className="user-detals ">
        <div className="user-image text-center ">
          {isEdit?
          <label htmlFor='upload' className='pro-img'>
            <input type="file" id='upload' style={{display:'none'}} onChange={(e)=>setUserDetails({...userDetails,profileimg:e.target.files[0]})}/>
            <img src={preview?preview:userIMG} alt="userIcon"/>
          </label>
            :
            <label className='pro-img'>
              {userDetails.profileimg?
                <img src={`${BASE_URL}/uploads/${userDetails.profileimg}`} alt="userIcon"/>
                :
                <img src={userIMG} alt="" />
              }
            </label>
            } 
        </div>
        <form onSubmit={updateUserDetails} className='mt-5'>

          <div className='d-flex flex-column'>
            <label htmlFor="fullnameInput">Full Name</label>
            {isEdit?
            <input type="text" value={userDetails.fullname} name="fullname" id="fullnameInput" className='form-control' onChange={(e)=>setUserDetails({...userDetails,fullname:e.target.value})}/>
            :
            <span>{userDetails.fullname}</span>
            }
          </div>

          <div className='d-flex flex-column'>
            <label htmlFor="usernameInput">Username</label>
            {isEdit?
            <input type="text" value={userDetails.username} name="username" id="usernameInput" className='form-control' onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}/>
            :
            <span>{userDetails.username}</span>
            }
          </div>

          <div className='d-flex flex-column'>
            <label htmlFor="departmentInput">Department</label>
            {isEdit?
            <input type="text" value={userDetails.department} name="department" id="departmentInput" className='form-control' onChange={(e)=>setUserDetails({...userDetails,department:e.target.value})}/>
            :
            <span>{userDetails.department}</span>
            }
          </div>

          <div className='d-flex flex-column'>
            <label htmlFor="yofstudyInput">Year of study</label>
            {isEdit?
            <input type="text" value={userDetails.yearofstudy} name="yofstudy" id="yofstudyInput" className='form-control' onChange={(e)=>setUserDetails({...userDetails,yearofstudy:e.target.value})}/>
            :
            <span>{userDetails.yearofstudy}</span>
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