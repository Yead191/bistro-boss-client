import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../SharedPage/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionHeader from '../../components/SectionHeader';
import MenuCategory from './MenuCategory';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [menu] = useMenu()
    const deserts = menu?.filter(item => item.category === 'dessert')
    const soup = menu?.filter(item => item.category === 'soup')
    const salad = menu?.filter(item => item.category === 'salad')
    const pizza = menu?.filter(item => item.category === 'pizza')
    const offered = menu?.filter(item => item.category === 'offered')

    return (
        <div className=''>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <Cover img={menuImg} title={'Our Menu'} subTitle={' Would You Like to Try a Dish?'}></Cover>
            <div className='my-8'>

                <SectionHeader
                    subHeading={"Don't Miss"} heading={"Today'S Offer"}
                ></SectionHeader>
            </div>
            {/* offered menu items */}
            <MenuCategory items={offered} ></MenuCategory>
            <div className='flex justify-center items-center'>

                <Link to={'/order/salad'} style={{ fontVariant: 'small-caps' }} className="btn  mt-5  border-0 border-b-2 bg-white border-neutral">Order Your Favorite Food</Link>
            </div>
            <MenuCategory coverImg={desertImg} title={'Desserts'} items={deserts}  ></MenuCategory>

            <div className='flex justify-center items-center'>

                <Link to={'/order/dessert'} className="btn  mt-5  border-0 border-b-2 bg-white border-neutral ">Order Now</Link>
            </div>

            <MenuCategory coverImg={pizzaImg} title={'Pizza'} items={pizza}  ></MenuCategory>
            <div className='flex justify-center items-center'>

                <Link to={'/order/pizza'} className="btn  mt-5  border-0 border-b-2 bg-white border-neutral ">Order Now</Link>
            </div>
            <MenuCategory coverImg={saladImg} title={'Salads'} items={salad}  ></MenuCategory>
            <div className='flex justify-center items-center'>

                <Link to={'/order/salad'} className="btn  mt-5  border-0 border-b-2 bg-white border-neutral ">Order Now</Link>
            </div>
            <MenuCategory coverImg={soupImg} title={'Soups'} items={soup}  ></MenuCategory>
            <div className='flex justify-center items-center'>

                <Link to={'/order/soup'} className="btn  mt-5  border-0 border-b-2 bg-white border-neutral ">Order Now</Link>
            </div>

        </div>
    );
};

export default Menu;