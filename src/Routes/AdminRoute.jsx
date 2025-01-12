import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    const [isAdmin ,isAdminLoading] =useAdmin()
    if (loading || isAdminLoading) {
        return <div className='flex min-h-screen justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>

    }
    if (user && isAdmin) {
        return children

    }
    return (
        <Navigate to={'/login'} state={location.pathname}></Navigate>
    );
};

export default AdminRoute;