import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Result() {

    //getting results passed from general exam page
    const results = useLocation().state?.data.results;
    const outOf = useLocation().state?.data.outOf;
    
    const navigate = useNavigate() 

    const goHome = () =>{
        navigate('/home')
        sessionStorage.removeItem('examCompleted')
    }

  return (
    <div className='text-center align-items-center d-flex flex-column mt-5'>
        <div className="result-head">
            <h3>Results</h3>
        </div>
        <div className="result-body">
            <h4 className={results.passed?"text-success":"text-danger"}>{results?.passed?"Congratulations! You Passed!":"Sorry! You failed!"}</h4>
            <p>You got <span className={results.passed?'text-success fw-bold fs-5':'text-danger fw-bold fs-5'}>{results.percentage}%</span></p>
            <p>Your score: <b><span className={!results.passed&&"text-danger"}>{results.score}</span>/{outOf}</b></p>
            <p>You need to get <b>65%</b> or more to pass. </p>
        </div>
        <div className="backbtn">
            <button onClick={goHome} className='border-0 py-2 px-3 text-white bg-primary rounded-4'>
                Go back to Home
            </button>
        </div>
    </div>
  )
}

export default Result