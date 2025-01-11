import React from 'react';

const SectionHeader = ({ heading, subHeading }) => {
    return (
        <div className='text-center w-6/12 lg:w-3/12 mx-auto' style={{ fontVariant: 'small-caps' }}>
            <p className='text-yellow-500 mb-2'>---{subHeading}---</p>
            <h2 className='border-y-4 text-4xl xl:text-5xl py-4'>{heading}</h2>
        </div>
    );
};

export default SectionHeader;