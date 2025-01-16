import axios from 'axios';
import React from 'react';
const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-nu-nine.vercel.app'
})
const useAxiosPublic = () => {
    return axiosSecure
};

export default useAxiosPublic;