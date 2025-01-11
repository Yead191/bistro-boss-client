import React, { useEffect, useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from 'react-icons/fa'
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import axios from 'axios';

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(res => {
                setReviews(res.data);
            })
    }, [])
    return (
        <section className='my-12'>
            <SectionHeader
                heading={'Testimonials'}
                subHeading={'What Our Clients Say'}
            ></SectionHeader>

            <div className=' md:w-10/12 mx-auto'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-12">
                    {
                        reviews?.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className='flex flex-col items-center justify-center mx-20 '>

                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <FaQuoteLeft className='my-3' size={64} color="black" />
                                    <p className='my-3'>{review.details}</p>
                                    <h1 style={{ fontVariant: 'small-caps' }} className='text-2xl text-orange-400' >{review.name}</h1>
                                </div>
                            </SwiperSlide>

                        )
                    }




                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;