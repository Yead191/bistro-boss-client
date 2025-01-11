import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/home/01.jpg'
import img2 from '../../assets/home/02.jpg'
import img3 from '../../assets/home/03.png'
import img4 from '../../assets/home/04.jpg'
import img5 from '../../assets/home/05.png'
import img6 from '../../assets/home/06.png'

const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            className="lg:h-[85vh] lg:mb-28">
            <div className="lg:h-[85vh] ">
                <img className="h-full w-full object-cover" src={img1} alt="Slide 1" />
            </div>
            <div className="lg:h-[85vh]">
                <img className="h-full w-full object-cover" src={img2} alt="Slide 2" />
            </div>
            <div className="lg:h-[85vh]">
                <img className="h-full w-full object-cover" src={img3} alt="Slide 3" />
            </div>
            <div className="lg:h-[85vh]">
                <img className="h-full w-full object-cover" src={img4} alt="Slide 4" />
            </div>
            <div className="lg:h-[85vh]">
                <img className="h-full w-full object-cover" src={img5} alt="Slide 5" />
            </div>
            <div className="lg:h-[85vh]">
                <img className="h-full w-full object-cover" src={img6} alt="Slide 6" />
            </div>
        </Carousel>
    );
};

export default Banner;
