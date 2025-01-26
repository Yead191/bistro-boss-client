import React, { useState } from 'react';
import Cover from '../SharedPage/Cover';
import orderCover from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu, loading, refetch] = useMenu([])
    const deserts = menu?.filter(item => item.category === 'dessert')
    const soup = menu?.filter(item => item.category === 'soup')
    const salad = menu?.filter(item => item.category === 'salad')
    const pizza = menu?.filter(item => item.category === 'pizza')
    const drinks = menu?.filter(item => item.category === 'drinks')
    if (loading) {
        return <div className='flex min-h-screen justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>

    }
    return (
        <div>
            <Cover img={orderCover} title={'Order Food'} subTitle={'Choose Your Favorite Food To Order '}></Cover>
            <div className='my-12'>

                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-center md:space-x-4">
                        <Tab style={{ fontVariant: 'small-caps' }}
                            className="py-2 px-4 cursor-pointer focus:outline-none"
                            selectedClassName="text-[#BB8506] border-0  border-b-4 border-[#BB8506] font-semibold"
                        >
                            Salad
                        </Tab>
                        <Tab style={{ fontVariant: 'small-caps' }}
                            className="py-2 px-4 cursor-pointer focus:outline-none"
                            selectedClassName="text-[#BB8506] border-0  border-b-4 border-[#BB8506] font-semibold"
                        >
                            Pizza
                        </Tab>
                        <Tab style={{ fontVariant: 'small-caps' }}
                            className="py-2 px-4 cursor-pointer focus:outline-none"
                            selectedClassName="text-[#BB8506] border-0  border-b-4 border-[#BB8506] font-semibold"
                        >
                            Soup
                        </Tab>
                        <Tab style={{ fontVariant: 'small-caps' }}
                            className="py-2 px-4 cursor-pointer focus:outline-none"
                            selectedClassName="text-[#BB8506] border-0  border-b-4 border-[#BB8506] font-semibold"
                        >
                            Desserts
                        </Tab>
                        <Tab style={{ fontVariant: 'small-caps' }}
                            className="py-2 px-4 cursor-pointer focus:outline-none"
                            selectedClassName="text-[#BB8506] border-0  border-b-4 border-[#BB8506] font-semibold"
                        >
                            Drinks
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={deserts}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>

                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;