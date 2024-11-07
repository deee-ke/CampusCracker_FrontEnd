import React from 'react'
// import pot from '../assets/pot.jpg'
import { Link, useLocation } from 'react-router-dom'

function ArithmeticApt() {

  const passedData = useLocation().state?.data

  console.log(passedData);
  

  return (
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
            <Link to={'/subtopicshome'}  state={{data:[
            {
              section_name:item.section_name,
              category:item.category,
              routeName:item.routeName,
              route:item.route,
              formulaName:item.formulaName,
              formulaRoute:item.formulaRoute
            }
            ]}} className='stretched-link fw-bold'>Practice</Link>
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

export default ArithmeticApt