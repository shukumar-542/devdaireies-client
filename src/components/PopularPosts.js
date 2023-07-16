'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SinglePopularPosts from './SinglePopularPost';
import SectionTitle from './SectionTitle';

const PopularPosts = () => {

    const [popularPostsOfPython, setPopularPostsOfPython] = useState([]);
    const [popularPostsOfGo, setPopularPostsOfGo] = useState([]);
    const [popularPostsOfPHP, setPopularPostsOfPHP] = useState([]);
    const [popularPostsOfJS, setPopularPostsOfJS] = useState([]);
    const [popularPosts, setPopularPosts] = useState([]);
    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs/populars');
                const fetchedData = response.data;
                setPopularPosts(fetchedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };

        fetchPopularBlogs();
    }, []);
    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs/javascript');
                const fetchedData = response.data;
                setPopularPostsOfJS(fetchedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };

        fetchPopularBlogs();
    }, []);
    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs/php');
                const fetchedData = response.data;
                const slicedData = fetchedData.slice(0, 3);
                setPopularPostsOfPHP(slicedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };

        fetchPopularBlogs();
    }, []);
    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs/go');
                const fetchedData = response.data;
                const slicedData = fetchedData.slice(0, 3);
                setPopularPostsOfGo(slicedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };

        fetchPopularBlogs();
    }, []);
    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs/python');
                const fetchedData = response.data;
                const slicedData = fetchedData.slice(0, 3);
                setPopularPostsOfPython(slicedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };

        fetchPopularBlogs();
    }, []);

    // console.log("popular posts", popularPosts);
    // console.log("popular popular Posts Of JS", popularPostsOfJS);

    return (
        <div>
            <div>
                <SectionTitle
                    heading={"Popular Posts"}
                    subHeading={"most liked posts"}
                ></SectionTitle>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        popularPosts.map(post => {
                            return <SinglePopularPosts key={post._id}
                                post={post}
                            ></SinglePopularPosts>
                        })
                    }
                </div>
            </div>
            <div>
                <SectionTitle
                    heading={"popular javascript posts"}
                    subHeading={"most liked javascript posts"}
                ></SectionTitle>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        popularPostsOfJS.map(post => {
                            return <SinglePopularPosts key={post._id}
                                post={post}
                            ></SinglePopularPosts>
                        })
                    }
                </div>
            </div>
            <div>
                <SectionTitle
                    heading={"popular PHP posts"}
                    subHeading={"most liked PHP posts"}
                ></SectionTitle>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        popularPostsOfPHP.map(post => {
                            return <SinglePopularPosts key={post._id}
                                post={post}
                            ></SinglePopularPosts>
                        })
                    }
                </div>
            </div>
            <div>
                <SectionTitle
                    heading={"popular go posts"}
                    subHeading={"most liked go posts"}
                ></SectionTitle>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        popularPostsOfGo.map(post => {
                            return <SinglePopularPosts key={post._id}
                                post={post}
                            ></SinglePopularPosts>
                        })
                    }
                </div>
            </div>
            <div>
                <SectionTitle
                    heading={"popular python posts"}
                    subHeading={"most liked python posts"}
                ></SectionTitle>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        popularPostsOfPython.map(post => {
                            return <SinglePopularPosts key={post._id}
                                post={post}
                            ></SinglePopularPosts>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularPosts;
