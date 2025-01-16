import React from 'react';
import useCart from '../../../hooks/useCart';
import SectionHeader from '../../../components/SectionHeader'
import { FaTrash } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Cart = () => {
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
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

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
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
        <div className='flex flex-col  items-center p-4 bg-base-200 min-h-screen'>
            <SectionHeader heading={'Wanna Add More'} subHeading={'My Cart'}></SectionHeader>


            <div className='md:w-11/12 mx-auto bg-base-100 p-2 py-12 lg:p-16 mt-16'>
                <div style={{ fontVariant: 'small-caps' }} className='space-y-2 flex flex-col md:flex-row justify-between items-center mb-10'>
                    <h1 className='text-3xl'>Total Orders: {cart.length}</h1>
                    <h1 className='text-3xl'>Total Price: {totalPrice.toFixed(2)}</h1>
                    {
                        cart.length ?
                            <Link to={'/dashboard/payment'} className='btn bg-[#D1A054] text-base-100'>Pay</Link>
                            :
                            <button disabled to={'/dashboard/payment'} className='btn bg-[#D1A054] text-base-100'>Pay</button>

                    }
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#D1A054] rounded-2xl text-base-100 lg:text-md'>
                                <tr className=''>
                                    <th></th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    cart?.map((cartItem, index) =>
                                        <tr key={cartItem._id} className="hover">
                                            <th>{index + 1}</th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-16 w-16">
                                                        <img
                                                            src={cartItem.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>


                                            </td>
                                            <td className='lg:text-lg'>{cartItem.name}</td>
                                            <td className='lg:text-lg'>{cartItem.price}</td>
                                            <td>
                                                <button onClick={() => handleDelete(cartItem._id)} className='btn btn-error text-white btn-sm'> <FaTrash></FaTrash> </button>
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

export default Cart;