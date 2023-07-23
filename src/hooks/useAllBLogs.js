// 'useBlogs'

import { useState, useEffect } from 'react';
import axios from 'axios';

const useBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs');
                const fetchedData = response.data;
                setAllBlogs(fetchedData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchAllBlogs();
    }, []);

    return { allBlogs, loading, error };
};

export default useBlogs;
