'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
                <ul class="cards">
                    {
                        recentPosts.map((recentPost, index) => (
                            <li class="cards_item" key={index}>
                                <div class="card">
                                    <div class="card_image"><img src={recentPost.image} /></div>
                                    <div class="card_content">
                                        <h2 class="card_title">Card Grid Layout</h2>
                                        <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                        <button class="btn card_btn">Read More</button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default page;