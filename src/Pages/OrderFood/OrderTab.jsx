import React from 'react';
import FoodCard from '../../components/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-10/12 mx-auto my-8 '>
            {
                items.map(item=> 
                    <FoodCard key={item._id} item={item}></FoodCard>
                )
            }
        </div>
    );
};

export default OrderTab;