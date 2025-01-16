import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import { Link } from 'react-router-dom';


const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-12 mb-12 cursor-pointer"
        >
            <SwiperSlide>
                <Link to={'/order/salad'}>
                    <img src={slide1} alt="" />
                    <p className="text-white text-xl font-medium leading-7 -mt-12" style={{ fontVariant: 'small-caps' }}>
                        Salads
                    </p>
                </Link>

            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/order/soup'}>
                    <img src={slide2} alt="" />
                    <p className="text-white text-xl font-medium leading-7 -mt-12" style={{ fontVariant: 'small-caps' }}>
                        Soups
                    </p>
                </Link>

            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/order/pizza'}>
                    <img src={slide3} alt="" />
                    <p className="text-white text-xl font-medium leading-7 -mt-12" style={{ fontVariant: 'small-caps' }}>
                        Pizzas
                    </p>
                </Link>

            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/order/dessert'}>
                    <img src={slide4} alt="" />
                    <p className="text-white text-xl font-medium leading-7 -mt-12" style={{ fontVariant: 'small-caps' }}>
                        Deserts
                    </p>
                </Link>

            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/order/drinks'}>
                    <img src={slide5} alt="" />
                    <p className="text-white text-xl font-medium leading-7 -mt-12" style={{ fontVariant: 'small-caps' }}>
                        Drinks
                    </p>
                </Link>

            </SwiperSlide>


        </Swiper>
    );
};

export default Category;