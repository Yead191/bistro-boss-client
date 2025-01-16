import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../../components/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


// add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const Payment = () => {
    // const options = {
    //     // passing the client secret obtained from the server
    //     clientSecret: '',
    // };
    return (
        <div className="my-8">
            <SectionHeader heading={'Payment'} subHeading={'Pay To Eat'}></SectionHeader>
            <div className="flex-1 bg-white flex flex-col justify-center items-center min-h-[70vh]">
                <Elements stripe={stripePromise} >
                    <CheckoutForm />
                </Elements>


            </div>
        </div>
    );
};

export default Payment;