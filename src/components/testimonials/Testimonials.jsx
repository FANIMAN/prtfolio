import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/fani.jpg'
import AVTR2 from '../../assets/me.jpg'
import AVTR3 from '../../assets/me1.jpg'
import AVTR4 from '../../assets/img18.jpg'

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';



const data = [
    {
        avatar: AVTR1,
        name: 'Fani F',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquam error cum officia ab a fuga magnam, quaerat earum quas, possimus necessitatibus, blanditiis rem! Animi, debitis. Soluta, suscipit harum! Quam?'
    },
    {
        avatar: AVTR2,
        name: 'Dani F',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquam error cum officia ab a fuga magnam, quaerat earum quas, possimus necessitatibus, blanditiis rem! Animi, debitis. Soluta, suscipit harum! Quam?'
    },
    {
        avatar: AVTR3,
        name: 'Yoni F',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquam error cum officia ab a fuga magnam, quaerat earum quas, possimus necessitatibus, blanditiis rem! Animi, debitis. Soluta, suscipit harum! Quam?'
    },
    {
        avatar: AVTR4,
        name: 'Moman F',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquam error cum officia ab a fuga magnam, quaerat earum quas, possimus necessitatibus, blanditiis rem! Animi, debitis. Soluta, suscipit harum! Quam?'
    },

]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            {/* Otoo Swiper itti hin geddaramin dura div ture akkasumas SwiperSlide inni jedhus article ture */}
            <Swiper className="container testimonials__container"
             // install Swiper modules
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}>

                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className="client__review"> {review}   </small>
                            </SwiperSlide>
                        )
                    })
                }



                      {/* The below is the hard coded One */}


                {/* <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar_One"/>
                    </div>
                    <h5 className='client__name'>Faniman</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aut similique dolorum, fuga libero ipsum in ad adipisci. Cupiditate vitae quae laborum ullam amet est fuga quasi nam eum tempore!
                    </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar_One"/>
                    </div>
                    <h5 className='client__name'>Faniman</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aut similique dolorum, fuga libero ipsum in ad adipisci. Cupiditate vitae quae laborum ullam amet est fuga quasi nam eum tempore!
                    </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar_One"/>
                    </div>
                    <h5 className='client__name'>Faniman</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aut similique dolorum, fuga libero ipsum in ad adipisci. Cupiditate vitae quae laborum ullam amet est fuga quasi nam eum tempore!
                    </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar_One"/>
                    </div>
                    <h5 className='client__name'>Faniman</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aut similique dolorum, fuga libero ipsum in ad adipisci. Cupiditate vitae quae laborum ullam amet est fuga quasi nam eum tempore!
                    </small>
                </article> */}
            </Swiper>
        </section>
    )
}

export default Testimonials
