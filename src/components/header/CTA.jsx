import React from 'react'
import Yumi_Resume from '../../assets/Yumi_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Yumi_Resume} download className='btn'>Download Resume</a>
        <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
    </div>

  )
}

export default CTA