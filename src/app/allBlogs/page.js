'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaThumbsUp } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Link from 'next/link';
const Page = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [result, setResult] = useState([])
    const [dropdownVisible, setDropdownVisible] = useState(false);
    console.log(dropdownVisible);

    useEffect(() => {
        const fetchRecentBlogs = async () => {
            try {
                const response = await axios.get('https://devdaireies-server-shiningsudipto.vercel.app/blog/approved');
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
        setDropdownVisible(false);
        fetch(`https://devdaireies-server-shiningsudipto.vercel.app/find/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                setAllBlogs(data);
            });
    }
    const fetchData = (value) => {
        fetch('https://devdaireies-server-shiningsudipto.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                const result = data.filter((blogs) => {
                    return blogs && blogs.subcategory.toLowerCase().includes(value)
                })
                setDropdownVisible(value !== '');
                setResult(result);
            })
    }

    const handleChange = (value) => {
        setSearchText(value)
        fetchData(value)
    }



    return (
        <>
            {/* Search */}
            <div className="flex flex-col pt-5 justify-center  items-center ">
                <div className=" w-1/2 mx-auto">
                    <div className=" border rounded-xl overflow-hidden flex items-center bg-white gap-1">
                        <FiSearch className='ps-2 text-3xl'></FiSearch>
                        <input type="text" className="w-full focus:outline-none p-2" placeholder="Type To Search…" onChange={(e) => handleChange(e.target.value)} />

                    </div>
                </div>
                <div className='bg-white  shadow-lg rounded-lg w-1/2 absolute z-10 mt-44  mx-auto max-h-28 dropdown-content overflow-y-auto'>
                    {
                        dropdownVisible && result.map((res, _id) => {
                            return <div className='text-center cursor-pointer hover:bg-gray-100 py-2' key={_id} onClick={() => handleSearch(res.subcategory)}>{res.subcategory}</div>
                        })
                    }
                </div>
            </div>
            {/* Blogs */}
            {
                allBlogs.length > 0 ? <div className='grid grid-cols-3 gap-6 relative z-0 my-container'>
                    {
                        allBlogs.map((blog, index) => (

                            <div className="" key={index}>
                                <div className="p-3 rounded-md hover:shadow-xl shadow-purple">
                                    <div className="">
                                        <Image src={blog.image} alt='' className='rounded-md h-[220px] mb-2' height={300} width={400} />
                                    </div>
                                    <div className="space-y-3">
                                        <div className='flex justify-between mt-3'>
                                            <p className='border  rounded-md py-1 px-3 hover:bg-orange-600 hover:text-white transition ease-in-out duration-300 text-lightOrange font-semibold'>{blog.category}</p>
                                            <p className='border  rounded-md py-1 px-3 hover:bg-orange-600 hover:text-white transition ease-in-out duration-300 text-lightOrange font-semibold'>{blog.subcategory}</p>
                                        </div>
                                        <h2 className="font-bold  text-2xl">{blog.title}</h2>
                                        <div className='flex justify-between items-center'>
                                            <p className='flex items-center text-lg cursor-pointer font-semibold  transition-transform transform-gpu hover:-translate-y-1'><FaThumbsUp className='text-deepOrange me-1' /> {blog.likes}</p>
                                            <Link href={`allBlogs/${blog._id}`}>
                                                <button class="px-3 py-1 bg-gradient-to-r from-purple to-deepOrange text-white font-semibold rounded-md transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                                                    Read More
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div> : <div className='text-2xl flex justify-center font-bold'>No Blog Available</div>
            }
        </>
    );
};

export default Page;