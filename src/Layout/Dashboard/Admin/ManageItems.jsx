import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import useMenu from '../../../hooks/useMenu';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()
    if (loading) {
        return <div className='flex min-h-screen justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>

    }
    const handleEditItem = (id) => {

    }
    const handleDeleteItem = (id) => {
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
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        // console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div className='my-12'>
            <SectionHeader
                heading={'Manage All Items'}
                subHeading={'Hurry Up'}
            >

            </SectionHeader>
            <div className='my-8  md:w-11/12 lg:w-10/12 mx-auto'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] rounded-2xl text-base-100 lg:text-md'>
                            <tr className=''>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                menu?.map((item, index) =>
                                    <tr key={item._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-16 w-16">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>


                                        </td>
                                        <td className='lg:text-lg'>{item.name}</td>
                                        <td className='lg:text-lg'>{item.price}</td>
                                        <td>
                                            <Link to={`/dashboard/update-item/${item._id}`} onClick={() => handleEditItem(item._id)} className='btn btn-info text-white btn-md'> <FaEdit></FaEdit> </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteItem(item._id)} className='btn btn-error text-white btn-md'> <FaTrash></FaTrash> </button>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;