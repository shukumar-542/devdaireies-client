// 'useBlogs'

import { useState, useEffect } from 'react';
import axios from 'axios';

const useUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                const fetchedData = response.data;
                setAllUsers(fetchedData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchAllUsers();
    }, []);

    return { allUsers, loading, error };
};

export default useUsers;
