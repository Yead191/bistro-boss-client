import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';

const SocialLogin = () => {
    const navigate = useNavigate()
    const { signInWithGoogle } = useAuth()
    const location = useLocation()
    const from = location.state || '/'
    const axiosPublic = useAxiosPublic()
    // const handleLoginWithGoogle = () => {
    //     signInWithGoogle()
    //         .then(result => {
    //             navigate(from)
    //             const user = { email: result.user.email }
    //             axios.post('https://tutor-lagbe-server.vercel.app/jwt', user, { withCredentials: true })
    //                 .then(data => {
    //                     // console.log(data);
    //                 })
    //             toast.success(`Logged in as: ${result.user.displayName}`)
    //             const newUser = {
    //                 name: result.user.displayName,
    //                 email: result.user.email,
    //                 createdAt: result?.user?.metadata?.creationTime,
    //             }
    //             axios.put('https://tutor-lagbe-server.vercel.app/users', newUser)
    //                 .then(result => {
    //                     // console.log(result);
    //                 })
    //         })
    //         .catch(error => {
    //             toast.error(error.message);
    //         })

    // }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                // console.log(res);
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email,
                    photo: res.user?.photoURL,
                    createdAt: res.user?.metadata?.creationTime

                }
                toast.success(`Signed in as: ${userInfo.name}`)
                navigate(from)
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        // console.log(res.data);
                        
                        // console.log(res);
                    })

            })
            .catch(error => {
                toast.error(error);
            })
    }
    return (
        <div>
            <div className="flex gap-3 mb-6">
                <button onClick={handleGoogleSignIn} className="bg-gray-200 hover:bg-gray-300 rounded-xl px-5 h-10 flex  gap-3 items-center justify-center">
                    <FcGoogle /> Sign in With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;