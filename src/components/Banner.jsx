import React from 'react';
import bannerImg from '../assets/banner.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            className="hero "
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}>
            <div className=""></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <br /><br />
                    <h1 className="mb-5 text-5xl font-bold">ABC Restaurant </h1>
                    <p className="mb-5">
                        <br />
                        Exciting Coffee Tasting Experience & New Biscoff Cheesecake Launch at Secret Recipe!
                    </p>

                    <br />
                    <br />
                    <Link to={`/allfood`} className="btn bg-red-700 text-white hover:bg-gray-900 border-none">Get Food</Link>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Banner;