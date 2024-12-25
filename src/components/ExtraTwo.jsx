import { Link } from 'react-router-dom';
// import image2 from '../assets/slider-1.png'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/Animation.json";
import { Fade, Flip } from "react-awesome-reveal";
const ExtraTwo = () => {
    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img
                    src={image2}
                    className="max-w-sm rounded-lg shadow-2xl h-72" /> */}
                <div className='w-full'>
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                </div>

                <div>

                    <Fade>
                        <h1 className="text-5xl font-bold text-red-700">Register Now!</h1>
                    </Fade>
                    <p className="py-6">
                        In 21st century student and industry executive is driven by strong likes and dislikes. They are not ready to accept mocked-success or opinionated influence. They want their answers through facts, figures & data, but touched by the inner voice. We give this experience to our clients. We have guided
                    </p>
                    <Link to='/registration' className="btn  bg-red-700 text-white">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default ExtraTwo;