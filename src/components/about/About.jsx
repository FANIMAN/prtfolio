import React from 'react'
import './about.css'
// import ME from '../../assets/fani.jpg'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={ME} alt="About Me"></img>
                    </div>
                </div>

                <div className="about__content">
                    {/* <div className="about__cards">
                        <article className='about__card'> 
                            <FaAward  className='about__icon'/>
                            <h5>Experience</h5>
                            <small>5+ Years Working</small>
                        </article>

                        <article className='about__card'> 
                            <FiUsers  className='about__icon'/>
                            <h5>Clients</h5>
                            <small>100+ Worldwide</small>
                        </article>

                        <article className='about__card'> 
                            <VscFolderLibrary  className='about__icon'/>
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div> */}

                    <p>
                        Hello :) I.m Fantahun, a software engineer based in Addis Ababa, ET.  <br/> 
                        <br/>
                        Well-qualified Full Stack Developer familiar with wide range of programming
                    utilities and languages. Knowledgeable of backend and frontend development
                    requirements. Handles any part of process with ease. Collaborative team player
                    with excellent technical abilities and offering diverse customer projects.
                    </p>

                    <a href="#contact" className='btn btn-primary'> Let's Talk</a>
                   
                </div>
            </div>


        </section>
    )
}

export default About
