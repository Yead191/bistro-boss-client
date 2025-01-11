import React from 'react';
import Cover from '../SharedPage/Cover';
import MenuItem from '../../components/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className='my-8'>
            {
                title && <Cover title={title} img={coverImg}></Cover>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-12 md:w-10/12 lg:w-8/12 mx-auto'>
                {
                    items?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
            
        </div>
    );
};

export default MenuCategory;