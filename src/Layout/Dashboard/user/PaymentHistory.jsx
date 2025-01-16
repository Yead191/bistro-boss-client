import React, { useEffect } from 'react';
import SectionHeader from '../../../components/SectionHeader';

import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrash } from 'react-icons/fa';

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    // useEffect(() => {
    //     axiosSecure.get(`/payments/${user.email}`)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    // }, [])
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data

        }
    })
    console.log(payments);
    return (
        <div className='my-8'>
            <SectionHeader heading={'Payment History'} subHeading={'Check Your Payment History'} ></SectionHeader>
            <div className="overflow-x-auto my-12 w-11/12 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#D1A054] rounded-2xl text-base-100 lg:text-md'>
                        <tr className=''>
                            <th>#</th>
                            <th>Email</th>
                            <th>Payment Date</th>
                            <th>Total Price</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            payments?.map((payment, index) =>
                                <tr key={payment._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>
                                        {payment.email}
                                    </td>
                                    <td className='lg:text-lg'>{payment.date}</td>
                                    <td className='lg:text-lg'>{payment.price.toFixed(2)}</td>
                                    <td>
                                        {
                                            payment.transactionId
                                        }
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default PaymentHistory;