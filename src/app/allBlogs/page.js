'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const page = () => {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const fetchRecentBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs');
                const fetchedData = response.data;
                setRecentPosts(fetchedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };
        fetchRecentBlogs();
    }, []);


    // console.log(recentPosts);
    return (
        <div>
            <div class="main">

                {/* search bar */}
                <div className='my-5'>
                    <div className='flex justify-center'>
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Search by name" className="input input-bordered" />
                                <button className="btn btn-square ">
                                   <FaSearch></FaSearch> 
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <ul class="cards">
                    {
                        recentPosts.map((recentPost, index) => (
                          <div key={index}>helloooooo</div>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default page;