// 'useBlogs'

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllBlogs = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:5000/blogs');
            const fetchedData = response.data;
            setAllBlogs(fetchedData);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAllBlogs();
    }, [fetchAllBlogs]);

    const refetchBlogs = () => {
        setLoading(true);
        fetchAllBlogs();
    };

    return { allBlogs, loading, error, refetchBlogs };
};

export default useBlogs;
