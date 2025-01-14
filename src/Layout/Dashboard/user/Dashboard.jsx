import React from "react";
import {
    FaHome,
    FaCartPlus,
    FaHistory,
    FaRegCalendarAlt,
    FaEdit,
    FaConciergeBell,
    FaBars,
    FaShoppingBag,
    FaEnvelope,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { FaUser, FaUsers } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdMenu } from "react-icons/io";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart()

    const handleNavClick = () => {
        const drawerCheckbox = document.getElementById("dashboard-drawer");
        if (drawerCheckbox) {
            drawerCheckbox.checked = false; // Uncheck the drawer checkbox
        }
    };
    const [isAdmin] = useAdmin()
    return (
        <div className="drawer lg:drawer-open h-screen cinzel">
            {/* Drawer Toggle Checkbox */}
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar with Toggle Button */}
                <div className="p-4 bg-[#D5A368] text-white flex items-center justify-between lg:hidden fixed z-10 w-full ">
                    <label htmlFor="dashboard-drawer" className="btn btn-ghost text-black drawer-button lg:hidden">
                        <FaBars className="text-2xl" />
                    </label>
                    <Link to={'/'} className="text-xl font-bold text-slate-700">BISTRO BOSS</Link>
                </div>

                <div className="lg:ml-64 mt-20 lg:mt-0">
                    {/* Main Content */}
                    <Outlet />
                </div>

            </div>
            <div className="drawer-side ">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                {/* Sidebar */}
                <div className="bg-[#D5A368] text-white w-64 flex flex-col justify-between  min-h-full fixed z-10">
                    {/* Logo */}
                    <div className="p-6 text-black font-bold text-center">
                        <h1 className="text-xl lg:text-3xl">BISTRO BOSS</h1>
                        <p style={{ fontVariant: "small-caps" }} className="text-md leading-10">
                            R e s t a u r a n t
                        </p>
                    </div>
                    {/* Links */}
                    <div className="flex-grow">
                        {/* admin / user route */}
                        {
                            isAdmin ?
                                <ul
                                    style={{ fontVariant: "small-caps" }}
                                    className="space-y-4 p-4 pl-6 text-slate-800 font-light"
                                >
                                    <li>
                                        <NavLink
                                            onClick={handleNavClick}
                                            to={"/dashboard/home"}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 ${isActive ? "text-white text-md lg:text-xl" : "text-slate-800"
                                                }`
                                            }
                                        >
                                            <FaHome /> <span>Admin Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={handleNavClick}
                                            to={"/dashboard/add-items"}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 ${isActive ? "text-white text-md lg:text-xl" : "text-slate-800"
                                                }`
                                            }
                                        >
                                            <ImSpoonKnife /> <span>Add Items</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={handleNavClick}
                                            to={"/dashboard/manage-items"}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 ${isActive ? "text-white text-md lg:text-xl" : "text-slate-800"
                                                }`
                                            }
                                        >
                                            <IoMdMenu /> <span>Manage Items</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={handleNavClick}
                                            to={"/dashboard/payment"}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 ${isActive ? "text-white text-md lg:text-xl" : "text-slate-800"
                                                }`
                                            }
                                        >
                                            <BsFillJournalBookmarkFill /> <span>Manage Bookings</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={handleNavClick}
                                            to={"/dashboard/users"}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 ${isActive ? "text-white text-md lg:text-xl" : "text-slate-800"
                                                }`
                                            }
                                        >
                                            <FaUsers /> <span> All Users</span>
                                        </NavLink>
                                    </li>
                                    
                                </ul>
                                :
                                <ul
                                    style={{ fontVariant: "small-caps" }}
                                    className="space-y-4 p-4 pl-6 text-slate-800 font-light"
                                >
                                    <li>
                                        <NavLink
                                            onClick={handleNavClick}
                                            to={"/dashboard/home"}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 ${isActive ? "text-white text-md lg:text-xl" : "text-slate-800"
                                                }`
                                            }
                                        >
                                            <FaHome /> <span>User Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={handleNavClick}
                                            to={"/dashboard/reservation"}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 ${isActive ? "text-white text-md lg:text-xl" : "text-slate-800"
                                                }`
                                            }
                                        >
                                            <FaRegCalendarAlt /> <span>Reservation</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={handleNavClick}
                                            to={"/dashboard/payment"}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 ${isActive ? "text-white text-md lg:text-xl" : "text-slate-800"
                                                }`
                                            }
                                        >
                                            <FaHistory /> <span>Payment History</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={handleNavClick}
                                            to={"/dashboard/cart"}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 ${isActive ? "text-white text-md lg:text-xl" : "text-slate-800"
                                                }`
                                            }
                                        >
                                            <FaCartPlus /> <span>My Cart ({cart.length})</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={handleNavClick}
                                            to={"/dashboard/add-review"}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 ${isActive ? "text-white text-md lg:text-xl" : "text-slate-800"
                                                }`
                                            }
                                        >
                                            <FaEdit /> <span>Add Review</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={handleNavClick}
                                            to={"/dashboard/my-booking"}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 ${isActive ? "text-white text-md lg:text-xl" : "text-slate-800"
                                                }`
                                            }
                                        >
                                            <FaConciergeBell /> <span>My Booking</span>
                                        </NavLink>
                                    </li>
                                </ul>
                        }

                        <hr className="border-t border-white mx-4" />
                        <ul
                            style={{ fontVariant: "small-caps" }}
                            className="space-y-4 p-4 pl-6 text-slate-800 lg:text-xl font-light"
                        >
                            <li>
                                <NavLink
                                    to={"/"}
                                    className="flex items-center gap-3"
                                >
                                    <FaHome /> <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/menu"} className="flex items-center gap-3">
                                    <FaBars /> <span>Menu</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/order/salad"} className="flex items-center gap-3">
                                    <FaShoppingBag /> <span>Shop</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="flex items-center gap-3">
                                    <FaEnvelope /> <span>Contact</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
