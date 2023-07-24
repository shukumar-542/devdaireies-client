'use client'
import img1 from '../../../public/blogImages/DSP.jpg'
import img2 from '../../../public/blogImages/Aggregation Framework in MongoDB.png'
import img3 from '../../../public/blogImages/es6.webp'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Spinner from '@/components/Spinner/Spinner';
const RecentSlider = () => {
    const [recentPosts, setRecentPosts] = useState([]);
    useEffect(() => {
        const fetchRecentBlogs = async () => {
            try {
                const response = await axios.get('https://devdaireies-server-shiningsudipto.vercel.app/date');
                const fetchedData = response.data;
                setRecentPosts(fetchedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };
        fetchRecentBlogs();
    }, []);
    console.log(recentPosts);
    if (recentPosts.length === 0) {
        return <Spinner></Spinner> // You can show a loading indicator while fetching the data
    }
    // console.log("recent posts", recentPosts);

    return (
        <div className=''>
            <div className="grid grid-cols-12 gap-4">
                {/* cover image */}
                <div className="col-span-8 h-full">
                    <Link href={`allBlogs/${recentPosts[0]?._id}`}>
                        <div data-aos="zoom-in" className="h-full overflow-hidden">
                            <div className="relative group h-full hover:scale-110 transition duration-500 cursor-pointer object-cover">
                                <img src={recentPosts[0]?.image} alt="Image 1" className="w-full h-full" />
                                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-orange lg:text-4xl font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-white">
                                        {recentPosts[0]?.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-span-4">
                    <div className="">
                        {/* 2nd image */}
                        <Link href={`allBlogs/${recentPosts[1]?._id}`}>
                            <div data-aos="zoom-in" className="mb-[28px]  overflow-hidden">
                                <div className="relative group hover:scale-110 transition duration-500 cursor-pointer object-cover">
                                    <img src={recentPosts[1]?.image} alt="Image 1" className="w-full" />
                                    <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-orange lg:text-xl px-2 font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-white">
                                            {recentPosts[1]?.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/* 3rd image */}
                        <Link href={`allBlogs/${recentPosts[2]?._id}`}>
                            <div className='overflow-hidden '>
                                <div className="relative group hover:scale-110 transition duration-500 cursor-pointer object-cover ">
                                    <img src={recentPosts[2]?.image} alt="Image 1" className="w-full " />
                                    <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-orange lg:text-xl px-2 font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-white">
                                            {recentPosts[2]?.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentSlider;