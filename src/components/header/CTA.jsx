import React from 'react'
import CV from '../../assets/CV.pdf'
// import '../../index.css'
// import './header.css'

const CTA = () => {
    return (
        <div className='cta'>
            {/* <a href={CV} download className='btn'>Download CV</a> */}
            <a href="#contact" className='btn btn-primary'>Get In Touch</a>
        </div>
    )
}

export default CTA
