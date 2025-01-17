import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';



const MainLayout = () => {
    return (
        <div className=''>
            <div className=' '>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;