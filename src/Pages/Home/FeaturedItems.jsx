import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import featuredImg from '../../assets/home/featured.jpg'
const FeaturedItems = () => {
    return (
        <div className='featured text-white  flex flex-col  justify-center items-center bg-fixed'>
            <SectionHeader
                heading={'Featured Item'}
                subHeading={'Check It Out'}
            >
            </SectionHeader>

            <div className='flex flex-col md:flex-row py-12  gap-10 lg:px-44'>
                <img className=' md:w-[600px] lg:w-auto  lg:h-[400px] lg:flex-1' src={featuredImg} alt="" />
                <div className='lg:flex-1'>
                    <p>Jan 30, 2025</p>
                    <h3 style={{fontVariant: 'small-caps'}} className='text-2xl '>Where Can I Get Some?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn bg-transparent mt-5 text-white border-0 border-b-2 hover:bg-neutral border-white">Read More</button>

                </div>
            </div>

        </div>
    );
};

export default FeaturedItems;