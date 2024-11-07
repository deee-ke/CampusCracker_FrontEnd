import React, { useState } from 'react'
import './Loginpage.css'
import { registerAPI } from '../services/allAPI'
import { Link, useNavigate } from 'react-router-dom'

function Register() {  /* Setting userdata taking datas from input field checking in console */
  const [userData,setUserData] = useState({
    fullname:"",
    email:"",
    regnno:"",
    department:"",
    yearofstudy:"",
    username:"",
    password:""
  })
  // console.log(userData);

  const navigate = useNavigate()

  // Function to register (button)
  const handleRegister = async(e)=>{
    e.preventDefault()
    const {fullname,email,regnno,department,yearofstudy,username,password} = userData

    if(!fullname || !email  || !regnno || !department || !yearofstudy || !username || !password){
      alert('Please fill the form completely!')
    }
    else{
      try{const result = await registerAPI(userData)
      console.log(result)

      if(result.status===200){
        alert(`${result.data.username} registered successfully.`)
        setUserData({
          fullname:"",email:"",regnno:"",department:"",yearofstudy:"",username:"",password:""
        })
        navigate('/login')
      }
      else{
        alert(`${result.response.data}`)
      }
    }catch(err){
      console.log(`registration error due to: ${err}`);
      alert('Registration Failed! Please try again.')
    }
    }
  }
  
  return (
    <div className='gap-3 d-flex flex-column'>
        <div className="ip-fields">
          <input type="text" placeholder='Fullname' value={userData.fullname} onChange={(e)=>setUserData({...userData,fullname:e.target.value})}/>
         </div>

         <div className="ip-fields">
          <input type="email" placeholder='Enter your E-mail Address' value={userData.email} onChange={(e)=> setUserData({...userData,email:e.target.value})}/>
         </div>

         <div className="ip-fields">
          <input type="text" placeholder='Enter your College Registration Number' value={userData.regnno} onChange={(e)=>setUserData({...userData,regnno:e.target.value})}/>
         </div>

         <div className="ip-fields">
          <input type="text" placeholder='Select your Department' value={userData.department} onChange={(e)=>setUserData({...userData,department:e.target.value})}/>
         </div>

         <div className="ip-fields">
          <input type="text" placeholder='Select your Year of Study' value={userData.yearofstudy} onChange={(e)=>setUserData({...userData,yearofstudy:e.target.value})}/>
         </div>

          <div className="ip-fields">
            <input type="text" placeholder='Username' value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})}/>
          </div>
          
          <div className="ip-fields">
            <input type="password" placeholder='Password' value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
          </div> 
          
          <div className="logbtn  ">
          <button onClick={handleRegister} className='rounded-5 d-flex justify-content-center fw-semibold py-2 w-100'>
                REGISTER
          </button>
          </div>

          <div className="yesorno d-flex justify-content-center">
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </div>
    </div>
  )
}

export default Register