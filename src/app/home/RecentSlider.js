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
                const response = await axios.get('http://localhost:5000/blog/date');
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
        <div className='z-0 pt-16'>
            <div className="grid grid-cols-12 gap-4">
                {/* cover image */}
                <div className="col-span-8">
                    <img src={recentPosts[0].image} className='h-full w-full relative' alt="" />
                    <div className='absolute bottom-0 text-white p-4 text-3xl font-bold mb-[70px]'>
                        <h2>{recentPosts[0].title}</h2>
                    </div>
                    {/* <Image src={recentPosts[0].image} alt='' className='h-full w-full' width={100} height={100} /> */}
                </div>
                <div className="col-span-4">
                    <div className="">
                        {/* 2nd image */}
                        <div className='mb-4 relative'>
                            <img src={recentPosts[1].image} alt="" />
                            <div className='absolute bottom-0 text-white p-2 font-bold text-xl'>
                                <h2>{recentPosts[1].title}</h2>
                            </div>
                            {/* <Image src={recentPosts[1].image} alt='' className='h-full w-full' width={100} height={100} /> */}
                        </div>
                        {/* 3rd image */}
                        <div className='relative'>
                            <img src={recentPosts[2].image} alt="" className='h-full' />
                            <div className='absolute bottom-0 text-white p-2 font-bold text-xl'>
                                <h2>{recentPosts[2].title}</h2>
                            </div>
                            {/* <Image src={recentPosts[2].image} alt='' className='h-full w-full' width={100} height={100} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentSlider;