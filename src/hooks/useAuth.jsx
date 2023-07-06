import AuthProvider from '@/Context/AuthProvider';
import { useContext } from 'react';

const UseAuth = () => {
   const auth = useContext(AuthProvider);
   return auth;
};

export default UseAuth;