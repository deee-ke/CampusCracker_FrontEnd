import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SubtopicsHome() {
  const passedData = useLocation().state?.data
  
  return (
    <div className='d-flex flex-column'>
      {
        passedData?.length>0?
        passedData.map(item=>(
          <Link to={item.route} state={{data:
            {
              section_name:item.section_name,
              category:item.category
            }
          }}>{item.routeName}</Link>
          
        )):
        (
          <p>Nothing to display!</p>
        )
      }
      {
        passedData.map(item=>(
          <Link to={item.formulaRoute}>{item.formulaName}</Link>
        ))
      }
    </div>
  )
}

export default SubtopicsHome