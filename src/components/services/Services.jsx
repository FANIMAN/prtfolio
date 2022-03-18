import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>Where I Have Worked</h5>
            <h2>Experience</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Side Hustle - Ibadan, Nigeria</h3>
                        <h3>Flutter Developer</h3>
                        <h3>Oct 2021 - Feb 2022 </h3>
                    </div>

                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Developed a flutter app</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Designing user interface components for mobile apps.</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Deployed flutter app to cloud infrastructures</p>
                    </ul>
                    {/* <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>This is faniman from aait</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>This is faniman from aait</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>This is faniman from aait</p>
                    </ul> */}
                </article>
                {/* END OF UI/UX */}



                <article className="service">
                    <div className="service__head">
                    <h3>Ministry of Innovation and Technology MINT - Addis Ababa, Ethiopia</h3>
                        <h3>Web Developer</h3>
                        <h3>May 2021 - Sep 2021 </h3>
                    </div>

                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Builded React JS project.</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Designed user interface components for web apps</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Worked on different frameworks in collaboration with team members</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Deployed web app to cloud infrastructures</p>
                    </ul>
                    {/* <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>This is faniman from aait</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>This is faniman from aait</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>This is faniman from aait</p>
                    </ul> */}
                </article>
                {/* END OF Mobile Development */}




                <article className="service">
                    <div className="service__head">
                    <h3>Upwork Inc. - Virtual</h3>
                        <h3>Full Stack Web and Mobile App Developer (Freelace)</h3>
                        <h3>Aug 2019 - Present </h3>
                    </div>

                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Worked on different Mobile and Web projects using diferent Programming Langauges.</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Designed, implemented and monitored APIs using Node, Golang.</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Provided high level of assistance to customers regarding their projects.</p>
                    </ul>
                    {/* <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>This is faniman from aait</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>This is faniman from aait</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>This is faniman from aait</p>
                    </ul> */}
                </article>
                {/* END OF Web Development */}
            </div>


        </section>
    )
}

export default Services
