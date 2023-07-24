import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from './useAuth';

const useUserRole = () => {
    const { user } = useAuth();
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/users/${user?.email}`);
                const fetchedData = response.data;
                setUserDetails(fetchedData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [user?.email]);

    return { role: userDetails?.role, loading, error };
};

export default useUserRole;
