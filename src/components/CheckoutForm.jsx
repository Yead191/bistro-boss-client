import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

import useCart from '../hooks/useCart.jsx'
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure.jsx';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckoutForm = () => {
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [error, setError] = useState('')
    const [transaction, setTransaction] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {

                    // console.log(res);
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [])

    // console.log(clientSecret);



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            // console.log(error);
            setError(error.message)
        } else {
            // console.log(paymentMethod);
            setError('')
        }
        //confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.name || ' anonymous',
                    email: user?.email || ' anonymous'
                }
            }
        })
        if (confirmError) {
            // console.log('confirm error');
            setError(confirmError.message)
        }
        else {
            // console.log('payment intent', paymentIntent);
            setError('')
            if (paymentIntent.status === 'succeeded') {
                setTransaction(paymentIntent.id);
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date(), //utc convert data, use moment js 
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menu_id),
                    status: 'pending',
                    transactionId: paymentIntent.id


                }
                const res = await axiosSecure.post('/payments', payment)
                // console.log(res.data);
                if (res.data.result.insertedId) {
                    refetch()
                    e.target.reset()
                    navigate('/dashboard/payment-history')
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `$${totalPrice} has been Paid Successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }

            }

        }
    };

    return (
        <div className="flex flex-col   p-4 w-full md:w-11/12 lg:w-10/12 ">


            <form onSubmit={handleSubmit} className="bg-base-100 p-6 rounded-lg shadow-lg w-11/12 lg:w-8/12 mx-auto ">
                {/* <h2 className="text-2xl font-semibold text-center mb-6">Payment Details</h2> */}
                <div style={{ fontVariant: 'small-caps' }} className='space-y-2 flex flex-col md:flex-row justify-around items-center mb-10'>
                    <h1 className='text-3xl'>Total Orders: {cart.length}</h1>
                    <h1 className='text-3xl'>Total Price: {totalPrice.toFixed(2)}</h1>

                </div>

                <div className="mb-4">
                    <CardElement
                        options={{
                            style: {

                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146'
                                },
                            },
                        }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={!stripe || !clientSecret}
                    className="w-full py-3 mt-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                    Pay Now
                </button>
                <p className='mt-2 text-sm text-red-500'>{error}</p>
                {
                    transaction && <p className='text-sm text-green-500'>Your transaction id: {transaction} </p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;
