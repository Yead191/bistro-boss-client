import React from 'react';
import useCart from '../../../hooks/useCart';
import SectionHeader from '../../../components/SectionHeader'
import { FaTrash } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { FaUsers } from 'react-icons/fa6';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been removed.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleRole = user => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        refetch()
                        if (res.data.modifiedCount > 0) {
                            Swal.fire(`${user.name} is an Admin Now!`, "", "success");
                        }
                    })
                    .catch(error => {
                        toast.error(error)
                    })

            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }



    return (
        <div className='flex flex-col  items-center p-4 bg-base-200 min-h-screen'>
            <SectionHeader heading={'Wanna Add More'} subHeading={'My Cart'}></SectionHeader>


            <div className='md:w-11/12 mx-auto bg-base-100 p-2 py-12 lg:p-16 mt-16'>
                <div style={{ fontVariant: 'small-caps' }} className='space-y-2 flex flex-col md:flex-row justify-between items-center mb-10'>
                    <h1 className='text-3xl'>Total Users: {users.length}</h1>
                </div>
                <div className='my-8  md:w-11/12 lg:w-10/12 mx-auto'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#D1A054] rounded-2xl text-base-100 lg:text-md'>
                                <tr className=''>
                                    <th></th>
                                    <th>User Image</th>
                                    <th>User Name</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className=''>

                                {
                                    users?.map((user, index) =>
                                        <tr key={user._id} className="hover">
                                            <th>{index + 1}</th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-16 w-16">
                                                        <img
                                                            src={user.photo}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>


                                            </td>
                                            <td className='lg:text-lg'>
                                                {user.name}
                                                <br />
                                                {user.createdAt}
                                            </td>
                                            <td className='lg:text-lg  '>
                                                <button onClick={() => handleRole(user)} className='text-white btn btn-md bg-[#D1A054]'>

                                                    {
                                                        user.role === 'admin' ?
                                                            'admin' :
                                                            <FaUsers className='text-xl'></FaUsers>
                                                    }
                                                </button>
                                            </td>
                                            <td className=''>
                                                <button onClick={() => handleDelete(user._id)} className='btn btn-error text-white btn-sm'> <FaTrash></FaTrash> </button>
                                            </td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllUsers;