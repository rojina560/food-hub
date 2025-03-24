import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import icon from '../../../assets/icon/icon.png'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const Testimonial = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5001/reveiws')
        .then(res=>res.json())
        .then(data =>setReviews(data))
    },[])
    console.log('this frpm reveiw', reviews);
    return (
        <section>
            <SectionTitle
            subHeading='What Our Clients Say'
            heading='testimonials'></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
     
         
       {
            reviews.map(review =><SwiperSlide key={review._id}><div className= 'flex flex-col items-center m-4 sm:m-10 md:m-20 lg:m-24'>
                 <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                    />
                    <img src={icon} alt="" />
                <p className='py-4'>{review.details}</p>
                <h3 className='text-2xl text-[#D99904]'>{review.name}</h3>
                </div></SwiperSlide>)
        }
  
      </Swiper>
        </section>
    );
};

export default Testimonial;