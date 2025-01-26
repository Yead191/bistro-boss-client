import { FaUtensils, FaShoppingBag, FaPhoneAlt, FaDollarSign } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";

const UserHome = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: userStats = {} } = useQuery({
        queryKey: ['user-stats'],
        queryFn: async () => {

            const res = await axiosSecure.get(`/user-stats/${user.email}`)
            return res.data
        }
    })
    // console.log(userStats);
    return (
        <div className="p-6 bg-gray-50">
            {/* Welcome Section */}
            <h1 style={{ fontVariant: 'small-caps' }} className='text-xl'>Hi, Welcome Back</h1>
            <h1 style={{ fontVariant: 'small-caps' }} className='text-3xl text-[#2e1f9e] lg:text-4xl'>{user?.displayName}</h1>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 my-12">
                <div className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl">
                    <div className="card-body items-center">
                        <FaUtensils className="text-3xl" />
                        <h3 className="text-2xl font-bold">{userStats?.menuItems}</h3>
                        <p className="text-sm">Menu</p>
                    </div>
                </div>
                <div className="card bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-xl">
                    <div className="card-body items-center">
                        <FaShoppingBag className="text-3xl" />
                        <h3 className="text-2xl font-bold">{userStats?.totalOrders}</h3>
                        <p className="text-sm">Total Order</p>
                    </div>
                </div>
                <div className="card bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-xl">
                    <div className="card-body items-center">
                        <FaDollarSign className="text-3xl" />
                        <h3 className="text-2xl font-bold">{userStats?.totalPaid}</h3>
                        <p className="text-sm">Total Spent</p>
                    </div>
                </div>
            </div>

            {/* Profile Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Profile Card */}
                <div className="card bg-orange-100 shadow-lg p-6 flex flex-col items-center">
                    <div className="w-24 h-24 bg-white rounded-full mb-4">
                        <img className="rounded-full w-full" src={user?.photoURL} alt="" />

                    </div>
                    <h3 className="text-lg font-bold">{user?.displayName}</h3>
                </div>

                {/* Activities Card */}
                <div className="card bg-yellow-100 shadow-lg p-6">
                    <h3 className="text-lg font-bold mb-4">Your Activities</h3>
                    <ul className="space-y-2">
                        <li className="text-blue-600">
                            <span className="font-medium">Total Orders:</span> {userStats?.totalOrders}
                        </li>
                        <li className="text-teal-600">
                            <span className="font-medium">Reviews:</span> 2
                        </li>
                        <li className="text-orange-600">
                            <span className="font-medium">Total Paid:</span> {userStats?.totalPaid}
                        </li>
                        <li className="text-red-600">
                            <span className="font-medium">Payment:</span> {userStats?.totalTransactions}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
