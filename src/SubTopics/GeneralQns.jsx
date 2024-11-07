import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import './potgnrlqstns.css'
import { useLocation } from 'react-router-dom';
import { getGeneralQuestionAPI } from '../services/allAPI';

function GeneralQns() {

    const passedData = useLocation().state?.data
    // console.log(passedData);
    
    const section_name = passedData.section_name
    const category = passedData.category

    const [openIndexes, setOpenIndexes] = useState([])
    const [generalQuestions, setGeneralQuestions] = useState([]) 
    
    const getArithQuestions = async()=>{
        try {
          const result = await getGeneralQuestionAPI(section_name,category);
          console.log(result.data);
          
          if(result && result.data && Array.isArray(result.data)){
            setGeneralQuestions(result.data);
          }else{
            console.log('No questions found!');  
          }
        } catch (error) {
          console.error('Error fetching Arithmetic aptitude questions:', error);
        }
      };
    
      useEffect(()=>{
        getArithQuestions();
      },[]);
    
     const toggleOpen = (index)=>{
        setOpenIndexes((prev)=>
          prev.includes(index) ? prev.filter((i)=>i !== index):[...prev, index]
        );
      };
    
      const [selectedAnswers, setSelectedAnswers] = useState({});
    
      const handleOption = (questionId, selectedOption) => {
        const question = generalQuestions.find((q) => q._id === questionId);
        const isCorrect = selectedOption === question.answer;
        setSelectedAnswers((prev) => ({
          ...prev,
          [questionId]: { selected: selectedOption, isCorrect },
        }));
      };
    

  return (
    <>
      <div className="container">

        {generalQuestions?.length > 0? (
          generalQuestions?.map((item,index)=>(
          <div className="tot-qstn" key={index}>
          <div className="qstn d-flex gap-2">
            <div className="qno ">
              {index+1}
            </div>
            <div className="question ">
              <p>{item.question}</p>
            </div>
          </div>

          {/* <div className="options ms-4">
            
            <div className="optA d-flex gap-3"  onClick={handleOption}>
              <div className="a">a</div>
              <div className="option">
                <p>{item.option_a}</p>
              </div>
            </div>

            <div className="optA d-flex gap-3" onClick={handleOption}>
              <div className="a">b</div>
              <div className="option">
                <p>{item.option_b}</p>
              </div>
            </div>

            <div className="optA d-flex gap-3" onClick={handleOption}>
              <div className="a">c</div>
              <div className="option">
                <p>{item.option_c}</p>
              </div>
            </div>

            <div className="optA d-flex gap-3"  onClick={handleOption}>
              <div className="a">d</div>
              <div className="option">
                <p>{item.option_d}</p>
              </div>
            </div>

          </div> */}

          <div className="options ms-4">
              {['a', 'b', 'c', 'd'].map((opt) => (
                <div
                  key={opt}
                  className={`optA d-flex gap-3 ${
                    selectedAnswers[item._id]?.selected === item[`option_${opt}`]
                      ? selectedAnswers[item._id].isCorrect
                        ? 'correct'
                        : 'incorrect'
                      : ''
                  }`}
                  onClick={() => handleOption(item._id, item[`option_${opt}`])}
                >
                  <div className="a">{opt}</div>
                  <div className="option">
                    <p>{item[`option_${opt}`]}</p>
                  </div>
                </div>
              ))}
            </div>

          

          <div className="ms-4 ansandexplnsn">
          <>
            <Button className='d-flex align-items-center rounded-5 bg-warning border-transparent border' onClick={() => toggleOpen(index)} aria-controls={`example-collapse-text-${index}`} aria-expanded={openIndexes.includes(index)}>
              Solution <i class="ms-2 fa-solid fa-lightbulb"></i>
            </Button>
            <div><Collapse in={openIndexes.includes(index)}>
              <div id={`example-collapse-text-${index}`}>
                <p>
                  {item.answer}
                </p>
                <p>
                  {item.explanation}
                </p>
              </div>
            </Collapse></div>
        </>
          </div>

        </div> 
          ))
        )
          :
          (
          <div>
            <p>No questions available for {category}</p>
          </div>
        )}

      </div>
    </>
  )
}

export default GeneralQns