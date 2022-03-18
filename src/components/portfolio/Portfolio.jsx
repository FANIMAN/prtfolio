import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port1.jpg'
import IMG2 from '../../assets/port2.jpg'
import IMG3 from '../../assets/port3.jpg'
import IMG4 from '../../assets/port4.jpg'
import IMG5 from '../../assets/port5.jpg'
import IMG6 from '../../assets/port6.jpg'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/17428236-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/17428236-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/17428236-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/17428236-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/17428236-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/17428236-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },

]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article  key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt={title}/>
                            </div>
                            <h3>{title}</h3>
                           <div className="portfolio__item-cta">
                                 <a href={github} className='btn' target='_blank'>Github</a>
                                 <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                           </div>
                        </article>
                        )
                    })
                }


                {/* Or The Longest way we can use the below one */}


                {/* <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                   <div className="portfolio__item-cta">
                         <a href='https://github.com' className='btn' target='_blank'>Github</a>
                         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
                   </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                   <div className="portfolio__item-cta">
                         <a href='https://github.com' className='btn' target='_blank'>Github</a>
                         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
                   </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                   <div className="portfolio__item-cta">
                         <a href='https://github.com' className='btn' target='_blank'>Github</a>
                         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
                   </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                   <div className="portfolio__item-cta">
                         <a href='https://github.com' className='btn' target='_blank'>Github</a>
                         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
                   </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                   <div className="portfolio__item-cta">
                         <a href='https://github.com' className='btn' target='_blank'>Github</a>
                         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
                   </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                   <div className="portfolio__item-cta">
                         <a href='https://github.com' className='btn' target='_blank'>Github</a>
                         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
                   </div>
                </article> */}
            </div>
        </section>
    )
}

export default Portfolio
