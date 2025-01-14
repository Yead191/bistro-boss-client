import React from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from '../hooks/useCart';

const FoodCard = ({ item }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { name, image, price, recipe, _id } = item
    const [, refetch] = useCart()
    const handleAddToCart = () => {
        // console.log(product);
        if (user && user.email) {
            // ..
            const cartItem = {
                menu_id: _id,
                email: user.email,
                name,
                image,
                price

            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        // toast.success(`${name} added to your Cart!`, {
                        //     position: "top-right"
                        // })
                        toast.success(`${name} added to your Cart!`)
                        refetch()
                    }
                })

        }
        else {
            Swal.fire({
                title: "You're not Logged in",
                text: "Please login to add item to Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#8bde1a",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: location.pathname });

                }
            });
        }
    }
    return (
        <div className="card bg-base-200 w-full shadow-xl">
            <figure>
                <img className='w-full object-cover  h-[260px]'
                    src={image}
                    alt="item" />

            </figure>
            <p className=' badge badge-neutral  absolute right-3 top-2 rounded-sm'>$ {price} </p>
            <div className="card-body">
                <h2 className="font-semibold text-xl text-center">{name}</h2>
                <p className='text-gray-400'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn bg-base-300 hover:bg-neutral  border-0 border-b-2 border-[#BB8506] text-[#BB8506]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;