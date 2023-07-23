'use client'
import img1 from '../../../public/blogImages/DSP.jpg'
import img2 from '../../../public/blogImages/Aggregation Framework in MongoDB.png'
import img3 from '../../../public/blogImages/es6.webp'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
const RecentSlider = () => {
    const [recentPosts, setRecentPosts] = useState([]);
    useEffect(() => {
        const fetchRecentBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/date');
                const fetchedData = response.data;
                setRecentPosts(fetchedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };
        fetchRecentBlogs();
    }, []);
    if (recentPosts.length === 0) {
        return <div>Loading...</div>; // You can show a loading indicator while fetching the data
    }
    console.log("recent posts", recentPosts);

    return (
        <div className=''>
            <div className="grid grid-cols-12 gap-6">
                {/* cover image */}
                <div className="col-span-8 h-full">
                    <div data-aos="zoom-in" className="h-full">
                        <div className="relative group h-full">
                            <img src={recentPosts[0].image} alt="Image 1" className="w-full h-full" />
                            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-orange lg:text-4xl font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-white">
                                    {recentPosts[0].title}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="">
                        {/* 2nd image */}
                        <div data-aos="zoom-in" className="mb-[28px] ">
                            <div className="relative group">
                                <img src={recentPosts[1].image} alt="Image 1" className="w-full" />
                                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-orange lg:text-xl px-2 font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-white">
                                        {recentPosts[1].title}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 3rd image */}
                        <div className="relative group">
                            <img src={recentPosts[2].image} alt="Image 1" className="w-full" />
                            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-orange lg:text-xl px-2 font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-white">
                                    {recentPosts[2].title}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentSlider;