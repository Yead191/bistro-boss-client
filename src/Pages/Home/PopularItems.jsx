import React, { useEffect, useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import axios from 'axios';
import MenuItem from '../../components/MenuItem';
import useMenu from '../../hooks/useMenu';

const PopularItems = () => {
const [menu, loading, refetch] = useMenu()
// const [menu, setMenu] = useState([])

const popular = menu?.filter(item=> item.category === 'popular')

// useEffect(()=>{

//     axios.get('menu.json')
//     .then(res=> {
//         const popularProducts = res.data.filter(item=> item.category === 'popular')
//         // console.log(popularProducts);
//         setMenu(popularProducts)
//     })
// },[])

    return (
        <div className='p-2 lg:p-0'>
            <SectionHeader
            heading={'From Our Menu'}
            subHeading={'Popular Items'}
            ></SectionHeader>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-12 md:w-10/12 lg:w-8/12 mx-auto'>
                {
                    popular?.map(item => <MenuItem 
                    key={item._id}
                    item={item}
                    >
                    </MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularItems;