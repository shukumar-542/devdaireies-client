// 'useBlogs'

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllUsers = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:5000/users');
            const fetchedData = response.data;
            setAllUsers(fetchedData);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAllUsers();
    }, [fetchAllUsers]);

    const refetchUsers = () => {
        setLoading(true);
        fetchAllUsers();
    };

    return { allUsers, loading, error, refetchUsers };
};

export default useUsers;
