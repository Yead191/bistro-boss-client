import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className='flex justify-between items-center gap-4'>
            <img className='w-[100px] rounded-full rounded-tl-none ' src={image} alt="" />
            <div>
                <h4 style={{ fontVariant: 'small-caps' }} className='text-lg font-light'>{name} ------</h4>
                <p className='text-sm'>{recipe}</p>
            </div>
            <div className='flex items-center text-yellow-500'>
                <p>$</p>
                <p className='ml-1 inline-flex '> {price}</p>
            </div>
        </div>
    );
};

export default MenuItem;