import React from 'react'
import './testimonials.css'
import POF1 from '../../assets/images/volunteer.png'
import POF2 from '../../assets/images/hiking2.JPG'
import POF3 from '../../assets/images/food.JPG'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: POF3,
    name: 'Food',
    review: "I'm a big fan of exploring new cultures and cuisines, and I love to sample delicious food from around the world."
    
  },
  {
    avatar: POF1,
    name: 'Volunteer Experience',
    review: "I've been an active participant in the annual Kids Kidney Camp, where I volunteer as a counselor and mentor for young children who are undergoing treatment for kidney disease. This experience has been incredibly rewarding, given me a sense of purpose and fulfillment, and has allowed me to make a positive impact on the world around me."
  },
  {
    avatar: POF2,
    name: 'Hiking',
    review: "I'm passionate about outdoor activities, and one of my favorite pastimes is hiking. Above photo was taken when I traveled to Iceland and hiked to see a glacier."
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>More about me</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="hobby_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>
                {review}
              </small>       
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials