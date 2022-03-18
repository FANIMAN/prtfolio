import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.jpg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h4>Hi, &nbsp;&nbsp;my &nbsp;name &nbsp;is</h4>
                <h1>Fantahun Fekadu</h1>
                <h2 className="text-light">Fullstack Web and Mobile App Developer   </h2>
                {/* <h3>I'm a software engineer based in Addis Ababa, ET</h3> */}
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                        <img src={ME} alt="me"/>
                 </div>

                {/* <div className="about__me">
                    <div className="me">
                        <img src={ME} alt="me"/>
                    </div>
                </div> */}

              

                <ScrollDown/>

                {/* <a href="#contact" className='scroll__down'>Scroll Down</a>  */}
                
            </div>
        </header>
    )
}

export default Header;
