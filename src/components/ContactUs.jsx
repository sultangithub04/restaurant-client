import React from "react";
import bannerImg from '../assets/banner.jpg';
import { useForm } from "react-hook-form";
import { AiOutlineUser, AiOutlinePhone, AiOutlineCalendar } from "react-icons/ai";
import { FaUsers, FaClock } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate= useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        toast.success("Form submitted successfully!");
        navigate('/')
   
    };

    return (
        <div>
            {/* test */}
            <div
                className="hero "
                style={{
                    backgroundImage: `url(${bannerImg})`,
                }}>
                <div className=""></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <br /><br />
                        <h1 className="mb-5 text-5xl font-bold">FOOD GALLERY  </h1>
                        <br /><br />
                    </div>
                </div>
            </div>
            {/* test */}
            <br />
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">

                <h2 className="text-2xl font-semibold mb-6 text-center">Feedback Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            <AiOutlineUser className="inline-block mr-2" /> Your Name*
                        </label>
                        <input
                            id="name"
                            {...register("name", { required: "Name is required" })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500"
                            placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            <AiOutlinePhone className="inline-block mr-2" /> Phone Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            {...register("phone", {
                                pattern: {
                                    value: /^[0-9]{10,15}$/,
                                    message: "Invalid phone number",
                                },
                            })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500"
                            placeholder="Enter your phone number"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* Number of Guests */}
                    <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                            <FaUsers className="inline-block mr-2" /> Number of Guests*
                        </label>
                        <input
                            id="guests"
                            type="number"
                            {...register("guests", {
                                required: "Number of guests is required",
                                min: { value: 1, message: "At least 1 guest is required" },
                            })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500"
                            placeholder="Enter number of guests"
                        />
                        {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>}
                    </div>

                    {/* Date of Reservation */}
                    <div>
                        <label htmlFor="reservationDate" className="block text-sm font-medium text-gray-700">
                            <AiOutlineCalendar className="inline-block mr-2" /> Date of Reservation*
                        </label>
                        <input
                            id="reservationDate"
                            type="date"
                            {...register("reservationDate", {
                                required: "Reservation date is required",
                            })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500"
                        />
                        {errors.reservationDate && (
                            <p className="text-red-500 text-sm mt-1">{errors.reservationDate.message}</p>
                        )}
                    </div>

                    {/* Time of Reservation */}
                    <div>
                        <label htmlFor="reservationTime" className="block text-sm font-medium text-gray-700">
                            <FaClock className="inline-block mr-2" /> Time of Reservation
                        </label>
                        <input
                            id="reservationTime"
                            type="time"
                            {...register("reservationTime")}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>

                    {/* Additional Notes */}
                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                            Additional Notes
                        </label>
                        <textarea
                            id="notes"
                            {...register("notes")}
                            rows="3"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500"
                            placeholder="Write your notes here"
                        ></textarea>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            {...register("agree", {
                                required: "You must agree to use your personal data",
                            })}
                            className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                        />
                        <label htmlFor="agree" className="ml-2 text-sm text-gray-700">
                            I agree to use my personal data.
                        </label>
                    </div>
                    {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree.message}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Send Your Reservation
                    </button>
                </form>
                <br />
                <br />
            </div>
        </div>

    );
};

export default ContactUs;
