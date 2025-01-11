import React from 'react';
import Navbar from '../Pages/SharedPage/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/SharedPage/Footer';

const Main = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes('login')
    return (
        <div className='flex flex-col min-h-screen cinzel'>
            <nav> 
                <Navbar></Navbar>
            </nav>
            <div className='flex-grow  mb-8'>
                <Outlet></Outlet>
            </div>
            <footer>
                {
                    isLogin ||
                    <Footer></Footer>

                }
            </footer>
        </div>
    );
};

export default Main;