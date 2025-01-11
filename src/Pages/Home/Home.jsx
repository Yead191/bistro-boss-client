import React from 'react';
import Banner from './Banner';
import Category from './Category';
import SectionHeader from '../../components/SectionHeader';
import PopularItems from './PopularItems';
import FeaturedItems from './FeaturedItems';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>
            <div >
                <Banner></Banner>
            </div>
            <SectionHeader heading={'Order Online'} subHeading={'From 11:00am to 10:00pm'}>

            </SectionHeader>
            <div className='lg:w-8/12 mx-auto'>

                <Category></Category>
            </div>
            <PopularItems></PopularItems>
            <FeaturedItems></FeaturedItems>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;