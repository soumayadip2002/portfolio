import React from 'react'
import Resume1 from '../../img/Resume1.pdf';
const CTA = () => {
  return (
   <div className="cta">
        <a href={Resume1} download className='btn'>Download cv</a>
        <a href="" className='btn btn-primary'>Let's talk</a>
   </div>
  )
}

export default CTA