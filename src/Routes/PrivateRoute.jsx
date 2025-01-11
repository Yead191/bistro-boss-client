import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='flex min-h-screen justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>

    }
    if (user) {
        return children

    }
    return (
        <Navigate to={'/login'} state={location.pathname}></Navigate>
    );
};

export default PrivateRoute;