'use client'
import SectionTitle from '@/components/SectionTitle';
import SubCategory from '@/components/SubCategory';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/subcategory/mongodb');
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
                    heading={"MongoDB"}
                    subHeading={"Everything about MongoDB"}
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

export default page;