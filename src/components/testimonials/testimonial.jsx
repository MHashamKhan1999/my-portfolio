import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Our Client</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={80}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {/* First Testimonial */}
        <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={AVTR1} alt="Avatar of Client" />
          </div>
          <h5 className='client__name'>Erresrt Acheiver</h5>
            <small className='client__review'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Rerum dolores omnis iste ducimus nesciunt illo quam est unde voluptatem quibusdam saepe excepturi illum fugiat, distinctio ut? Nostrum dolor fugit at?
            </small>
        </SwiperSlide>    

         {/* Second Testimonial */}
         <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={AVTR2} alt="Avatar of Client" />            
          </div>
          <h5 className='client__name'>Erresrt Acheiver</h5>
            <small className='client__review'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Rerum dolores omnis iste ducimus nesciunt illo quam est unde voluptatem quibusdam saepe excepturi illum fugiat, distinctio ut? Nostrum dolor fugit at?
            </small>
        </SwiperSlide>    

         {/* Third Testimonial */}
         <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={AVTR3} alt="Avatar of Client" />            
          </div>
          <h5 className='client__name'>Erresrt Acheiver</h5>
            <small className='client__review'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Rerum dolores omnis iste ducimus nesciunt illo quam est unde voluptatem quibusdam saepe excepturi illum fugiat, distinctio ut? Nostrum dolor fugit at?
            </small>
        </SwiperSlide>    

        {/* Fourth Testimonial */}
        <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={AVTR4} alt="Avatar of Client" />            
          </div>
          <h5 className='client__name'>Erresrt Acheiver</h5>
            <small className='client__review'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Rerum dolores omnis iste ducimus nesciunt illo quam est unde voluptatem quibusdam saepe excepturi illum fugiat, distinctio ut? Nostrum dolor fugit at?
            </small>
        </SwiperSlide>
        
            
      </Swiper>

    </section>
  )
}

export default testimonial