import React, { useState } from 'react'
import Title from '../components/Title'
import './Loginpage.css'
import { Link, useNavigate } from 'react-router-dom'
import Register from './Register'
import { loginAPI } from '../services/allAPI'
function Login({register}) { /* data passed for register */

  const regForm = register?true:false /* Assigned a constant variable True if reg present false if not present */

  const [userData,setUserData] = useState({
    fullname:"",
    email:"",
    regnno:"",
    department:"",
    yearofstudy:"",
    username:"",
    password:""
  })

  const navigate = useNavigate()

  //function to login

  const handlelogin = async(e)=>{
    e.preventDefault()
    const {email,password} =userData
    if(!email || !password){
      alert("Fill the form Completely")
    }
    else{
      const result = await loginAPI(userData)
      console.log(result);

      if (result.status===200) {
        //store data
        // in session storage; key:string, value:string
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)

        alert('Login Successful')

        setUserData({
          email:"",password:""
        })
        navigate('/home')
      }
      else{
        alert(result.response.data)
      }

    }
  }

  return (
    <div className='total d-flex justify-content-center flex-column align-items-center'>
      <div className='box px-5 py-4 col-md-4'>
        <div className="headttl mb-3">
          <Title/>
        </div >
        {regForm? /* Checking if register exist or not if yes render code below ie register page */
          <div className="input-btn "> 

         <Register/>

        </div>
        : /* If register not exist render code below ie login page */
        <div className="input-btn gap-3 d-flex flex-column">

          <div className="ip-fields">
            <input type="text" placeholder='Enter Your Email' value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
          </div>

          <div className="ip-fields">
            <input type="password" placeholder='Password' value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
          </div> 
          
          <div className="logbtn">
            <button onClick ={handlelogin} className='rounded-5 d-flex justify-content-center fw-semibold py-2 w-100'>
                  LOGIN
            </button>
          </div>

          <div className="yesorno d-flex justify-content-center">
            <p>Don't have an account? <Link to='/register'>SignUp</Link></p>
          </div>

        </div>
        }
      </div>
  
    </div>
  )
}

export default Login