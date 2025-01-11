import React from 'react';

const Payment = () => {
    return (
        <div className="flex-1 bg-white flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-2xl font-bold mb-8">PAYMENT</h1>
            <div className="flex flex-col md:flex-row items-center gap-4">
                <input
                    type="text"
                    placeholder="Card number"
                    className="input input-bordered w-60"
                />
                <input
                    type="text"
                    placeholder="MM/YY/CVC"
                    className="input input-bordered w-60"
                />
            </div>
            <button className="btn btn-primary bg-purple-600 text-white mt-6 w-40">
                Pay
            </button>
        </div>
    );
};

export default Payment;