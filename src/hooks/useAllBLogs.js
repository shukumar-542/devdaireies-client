'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAllBlogs = () => {
    const [allBLogs, setAllBlogs] = useState([]);

    const fetchAllBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/blogs');
            const fetchedData = response.data;
            setAllBlogs(fetchedData);
        } catch (error) {
            console.error('Error fetching popular blogs:', error);
        }
    };

    useEffect(() => {
        fetchAllBlogs();
    }, []);

    return {
        allBLogs,
        fetchAllBlogs,
    };
};

export default useAllBlogs;
