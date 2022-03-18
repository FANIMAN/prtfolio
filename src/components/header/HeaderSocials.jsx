import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiFiverr} from 'react-icons/si'
import {SiUpwork} from 'react-icons/si'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/in/fantahun-fekadu" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/FANIMAN" target="_blank"><BsGithub/></a>
            <a href="https://fiverr.com/fantahunfekadu" target="_blank"><SiFiverr/></a>
            <a href="https://upwork.com" target="_blank"><SiUpwork/></a>
            {/* https://www.upwork.com/freelancers/~01a0ffd6a31a5b74d9 */}
            <a href="https://dribble.com" target="_blank"><FiDribbble/></a>   
        </div>
    )
}

export default HeaderSocials
