'use client'
import SectionTitle from '@/components/SectionTitle';
import SubCategory from '@/components/SubCategory';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await axios.get('https://devdaireies-server-shiningsudipto.vercel.app/blogs/javascript');
                const fetchedData = response.data;
                setAllPosts(fetchedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };
        fetchPopularBlogs();
    }, []);
    console.log(allPosts);
    return (
        <>
            <div className="section-gap">
                <SectionTitle
                    heading={"JavaScript"}
                    subHeading={"All JavaScript Blogs"}
                ></SectionTitle>
                <div className='grid grid-cols-1 gap-6'>
                    {
                        allPosts.map(post => {
                            return <SubCategory key={post._id}
                                post={post}
                            ></SubCategory>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Page;