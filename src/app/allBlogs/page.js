'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { FaThumbsUp } from "react-icons/fa";
const page = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [searchText, setSearchText] = useState("");
    // const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const fetchRecentBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs');
                const fetchedData = response.data;
                setAllBlogs(fetchedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };
        fetchRecentBlogs();
    }, []);

    // handle search blog
    const handleSearch = () => {
        fetch(`http://localhost:5000/blog/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                setAllBlogs(data);
            });
    }
    // console.log(allBlogs);

    return (
        <>
            {/* Search */}
            <div className="flex flex-col  justify-center items-center">
            <div className="form-control py-10">
                <div className="input-group">
                    <input type="text" placeholder="Search…" onChange={(e) => setSearchText(e.target.value)} className="input input-bordered" />
                    <button className="btn btn-square" onClick={handleSearch} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            </div>
            {/* Blogs */}
            {
                allBlogs.length ? <div className='grid grid-cols-3 gap-6 my-container'>
                {
                    allBlogs.map((blog, index) => (
                        <div className="" key={index}>
                            <div className="p-3 rounded-md hover:shadow-xl shadow-purple">
                                <div className="">
                                    <Image src={blog.image} alt='' className='rounded-md h-[220px] mb-2' height={300} width={400} />
                                </div>
                                <div className="space-y-3">
                                    <div className='flex justify-between mt-3'>
                                        <p className='border border-purple rounded-md py-1 px-3 hover:bg-purple hover:text-white transition ease-in-out duration-300 text-lightOrange font-semibold'>{blog.category}</p>
                                        <p className='border border-purple rounded-md py-1 px-3 hover:bg-purple hover:text-white transition ease-in-out duration-300 text-lightOrange font-semibold'>{blog.subcategory}</p>
                                    </div>
                                    <h2 className="font-bold text-purple text-2xl">{blog.title}</h2>
                                    <div className='flex justify-between items-center'>
                                        <p className='flex items-center text-lg cursor-pointer font-semibold  transition-transform transform-gpu hover:-translate-y-1'><FaThumbsUp className='text-deepOrange me-1' /> {blog.likes}</p>
                                        <button class="px-3 py-1 bg-gradient-to-r from-purple to-deepOrange text-white font-semibold rounded-md transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>  : <div className='text-2xl flex justify-center font-bold'>No Blog Available</div>
            }
        </>
    );
};

export default page;